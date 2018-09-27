import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DSASelect from '../controls/DSASelect';
import DSAStepContent from '../controls/DSAStepContent';
import DSASwitch from '../controls/DSASwitch';
import DSAItemList from '../controls/DSAItemList';
import { Quality, Materials, MagicMetals } from '../data/DSACraftingData';
import { DefaultMaterial } from '../data/DSACraftingDefaults';
import {GetMaterial} from '../objects/DSAMaterials';

const ID = "materials"

export default class DSAMaterialChooser extends React.Component {

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
    let materials  = this.props.materials;
    materials[name] = value;
    this.props.onChange(ID, materials);
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

  render() {
    const {stepper, materials, objecttype, talent} = this.props;
    const {complex, magic, material} = materials;
    const active = material !== undefined;
    return (
      <DSAStepContent active={true} last={true} handleNext={stepper.next} handleBack={this.handleBack}>
        <Typography>Wähle die Qualität des Materials:</Typography>
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
              value={active ? material.name : ""}
              onChange={this.handleMaterialsChange}
              label="Material"
            />
          }
          {magic &&
            <DSASelect
              options={this.getOptions(this.getMagicMetals())}
              value={active ? material.name : ""}
              onChange={this.handleMagicMetalsChange}
              label="Magische Metalle"
            />
          }
          {active && magic &&
            <DSASelect
              options={material.purities.map((p) => ({value: p.purity, label: p.purity + "% Reinheit"}))}
              value={material.purity ? material.purity.purity : 25}
              onChange={this.handlePurityChange}
              label="Reinheit"
            />
          }
        </form>
        <DSAItemList items={GetMaterial(materials)} />
      </DSAStepContent>
    );
  }
}

DSAMaterialChooser.propTypes = {
  stepper: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  materials: PropTypes.object.isRequired
};
