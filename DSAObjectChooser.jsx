import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from '../controls/DSASelect';
import DSAStepContent from '../controls/DSAStepContent';
import {CraftingObjects} from '../data/DSAObjects';

const ID = "object"

export default class DSAObjectChooser extends React.Component {

  handleChange = (value) => {
    // find the right cost object:
    const o = CraftingObjects.find((c) => c.name === value.value);
    this.props.onChange(ID, o);
  }

  handleBack = () => {
    this.props.stepper.back(ID);
  }

  getOptions() {
    const {objecttype, talent} = this.props;
    return CraftingObjects.filter((c) => {
      return c.type === objecttype.name && c.talent === talent.name;
    }).map((c) => ({value: c.name, label: c.name}));
  }

  render() {
    const {stepper, object} = this.props
    const active = object !== undefined;
    return <DSAStepContent active={active} handleNext={stepper.next} handleBack={this.handleBack}>
      <Typography>Wähle einen Gegenstand.</Typography>
      <form>
        <DSASelect
          options={this.getOptions()}
          value={active ? object.name : ""}
          onChange={this.handleChange}
          label="Wähle"
        />
      </form>
    </DSAStepContent>
  }
}

DSAObjectChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  objecttype: PropTypes.object.isRequired
};
