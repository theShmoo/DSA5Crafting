import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import DSAInfoBox from '../controls/DSAInfoBox';
import DSAItemList from '../controls/DSAItemList';

import { GetEnhancements } from './objects/DSAEnhancements';
import { GetMaterial } from './objects/DSAMaterials';
import { GetTechnique } from './objects/DSACraftingTechniques';
import { Modifier, Talent} from './DSAMisc';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});

class DSACraftingSummary extends React.Component {

  renderCost(cost) {
    return cost.name + ": " + cost.cost + "% vom Kaufpreis des Gegenstandes";
  }

  getSummaryTalent(talent) {
    return {
      "title": talent.name,
      "subtitle": "Talent",
      "items": [
        {name: "Beschreibung", value: talent.description},
        {name: "Probe", value: Talent(talent.test)}
      ]
    };
  }

  getSummaryItems() {
    const { cost, objecttype, complexity, materials } = this.props.craft;
    let items = [
      {name: "Kosten", value: this.renderCost(cost)},
      {name: "Art des Gegenstandes", value: objecttype.description}
    ];
    if(complexity)
      items.push({name: complexity.name, value: complexity.description});
    items.push({title: "Material", items: GetMaterial(materials)});

    return items;
  }

  getSummaryObject(object, enhancements, technique) {
    let items = {
      "title": object.name,
      "subtitle": "Name",
      "items": [
        {name: "Komplexität", value: Modifier(object.complexity)}
      ]
    };

    if(enhancements)
      items.items.push(...GetEnhancements(enhancements));

    if(technique)
      items.items.push(...GetTechnique(technique));

    return items;
  }

  getSummary() {
    const { talent, enhancements, object, technique } = this.props.craft;
    let summary = {
        "title": "Detaillierte Zusammenfassung",
        "items": this.getSummaryItems()
      };
    if(talent)
      summary.items.push(this.getSummaryTalent(talent))
    if(object)
      summary.items.push(this.getSummaryObject(object, enhancements, technique));
    return [summary];
  }

  getAggregations()
  {
    const { cost, enhancements, materials, technique } = this.props.craft;
    const {quality, material} = materials;
    let aggInterval = 1;
    let aggModifier = 0;
    let aggTries = 7;
    let aggCost = cost.cost;
    if(enhancements) {
      if(enhancements.length > 1) {
        aggInterval *= enhancements.reduce((sum, e) => sum.interval + e.interval);
        aggModifier += enhancements.reduce((sum, e) => sum.modifier + e.modifier);
      }
      else if(enhancements.length === 1)
      {
        aggInterval *= enhancements[0].interval;
        aggInterval += enhancements[0].modifier;
      }
    }
    if(technique) {
      aggModifier += technique.modifier;
      aggInterval *= technique.modifier;
    }
    if(material) {
      if(material.puritiy){
        aggModifier += material.modifier;
        aggTries = material.tries ? material.tries : aggTries;
      }
    }
    if(quality) {
      aggCost += quality.cost;
    }
    return {
      cost: aggCost * aggInterval,
      modifier: aggModifier,
      interval: aggInterval,
      tries: aggTries,
    }
  }

  getNumberSummary() {
    const aggregations = this.getAggregations();
    return [{
        "title": "Zusammenfassung",
        "items": [
          {name: "Kosten", value: aggregations.cost + "%"},
          {name: "Erschwernis", value: Modifier(aggregations.modifier)},
          {name: "Interval", value: "×" + (aggregations.interval)},
          {name: "Versuche der Sammelprobe", value: aggregations.tries}
        ]
      }];
  }

  render() {
    const { classes, onReset, onBack } = this.props;

    return (
      <DSAInfoBox>
        <DSAItemList items={this.getNumberSummary()} />
        <DSAItemList items={this.getSummary()} />
        <Button onClick={onBack} className={classes.button}>
          Zurück
        </Button>
        <Button onClick={onReset} className={classes.button}>
          Zurücksetzen
        </Button>
      </DSAInfoBox>
    );
  }
}

DSACraftingSummary.propTypes = {
  classes: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
  craft: PropTypes.object.isRequired
};

export default withStyles(styles)(DSACraftingSummary);
