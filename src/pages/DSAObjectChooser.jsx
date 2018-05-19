import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from './DSASelect';
import DSAStep from './DSAStep';
import {CraftingObjects} from '../data/DSAObjects';

export default class DSAObjectChooser extends React.Component {

  handleChange = (e) => {
    // find the right cost object:
    const o = CraftingObjects.find((c) => c.name === e.target.value);
    this.props.onChange("object", o);
  }

  getOptions() {
    const {objecttype, talent} = this.props;
    return CraftingObjects.filter((c) => {
      return c.type === objecttype.name && c.talent === talent.name;
    }).map((c) => {
      return {value: c.name, label: c.name};
    });
  }

  render() {
    const {stepper, object} = this.props
    const {next, back} = stepper;
    const active = object !== undefined;
    return <DSAStep active={active} handleNext={next} handleBack={back}>
      <Typography>Wähle einen Gegenstand.</Typography>
      <form autoComplete="off">
        <DSASelect
          options={this.getOptions()}
          value={active ? object.name : ""}
          onChange={this.handleChange}
          label="Wähle"
        />
      </form>
    </DSAStep>
  }
}

DSAObjectChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  objecttype: PropTypes.object.isRequired,
  talent: PropTypes.object.isRequired
};
