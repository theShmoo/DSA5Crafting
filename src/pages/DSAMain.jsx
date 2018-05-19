import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import DSAStepper from './DSAStepper';
import DSACostChooser from './DSACostChooser';
import DSAComplexityChooser from './DSAComplexityChooser';
import DSAMaterialChooser from './DSAMaterialChooser';
import DSAObjectTypeChooser from './DSAObjectTypeChooser';
import DSAObjectChooser from './DSAObjectChooser';
import DSATalentChooser from './DSATalentChooser';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class DSAMain extends React.Component {

  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleStateChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  getSteps() {
    const {cost, complexity, material, objecttype, talent, object} = this.state;
    const handlers = {next: this.handleNext, back: this.handleBack};
    let steps = [
      {
        content: <DSACostChooser cost={cost} stepper={handlers} onChange={this.handleStateChange} />,
        label: cost ? cost.name : "Art der Herstellung"
      },
      {
        content: <DSAObjectTypeChooser objecttype={objecttype} stepper={handlers} onChange={this.handleStateChange} />,
        label:  objecttype ? objecttype.description : "Art des Gegenstandes"
      },
      {
        content: <DSATalentChooser objecttype={objecttype} talent={talent} stepper={handlers} onChange={this.handleStateChange} />,
        label:  talent ? talent.name : "Herstellungstalent"
      }
    ];
    // add the chooser only if we don't have the misc type
    if(objecttype && objecttype.name !== "misc") {
      steps.push({
        content: <DSAObjectChooser objecttype={objecttype} talent={talent} object={object} stepper={handlers} onChange={this.handleStateChange} />,
        label:  object ? object.name : "Gegenstand"
      });
    }
    else {
      steps.push({
        content: <DSAComplexityChooser complexity={complexity} stepper={handlers} onChange={this.handleStateChange} />,
        label:  complexity ? complexity.name : "Komplexität des Gegenstandes"
      })
    }
    steps.push({
      content: <DSAMaterialChooser material={material} objecttype={objecttype} talent={talent} stepper={handlers} onChange={this.handleStateChange} />,
      label:  material ? material.description : "Art des Materials"
    });
    return steps;
  }

  render() {
    const { classes,  } = this.props;
    const { activeStep } = this.state;
    return (
      <main className={classes.root}>
        <DSAStepper
          steps={this.getSteps()}
          activeStep={activeStep} handleReset={this.handleReset} />
      </main>
    );
  }
};

DSAMain.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DSAMain);
