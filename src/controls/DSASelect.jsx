import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import DSAReactSelect from './DSAReactSelect';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '90%'
  }
});

class DSASelect extends React.Component {

  render() {
    const { classes, helperText, onChange, value, label, options, multi } = this.props;
    const helperId = label + "-helper";
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <DSAReactSelect
            selected={value}
            onChange={onChange}
            name={helperId}
            options={options}
            placeholder={label}
            multi={multi}
          />
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

DSASelect.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  helperText: PropTypes.string,
  multi: PropTypes.bool
};

DSASelect.defaultTypes = {
  multi: false
}

export default withStyles(styles)(DSASelect);
