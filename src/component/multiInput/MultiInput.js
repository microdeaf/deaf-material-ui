import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import uuidv1 from 'uuid/v1';
import { toArrayObject, toPlainArray } from './MultiInputUtil';
import SingleInput from './SingleInput';
import { Title } from '../../bundle/Bundle-fa';

class MultiInput extends React.Component {

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextState.oldProps.join('') !== nextProps.multiValue.join('')) {
      nextState.inputArrays = toArrayObject(nextProps.multiValue);
      nextState.oldProps = nextProps.multiValue;
      return nextState;
    }
    else {
      return nextState;
    }
  }

  static defaultProps = {
    onChange: () => null,
  }

  constructor(props) {
    super(props);
    this.state = {
      inputArrays: toArrayObject(props.multiValue),
      oldProps: props.multiValue
    };
  }

  _onChange = name => value => {
    const arr = [...this.state.inputArrays];
    let currentIndex = 0;
    arr.forEach((item, index, theArray) => {
      if (item.key === name) {
        theArray[index].value = value;
        currentIndex = index;
      }
    })
    if (arr.length - 1 === currentIndex)
      arr.push({ key: uuidv1(), value: "" });

    if (!value && currentIndex === arr.length - 2)
      arr.pop();

    this.setState({
      inputArrays: arr,
    });
  };

  _onDelete = name => () => {
    this._deleteItemArray(name);
  }

  _deleteItemArray = name => {
    const arr = [...this.state.inputArrays];
    const currentIndex = arr.findIndex(x => x.key === name);
    if (currentIndex !== arr.length - 1)
      arr.splice(currentIndex, 1);
    this.setState({
      inputArrays: arr,
    });
  }

  _renderInputs() {
    const { inputArrays } = this.state;
    return (inputArrays || []).map((item, index) => 
        <SingleInput 
            key={item.key} 
            onChange={this._onChange(item.key)} 
            onDelete={this._onDelete(item.key)} 
            value={item.value} 
            label={this.props.label}
            classes={this.props.classes}
        />
    );
  }

  _onSave = event => {
    const arr = [...this.state.inputArrays];

    if (!arr[arr.length - 1].value)
      arr.pop();
      
    this.props.onChange(toPlainArray(arr));
  }

  _onCancel = event => {
    const arr = [...this.props.multiValue];
    this.setState({
      inputArrays: toArrayObject(arr)
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.divContainer} >
          {this._renderInputs()}
        </div>
            <div className={classes.bottomBar} >
              <Button color="primary" onClick={this._onSave} className={classes.button}>
                {Title.OKEY_BTN}
            </Button>
              {/* <Button onClick={this.handleCancel} className="multi-button">Cancel</Button> */}
            </div>
          {/* </Toolbar>
        </AppBar> */}
      </div>
    );
  }
}

MultiInput.propTypes = {
  onChange: PropTypes.func,
  multiValue: PropTypes.array
};

export default MultiInput;