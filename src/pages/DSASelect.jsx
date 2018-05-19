import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  }
});

class DSASelect extends React.Component {

  renderOptions() {
    return this.props.options.map((option, i) => {
        return <MenuItem key={i} value={option.value}>{option.label}</MenuItem>
    });
  }

  render() {
    const { classes, helperText, onChange, value, label } = this.props;
    const helperId = label + "-helper";
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={helperId}>{label}</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          input={<Input name={label} id={helperId} />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {this.renderOptions()}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
}

DSASelect.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string
};

export default withStyles(styles)(DSASelect);
