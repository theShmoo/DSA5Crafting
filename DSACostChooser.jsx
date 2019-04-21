import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from '../controls/DSASelect';
import DSAStepContent from '../controls/DSAStepContent';
import DSADescription from '../controls/DSADescription';
import {Costs} from '../data/DSACraftingData';
import { DefaultCost } from '../data/DSACraftingDefaults';


const options = Costs.map((c) => {
  return {value: c.name, label: c.name};
});

const ID = "cost"

export default class DSACostChooser extends React.Component {

  handleChange = (value) => {
    // find the right cost object:
    const cost = Costs.find( (c) => c.name === value.value);
    this.props.onChange(ID, cost);
  }

  handleBack = () => {
    this.props.stepper.back(ID, DefaultCost);
  }

  render() {
    const {stepper, cost} = this.props
    const active = cost !== undefined;
    return <DSAStepContent
      active={active}
      first={true}
      handleNext={stepper.next}
      handleBack={this.handleBack}>
        <Typography>Die Materialkosten hängen von der Art der Herstellung ab.</Typography>
        <form>
          <DSASelect
            options={options}
            value={active ? cost.name : ""}
            onChange={this.handleChange}
            label="Wähle"
          />
        </form>
        {active && <DSADescription caption="Materialkosten" text={cost.cost + "% vom Kaufpreis des Gegenstandes"} />}
      </DSAStepContent>
  }
}

DSACostChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
