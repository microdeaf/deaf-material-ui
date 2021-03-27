import React, { useState, useRef } from 'react';
import { TextField, MenuItem, CircularProgress } from '@material-ui/core';
import { Messages } from '../bundle/Bundle-fa';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';

const InputField = ({
  required, id, label, value, helperText, onChange, field, type,
  size, focus, select, options, SelectProps, disabled, autoComplete, fullWidth, kind,
  comboBox, className, getOptionLabel, onFocus, multiple, open, loading, on, off
}) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const inputref = useRef(null);
  const persianRegex = /^[\u0600-\u06FF\s]+$/;
  const latinNumRegex = /^[0-9]+$/;
  const dateRegex = /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9]))))$/
  // const persianNumber = /^[\u06F0-\u06F9]/g;
  const mobileRegex = /^0?9\d{9}$/;

  const convertNumbers2English = (string) => {
    return string.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, function (c) {
      return c.charCodeAt(0) & 0xf;
    });
  }

  const _onBlur = (e) => {
    if (required) {
      if (e && e.target && e.target.value === '') {
        setErrorMessage(Messages.REQUIREDFIELD);
        setError(true);
        inputref.current.focus();
      } else if (field === 'date' && e.target.value.length !== size &&
                !dateRegex.exec(convertNumbers2English(e.target.value))) {
        setErrorMessage(Messages.INCORRECTDATE);
        setError(true);
        inputref.current.focus();
      } else if (kind !== 'number' && field === 'persian' && e && e.target &&
                !persianRegex.exec(convertNumbers2English(e.target.value))) {
        setErrorMessage(Messages.PERSIANREGEX);
        setError(true);
        inputref.current.focus();
      } else if (kind === 'number') {
        if (e && e.target && !latinNumRegex.exec(convertNumbers2English(e.target.value))) {
          setErrorMessage(Messages.LATINNUMREGEX);
          setError(true);
          inputref.current.focus();
        } else if (field === 'nationalityCode' && e && e.target && e.target.value.length !== size) {
          setErrorMessage(Messages.NATIONALITYCODELENGTH);
          setError(true);
          inputref.current.focus();
        } else if (e && e.target && e.target.value.length > size + 1) {
          setErrorMessage(Messages.BIGER_THAN_MAX_LENGHT_1 + size + Messages.BIGER_THAN_MAX_LENGHT_2);
          setError(true);
          inputref.current.focus();
        } else if (field === 'mobile') {
          if (e && e.target && e.target.value.length !== size) {
            setErrorMessage(Messages.INCORRECT_MOBILE_NUMBER1);
            setError(true);
            inputref.current.focus();
          } else if (e && e.target && !mobileRegex.exec(convertNumbers2English(e.target.value))) {
            setErrorMessage(Messages.INCORRECT_MOBILE_NUMBER);
            setError(true);
            inputref.current.focus();
          }
        }
      }
    } else if (value) {
      if (kind && size && kind === 'number') {
        if (e && e.target && e.target.value.length > size + 1) {
          setErrorMessage(Messages.BIGER_THAN_FIELD_LENGHT_1 + size + Messages.BIGER_THAN_FIELD_LENGHT_2);
          setError(true);
          inputref.current.focus();
        } else if (e && e.target && !latinNumRegex.exec(convertNumbers2English(e.target.value))) {
          setErrorMessage(Messages.LATINNUMREGEX_NUMBER);
          setError(true);
          inputref.current.focus();
        }
      } else if (field === 'persian' && e && e.target && !persianRegex.exec(convertNumbers2English(e.target.value))) {
        setErrorMessage(Messages.PERSIANREGEX);
        setError(true);
        inputref.current.focus();
      }
    }
  };

  const _onChange = (e) => {
    setError(false);
    onChange(e);
  }
  const _onFocus = (e) => {
    if (onFocus !== undefined) {
      onFocus(e)
    }
  }

  return (
    <React.Fragment>
      {!comboBox &&
                <TextField
                  inputRef={inputref}
                  disabled={disabled}
                  required={required}
                  autoComplete={autoComplete}
                  id={id}
                  className={className}
                  label={label}
                  value={value}
                  margin="normal"
                  variant="outlined"
                  autoFocus={focus}
                  error={error}
                  onBlur={e => _onBlur(e)}
                  onChange={e => _onChange(e)}
                  onFocus={e => _onFocus(e)}
                  helperText={error ? errorMessage : helperText}
                  select={select}
                  SelectProps={SelectProps}
                  fullWidth={fullWidth}
                  type={type}
                >
                  {select && options.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>}
      {comboBox &&
                <Autocomplete
                  inputRef={inputref}
                  id={id}
                  autoComplete={autoComplete}
                  disabled={disabled}
                  className={className}
                  multiple={multiple}
                  open={open}
                  onOpen={() => on && on()}
                  onClose={() => off && off()}
                  options={options}
                  loading={loading}
                  defaultValue={value}
                  getOptionLabel={getOptionLabel}
                  onFocus={e => _onFocus(e)}
                  onBlur={e => _onBlur(e)}
                  onChange={(e, value) => _onChange(value)}
                  renderInput={(params) => {
                    return <TextField {...params}
                      inputRef={inputref}
                      required={required}
                      label={label}
                      margin="normal"
                      variant="outlined"
                      autoFocus={focus}
                      error={error}
                      helperText={error ? errorMessage : helperText}
                      fullWidth={fullWidth}
                      type={type}
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <React.Fragment>
                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                            {params.InputProps.endAdornment}
                          </React.Fragment>
                        )
                      }}
                    />
                  }}
                />
      }
    </React.Fragment>
  );
}

InputField.propTypes = {
  required: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  field: PropTypes.string,
  type: PropTypes.any,
  size: PropTypes.string,
  focus: PropTypes.bool,
  select: PropTypes.bool,
  options: PropTypes.array,
  SelectProps: PropTypes.any,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  fullWidth: PropTypes.bool,
  kind: PropTypes.string,
  comboBox: PropTypes.bool,
  className: PropTypes.any,
  getOptionLabel: PropTypes.any,
  onFocus: PropTypes.func,
  multiple: PropTypes.bool,
  open: PropTypes.bool,
  loading: PropTypes.bool,
  on: PropTypes.func,
  off: PropTypes.func
}

export default InputField;
