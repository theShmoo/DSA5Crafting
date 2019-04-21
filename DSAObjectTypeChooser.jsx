import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from '../controls/DSASelect';
import DSAStepContent from '../controls/DSAStepContent';
import { Crafting } from '../data/DSACraftingData';
import { DefaultType } from '../data/DSACraftingDefaults';

const options = Crafting.map((c) => ({value: c.name, label: c.description}));

const ID = "objecttype"

export default class DSAObjectTypeChooser extends React.Component {

  handleChange = (value) => {
    const f = Crafting.find(
        (c) => c.name === value.value
      );
    this.props.onChange(ID, f);
  }

  handleBack = () => {
    this.props.stepper.back(ID, DefaultType);
  }

  render() {
    const {stepper, objecttype} = this.props
    const active = objecttype !== undefined;
    return <DSAStepContent
      active={active}
      handleNext={stepper.next}
      handleBack={this.handleBack}>
      <Typography>Wähle die Art des Gegenstandes.</Typography>
      <form>
        <DSASelect
          options={options}
          value={active ? objecttype.name : ""}
          onChange={this.handleChange}
          label="Wähle"
        />
      </form>
    </DSAStepContent>
  }
}

DSAObjectTypeChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
