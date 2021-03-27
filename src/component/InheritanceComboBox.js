import React from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';
import Utility from '../util/Utility'
// import { toJS } from 'mobx';

function InheritanceComboBox ({
  label, onChange, options, helperText, required, value, findSubComboBox,
  findComboBoxByParent, fieldOption
}) {
  const [show, setShow] = React.useState(false);
  const [parent, setParent] = React.useState({});
  const [subComboBox, setSubComboBox] = React.useState([]);

  const _findSubComboBox = (parent) => {
    findSubComboBox(parent)
      .then(response => { console.log('findSubComboBox', response); return response.status === 200 ? setSubComboBox(response) : null })
      .catch(e => console.log('_findSubComboBox in InheritanceComboBox is error: ', e))
  }

  const _findComboBoxByParent = (id) => {
    findComboBoxByParent(id)
      .then(response => setParent(response))
      .catch(e => console.log('_findComboBoxByParent in InheritanceComboBox: ', e));
  }

  // value in method hamoon category ast
  const _onChange = (value) => {
    /* parent baraie in ezafe shod ke vaqti user eqdam be hazfe child mikone
        meqdar parent be method onChange laye balatar bere */
    if (!Utility.isEmpty(value) && Utility.isEmpty(subComboBox) && Utility.isEmpty(parent)) {
      if (!Utility.isEmpty(value.parent)) {
        _findComboBoxByParent(value.parent.id);
      } else {
        setParent(null);
      }
    }
    if (!show && value) {
      _findSubComboBox(value);
    }
    /* vaqti category null hast subCategory agedare baiad null beshe */
    setShow(!!value);
    if (Utility.isEmpty(value)) {
      onChange(parent);
    } else {
      onChange(value);
    }
  }

  return (
    <React.Fragment>
      <InputField
        required={required}
        comboBox
        label={label}
        clear={!!Utility.isEmpty(value)}
        options={options}
        getOptionLabel={(option) => option[fieldOption]}
        onChange={value => { _onChange(value) }}
        helperText={helperText}
        fullWidth
      />
      {show && !Utility.isEmpty(subComboBox) &&
                <InheritanceComboBox
                  label={label}
                  fieldOption={fieldOption}
                  options={subComboBox}
                  onChange={value => _onChange(value)}
                  helperText={helperText}
                  findSubComboBox={parent => findSubComboBox(parent)}
                  findComboBoxByParent={id => findComboBoxByParent(id)}
                />
      }
    </React.Fragment>
  );
}

InheritanceComboBox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.object,
  findSubComboBox: PropTypes.func,
  findComboBoxByParent: PropTypes.func,
  fieldOption: PropTypes.string
}

export default InheritanceComboBox;
