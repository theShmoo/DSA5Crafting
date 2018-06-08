import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import DSACraftingSummary from './DSACraftingSummary';

import DSAStepper from '../controls/DSAStepper';
import DSAInfoBox from '../controls/DSAInfoBox';

import DSACostChooser from '../chooser/DSACostChooser';
import DSAComplexityChooser from '../chooser/DSAComplexityChooser';
import DSAMaterialChooser from '../chooser/DSAMaterialChooser';
import DSAObjectTypeChooser from '../chooser/DSAObjectTypeChooser';
import DSAObjectChooser from '../chooser/DSAObjectChooser';
import DSATalentChooser from '../chooser/DSATalentChooser';
import DSAEnhancementChooser from '../chooser/DSAEnhancementChooser';

import {DefaultState} from '../data/DSACraftingDefaults'

const styles = {
  root: {
    flexGrow: 1,
  }
};

class DSAMain extends React.Component {

  state = DefaultState();

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = (name, value) => {
    let craft = this.state.craft;
    craft[name] = value;
    this.setState({
      craft: craft,
      activeStep: this.state.activeStep - 1,
    });
  };

  handleSimpleBack = () => {
    this.setState({activeStep: this.state.activeStep - 1});
  };

  handleReset = () => {
    this.setState(DefaultState());
  };

  handleStateChange = (name, value) => {
    let craft = this.state.craft;
    craft[name] = value;
    this.setState({
      craft: craft
    })
  }

  getSteps() {
    const {cost, complexity, materials, objecttype, talent, object, enhancements} = this.state.craft;
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
      steps.push({
        content: <DSAEnhancementChooser objecttype={objecttype} enhancements={enhancements} onChange={this.handleStateChange} stepper={handlers} />,
        label: enhancements ? enhancements.length + " Verbesserungen" : "Verbesserungen"
      })
    }
    else {
      steps.push({
        content: <DSAComplexityChooser complexity={complexity} stepper={handlers} onChange={this.handleStateChange} />,
        label:  complexity ? complexity.name : "Komplexität des Gegenstandes"
      })
    }
    steps.push({
      content: <DSAMaterialChooser materials={materials} objecttype={objecttype} talent={talent} stepper={handlers} onChange={this.handleStateChange} />,
      label: "Qualität: " + materials.quality.name +
        (materials.material ? " - " + materials.material.name : "")
    });
    return steps;
  }

  renderSummary() {
    return <DSACraftingSummary onReset={this.handleReset} onBack={this.handleSimpleBack} craft={this.state.craft} />
  }
  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    return (
      <main className={classes.root}>
        <DSAInfoBox text="Folge den Schritten um einen Gegenstand herzustellen oder zu reparieren." />
        <DSAStepper
          steps={this.getSteps()}
          activeStep={activeStep} completed={this.renderSummary()} />
      </main>
    );
  }
};

DSAMain.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DSAMain);
