import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from '../controls/DSASelect';
import DSAStepContent from '../controls/DSAStepContent';
import DSAItemList from '../controls/DSAItemList';
import {Enhancements} from '../data/DSACraftingData';

import {GetEnhancements} from '../objects/DSAEnhancements';

const ID = "enhancements"

export default class DSAEnhancementChooser extends React.Component {

  handleChange = (values) => {
    // find the right object:
    const { name } = this.props.objecttype;
    const enhancements = Enhancements[name].filter( (e) => values.includes(e.effect));
    this.props.onChange(ID, enhancements);
  }

  getOptions() {
    const { name } = this.props.objecttype;
    return Enhancements[name].map((c) => ({value: c.effect, label: c.effect}));
  }

  handleBack = () => {
    this.props.stepper.back(ID);
  }

  render() {
    const {stepper, enhancements, objecttype} = this.props
    const active = enhancements !== undefined;
    return <DSAStepContent active={active} first={true} handleNext={stepper.next} handleBack={this.handleBack}>
        <Typography>Wähle die Verbesserungen für die {objecttype.description}.</Typography>
        <form>
          <DSASelect
            options={this.getOptions()}
            value={active ? enhancements.map((e) => e.effect) : ""}
            multi={true}
            onChange={this.handleChange}
            label="Wähle eine oder mehrere Verbesserungen"
          />
        </form>
        {active && <DSAItemList items={GetEnhancements(enhancements)}/>}
      </DSAStepContent>
  }
}

DSAEnhancementChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
