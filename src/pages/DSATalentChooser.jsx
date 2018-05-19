import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from './DSASelect';
import DSAStep from './DSAStep';


export default class DSATalentChooser extends React.Component {

  handleChange = (e) => {
    // find the right cost object:
    const {objecttype} = this.props;
    const f = objecttype.talents.find( (c) => c.name === e.target.value );
    this.props.onChange("talent", f);
  }

  getOptions() {
    const {objecttype} = this.props;
    return objecttype.talents.map((c) => {
      return {value: c.name, label: c.name};
    });
  }

  render() {
    const {stepper, talent} = this.props
    const {next, back} = stepper;
    const active = talent !== undefined;
    return <DSAStep active={active} handleNext={next} handleBack={back}>
        <Typography>Wähle das Handwerkstalent.</Typography>
        <form autoComplete="off">
          <DSASelect
            options={this.getOptions()}
            value={active ? talent.name : ""}
            onChange={this.handleChange}
            label="Wähle"
            helperText={active ? talent.description : ""}
          />
        </form>
      </DSAStep>
  }
}

DSATalentChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
