import React from 'react'
import { InfoIcon, SuccessIcon, ErrorIcon, CloseIcon } from '../icon';
import { AlertTemplateStyle } from '../css';
import PropTypes from 'prop-types';

const AlertTemplate = ({ message, options, style, close }) => {
  const classes = AlertTemplateStyle();
  return (
    <div className={classes.alert} style={{ ...style }}>
      {options.type === 'info' && <InfoIcon />}
      {options.type === 'success' && <SuccessIcon />}
      {options.type === 'error' && <ErrorIcon />}
      <span className={classes.message}>{message}</span>
      <button onClick={close} className={classes.button}>
        <CloseIcon />
      </button>
    </div>
  )
}

AlertTemplate.propTypes = {
  message: PropTypes.string,
  options: PropTypes.string,
  style: PropTypes.any,
  close: PropTypes.func
}

export default AlertTemplate;
