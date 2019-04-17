import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from '../controls/DSASelect';
import DSAStepContent from '../controls/DSAStepContent';
import DSAItemList from '../controls/DSAItemList';
import {Talent} from '../DSAMisc';

const ID = "talent"

export default class DSATalentChooser extends React.Component {

  handleChange = (value) => {
    // find the right cost object:
    const {objecttype} = this.props;
    const f = objecttype.talents.find( (c) => c.name === value );
    this.props.onChange(ID, f);
  }

  handleBack = () => {
    this.props.stepper.back(ID);
  }

  getOptions() {
    const {objecttype} = this.props;
    return objecttype.talents.map((c) => {
      return {value: c.name, label: c.name};
    });
  }

  render() {
    const {stepper, talent} = this.props
    const active = talent !== undefined;
    return <DSAStepContent active={active} handleNext={stepper.next} handleBack={this.handleBack}>
        <Typography>Wähle das Handwerkstalent.</Typography>
        <form>
          <DSASelect
            options={this.getOptions()}
            value={active ? talent.name : ""}
            onChange={this.handleChange}
            label="Wähle"
          />
        </form>
      {active &&
        <DSAItemList items={[{title: talent.name,
          items: [
            {name: "Talent", value: talent.description},
            {name: "Probe", value: Talent(talent.test)},
          ]}]} />
      }
      </DSAStepContent>
  }
}

DSATalentChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
