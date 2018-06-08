import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from '../controls/DSASelect';
import DSAStepContent from '../controls/DSAStepContent';
import DSASwitch from '../controls/DSASwitch'
import DSADescription from '../controls/DSADescription'
import { Quality, Materials, MagicMetals } from '../data/DSACraftingData';
import { DefaultMaterial } from '../data/DSACraftingDefaults';
import {Modifier} from '../DSAMisc.jsx'

const ID = "materials"

export default class DSAMaterialChooser extends React.Component {

  state = {
    complex: false,
    magic: false
  }

  getMaterials() {
    const {objecttype, talent} = this.props;
    return Materials[objecttype.name].find( (t) => t.type === talent.name ).materials;
  }

  getMagicMetals() {
    const {objecttype} = this.props;
    return MagicMetals[objecttype.name];
  }

  getOptions(materials) {
    return materials.map((m) => ({value: m.name, label: m.name}));
  }

  handleSwitchChange = (name, value) => {
    this.setState({[name]: value});
  }

  handleMaterialsChange = (value) => {
    const f = this.getMaterials().find( (c) => c.name === value );
    let materials = this.props.materials;
    materials.material = f;
    this.props.onChange(ID, materials);
  }

  handleMagicMetalsChange = (value) => {
    const f = this.getMagicMetals().find( (c) => c.name === value );
    let materials = this.props.materials;
    materials.material = f;
    this.props.onChange(ID, materials);
  }

  handlePurityChange = (value) => {
    const purity = this.props.materials.material.purities.find(p => p.purity === value);
    let materials  = this.props.materials;
    materials.material.purity = purity;
    this.props.onChange(ID, materials)
  }

  handleQualityChange = (value) => {
    const q = Quality.find( (c) => c.name === value);
    let materials = this.props.materials;
    materials.quality = q;
    this.props.onChange(ID, materials)
  }

  handleBack = () => {
    this.props.stepper.back(ID, DefaultMaterial);
  }

  renderMaterial(material) {
    const { effect, modifier, bf, structure } = material
    return (
      <div>
        <DSADescription caption="Effekt" text={effect} />
        <DSADescription caption="Proben Erschwernis" text={Modifier(modifier)} />
        { bf && <DSADescription caption="Bruchfaktor Veränderung" text={Modifier(bf)} />}
        { structure && <DSADescription caption="Strukturpunkte Veränderung" text={Modifier(structure)} />}
      </div>);
  }

  renderMagicMetal(metal) {
    const { purities, info, price, purity } = metal;
    const { effect, modifier, bf, structure } = purity;
    return (
      <div>
        { info && <DSADescription caption="Info" text={info} /> }
        <DSADescription caption="Preis" text={price} />
        <DSASelect
          options={purities.map((p) => ({value: p.purity, label: p.purity + "% Reinheit"}))}
          value={purity.purity}
          onChange={this.handlePurityChange}
          label="Reinheit"
        />
        <DSADescription caption="Effect" text={effect} />
        <DSADescription caption="Proben Erschwernis" text={Modifier(modifier)} />
        { bf && <DSADescription caption="Bruchfaktor Veränderung" text={Modifier(bf)} />}
        { structure && <DSADescription caption="Strukturpunkte Veränderung" text={Modifier(structure)} />}
      </div>);
  }

  render() {
    const {complex, magic} = this.state;
    const {stepper, materials, objecttype, talent} = this.props;
    const active = materials.material !== undefined;
    return (
      <DSAStepContent active={true} last={true} handleNext={stepper.next} handleBack={this.handleBack}>
        <Typography>Wähle die Qualität des Materials.</Typography>
        <form>
          <DSASelect
            options={this.getOptions(Quality)}
            value={materials.quality.name}
            onChange={this.handleQualityChange}
            label="Qualität"
          />
          { objecttype.name !== "misc" &&
            <DSASwitch
              label={"Spezielles Material auswählen?"}
              checked={complex}
              onChange={this.handleSwitchChange}
              name="complex"
            />
          }
          { complex && talent.name === "Metallbearbeitung" &&
            <DSASwitch
              label={"Magisches Metall auswählen?"}
              checked={magic}
              onChange={this.handleSwitchChange}
              name="magic"
            />
          }
          {complex && !magic &&
            <DSASelect
              options={this.getOptions(this.getMaterials())}
              value={active ? materials.material.name : ""}
              onChange={this.handleMaterialsChange}
              label="Material"
            />
          }
          {magic &&
            <DSASelect
              options={this.getOptions(this.getMagicMetals())}
              value={active ? materials.material.name : ""}
              onChange={this.handleMagicMetalsChange}
              label="Magische Metalle"
            />
          }
        </form>
        {!complex && <DSADescription caption="Qualität" text={materials.quality.effect} />}
        { complex && active && !magic && this.renderMaterial(materials.material) }
        { magic && active && this.renderMagicMetal(materials.material) }
      </DSAStepContent>
    );
  }
}

DSAMaterialChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  materials: PropTypes.object.isRequired
};
