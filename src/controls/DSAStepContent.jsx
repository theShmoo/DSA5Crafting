import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    overflow: "-webkit-paged-x"
  }),
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class DSAStepContent extends React.Component {

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
              Zurück
            </Button>
            <Button
              variant="raised"
              color="primary"
              onClick={handleNext}
              disabled={!active}
              className={classes.button}
            >
              {last ? 'Fertig' : 'Weiter'}
            </Button>
          </div>
        </div>
      </div>
      );
  }
}

DSAStepContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

DSAStepContent.defaultProps = {
  active: true,
  first: false,
  last: false
};

export default withStyles(styles)(DSAStepContent);
