import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from './DSASelect';
import DSAStep from './DSAStep';
import {Complexity} from '../data/DSACraftingData';

const options = Complexity.map((c) => {
  return {value: c.name, label: c.name};
});

export default class DSAComplexityChooser extends React.Component {

  handleChange = (e) => {
    // find the right cost object:
    const f = Complexity.find( (c) => c.name === e.target.value );
    this.props.onChange("complexity", f);
  }

  render() {
    const {stepper, complexity} = this.props
    const {next, back} = stepper;
    const active = complexity !== undefined;
    return <DSAStep active={active} handleNext={next} handleBack={back}>
      <Typography>Wähle die Komplexität des Gegenstandes.</Typography>
      <form autoComplete="off">
        <DSASelect
          options={options}
          value={active ? complexity.name : ""}
          onChange={this.handleChange}
          label="Wähle"
          helperText={active ? complexity.description : ""}
        />
      </form>
    </DSAStep>
  }
}

DSAComplexityChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
