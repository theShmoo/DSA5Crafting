import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from '../controls/DSASelect';
import DSAStepContent from '../controls/DSAStepContent';
import DSAItemList from '../controls/DSAItemList';

import {Techniques} from '../data/DSACraftingData';
import { DefaultTechnique } from '../data/DSACraftingDefaults';

import {GetTechnique} from './objects/DSACraftingTechniques';

const ID = "technique"

export default class DSACostChooser extends React.Component {

  handleChange = (value) => {
    // find the right cost object:
    const technique = Techniques[this.props.objecttype.name].find( (c) => c.name === value.value);
    this.props.onChange(ID, technique);
  }

  handleBack = () => {
    this.props.stepper.back(ID, DefaultTechnique);
  }

  getOptions(type) {
    return Techniques[type].map((t) => {
      return {value: t.name, label: t.name};
    });
  }

  render() {
    const {stepper, technique, objecttype} = this.props
    const active = technique !== undefined;
    return <DSAStepContent active={active} first={true} handleNext={stepper.next} handleBack={this.handleBack}>
        <Typography>Die Herstellungstechnik.</Typography>
        <form>
          <DSASelect
            options={this.getOptions(objecttype.name)}
            value={active ? technique.name : ""}
            onChange={this.handleChange}
            label="Wähle"
          />
        </form>
        {active && <DSAItemList items={GetTechnique(technique)}/>}
      </DSAStepContent>
  }
}

DSACostChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
