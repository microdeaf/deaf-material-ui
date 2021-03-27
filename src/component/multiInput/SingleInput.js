import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Clear from '@material-ui/icons/Clear';


class SingleInput extends React.Component {

    static defaultProps = {
        onChange: () => null,
        onDelete: () => null,
        value: ""
    }

    _onChange = (event) => {
        const value = event.target.value;
        this.props.onChange(value)
    };

    render() {
        const { value, classes } = this.props;

        return (
            <div className={classes.input} >
                <div className={classes.icon} onClick={this.props.onDelete} ><Clear /></div>
                <TextField
                    id="standard-name"
                    label={this.props.label}
                    variant="outlined"
                    value={value}
                    onChange={this._onChange}
                    fullWidth
                />
            </div>
        );
    }
}

SingleInput.propTypes = {
    value: PropTypes.string,
    OnChange: PropTypes.func,
    OnDelete: PropTypes.func,
};

export default SingleInput;