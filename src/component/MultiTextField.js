import React from 'react';
import { Modal, Backdrop, TextField } from '@material-ui/core';
import MultiInput from './multiInput/MultiInput';
import { MultiTextFieldStyle } from '../css';
import Fade from './Fade';

const isEmpty = (list) => {
  for (var key in list) {
    if (list.hasOwnProperty(key))
      return false;
  }
  return true;
}

export default function MultiTextField({ id, label, onChange, value, type, helperText }) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState('');
  const classes = MultiTextFieldStyle();

  React.useEffect(() => {
    if (!isEmpty(value)) {
      setData(value.map(item => {
        return item
      }));
    } else {
      setData('');
    }
  }, [setData, value])

  const _handleOpen = () => {
    setOpen(true);
  };

  const _handleClose = () => {
    setOpen(false);
  };

  const _onChange = value => {
    if (type) {
      if (!isEmpty(value)) {
        value = value.map(item => {
          return { value: item, type: type };
        })
      } else {
        value = []
      }
    }
    onChange(value);
    _handleClose();
  }

  return (
    <div className={classes.dir}>
      <TextField
        id={id}
        label={label}
        value={data}
        margin="normal"
        variant="outlined"
        onClick={_handleOpen}
        fullWidth
        helperText={helperText}
      />
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={_handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <MultiInput classes={classes} multiValue={value} label={label}
            onChange={value => _onChange(value)} />
        </Fade>
      </Modal>
    </div>
  );
}