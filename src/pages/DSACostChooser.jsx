import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from './DSASelect';
import DSAStep from './DSAStep';
import {Costs} from '../data/DSACraftingData';

const options = Costs.map((c) => {
  return {value: c.name, label: c.name};
});

export default class DSACostChooser extends React.Component {

  handleChange = (e) => {
    // find the right cost object:
    const cost = Costs.find( (c) => c.name === e.target.value );
    this.props.onChange("cost", cost);
  }


  render() {
    const {stepper, cost} = this.props
    const {next, back} = stepper;
    const active = cost !== undefined;
    return <DSAStep active={active} first={true} handleNext={next} handleBack={back}>
        <Typography>Die Materialkosten hängen von der Art der Herstellung ab.</Typography>
        <form autoComplete="off">
          <DSASelect
            options={options}
            value={active ? cost.name : ""}
            onChange={this.handleChange}
            label="Wähle"
            helperText={active ? cost.cost + "% vom Kaufpreis des Gegenstandes" : ""}
          />,
        </form>
      </DSAStep>
  }
}

DSACostChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
