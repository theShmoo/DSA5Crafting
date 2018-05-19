import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from './DSASelect';
import DSAStep from './DSAStep';
import DSASwitch from './DSASwitch'
import {Material} from '../data/DSACraftingData';

const options = Material.map((c) => {
  return {value: c.name, label: c.name};
});

export default class DSAMaterialChooser extends React.Component {

  state = {

  }

  handleChange = (e) => {
    // find the right cost object:
    const f = Material.find( (c) => c.name === e.target.value );
    this.props.onChange("material", f);
  }

  render() {
    const {stepper, material} = this.props
    const {next, back} = stepper;
    const active = material !== undefined;
    return <DSAStep active={active} handleNext={next} handleBack={back}>
      <Typography>Wähle die Qualität des Materials.</Typography>
      <form autoComplete="off">
        <DSASelect
          options={options}
          value={active ? material.name : ""}
          onChange={this.handleChange}
          label="Wähle"
          helperText={active ? material.effect : "Die Qualität des Materials verändert den Preis und die Strukturpunkte."}
        />
      </form>
    </DSAStep>
  }
}

DSAMaterialChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
