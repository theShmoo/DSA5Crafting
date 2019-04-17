import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from '../controls/DSASelect';
import DSAStepContent from '../controls/DSAStepContent';
import DSADescription from '../controls/DSADescription';
import {Complexity} from '../data/DSACraftingData';

const options = Complexity.map((c) => {
  return {value: c.name, label: c.name};
});

export default class DSAComplexityChooser extends React.Component {

  handleChange = (value) => {
    // find the right cost object:
    const f = Complexity.find( (c) => c.name === value );
    this.props.onChange("complexity", f);
  }

  render() {
    const {stepper, complexity} = this.props
    const {next, back} = stepper;
    const active = complexity !== undefined;
    return <DSAStepContent active={active} handleNext={next} handleBack={back}>
      <Typography>Wähle die Komplexität des Gegenstandes.</Typography>
      <form>
        <DSASelect
          options={options}
          value={active ? complexity.name : ""}
          onChange={this.handleChange}
          label="Wähle"
        />
      </form>
      {active && <DSADescription caption="Komplexität" text={complexity.description} />}
    </DSAStepContent>
  }
}

DSAComplexityChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
