import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class DSAStep extends React.Component {

  render() {
    const { classes, children, active, first, last, handleBack, handleNext } = this.props;

    return (
      <div className={classes.root}>
        {children}
        <div className={classes.actionsContainer}>
          <div>
            <Button
              disabled={first}
              onClick={handleBack}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              variant="raised"
              color="primary"
              onClick={handleNext}
              disabled={!active}
              className={classes.button}
            >
              {last ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
      );
  }
}

DSAStep.propTypes = {
  classes: PropTypes.object.isRequired,
};

DSAStep.defaultProps = {
  active: true,
  first: false,
  last: false
};

export default withStyles(styles)(DSAStep);
