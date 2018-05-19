import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from './DSASelect';
import DSAStep from './DSAStep';
import {Crafting} from '../data/DSACraftingData';

const options = Crafting.map((c) => {
  return {value: c.name, label: c.description};
});


export default class DSAObjectTypeChooser extends React.Component {

  handleChange = (e) => {
    // find the right cost object:
    const f = Crafting.find( (c) => c.name === e.target.value );
    this.props.onChange("objecttype", f);
  }

  render() {
    const {stepper, objecttype} = this.props
    const {next, back} = stepper;
    const active = objecttype !== undefined;
    return <DSAStep active={active} handleNext={next} handleBack={back}>
      <Typography>Wähle die Art des Gegenstandes.</Typography>
      <form autoComplete="off">
        <DSASelect
          options={options}
          value={active ? objecttype.name : ""}
          onChange={this.handleChange}
          label="Wähle"
        />
      </form>
    </DSAStep>
  }
}

DSAObjectTypeChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
