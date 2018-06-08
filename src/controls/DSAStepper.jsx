import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

const styles = theme => ({
  root: {
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  stepper: {
    backgroundColor: "inherit"
  }
});

class DSAStepper extends React.Component {

  render() {
    const { classes, steps, activeStep, completed } = this.props;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} className={classes.stepper} orientation="vertical">
          {steps.map((step, i) =>
            <Step key={i}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                {step.content}
              </StepContent>
            </Step>)
          }
        </Stepper>
        {activeStep === steps.length && completed}
      </div>
    );
  }
}

DSAStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  steps: PropTypes.array.isRequired
};

export default withStyles(styles)(DSAStepper);
