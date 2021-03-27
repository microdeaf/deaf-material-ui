import React from 'react';
import { ButtonStyle } from '../css';
// import Icon from './Icon';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import VerticalSpace from './VerticalSpace'

const CustomButton = ({ onClick, title, icon, style, disabled, fullWidth, noSpace, color, variant }) => {
  const classes = ButtonStyle(style);
  return (
    <React.Fragment>
      {!noSpace && <VerticalSpace />}
      <Button disabled={disabled} fullWidth={fullWidth} className={classes.root} variant={variant ? variant : "outlined"} color={color ? color : "primary"} onClick={onClick}> 
        <span className={classes.span}>{title}</span>
      </Button>
    </React.Fragment>
  );
}

CustomButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.any,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  noSpace: PropTypes.bool
}

export default CustomButton;
