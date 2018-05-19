import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = {
  switchBase: {},
  bar: {},
  checked: {},
};

class DSASwitch extends React.Component {

  handleChange = event => {
    const {onChange, name} = this.props;
    onChange([name], event.target.checked);
  };

  render() {
    const { classes, label, checked, name, disabled } = this.props;

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              disabled={disabled}
              onChange={this.handleChange()}
              value={name}
              classes={{
                switchBase: classes.switchBase,
                checked: classes.checked,
                bar: classes.bar,
              }}
            />
          }
          label={label}
        />
      </FormGroup>
    );
  }
}

DSASwitch.propTypes = {
  classes: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool
};

DSASwitch.defaultTypes = {
  disabled: false,
  name: this.props.label
};

export default withStyles(styles)(DSASwitch);
