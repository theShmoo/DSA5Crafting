import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import DSAInfoBox from '../controls/DSAInfoBox';
import DSAItemList from '../controls/DSAItemList';

import { GetTechnique, GetMaterial, GetEnhancements, GetObject } from './DSASummaryObject';
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
    const { cost, objecttype, complexity, materials, talent, object, enhancements, technique } = this.props.craft;
    let items = [
      {name: "Kosten", value: this.renderCost(cost)},
      {name: "Art des Gegenstandes", value: objecttype.description}
    ];

    if(complexity)
      items.push({name: complexity.name, value: complexity.description});

    items.push({title: "Material", items: GetMaterial(materials)});

    if(talent)
      items.push(this.getSummaryTalent(talent))

    if(object)
      items.push(...this.getSummaryObject(object, enhancements, technique));

    return items;
  }

  getSummaryObject(object, enhancements, technique) {
    let items = GetObject(object);

    if(enhancements)
      items[0].items.push(...GetEnhancements(enhancements));

    if(technique)
      items[0].items.push(...GetTechnique(technique));

    return items;
  }

  getSummary() {
    let summary = {
        "title": "Detaillierte Zusammenfassung",
        "items": this.getSummaryItems()
      };
    return [summary];
  }

  getAggregations()
  {
    const { cost, enhancements, materials, technique } = this.props.craft;
    const {quality, material} = materials;
    let aggInterval = 1;
    let aggModifier = 0;
    let aggTries = 7;
    let aggBF = 0;
    let aggCost = cost.cost;
    if(enhancements) {
      enhancements.forEach((val, idx) => {
        aggInterval *= val.interval;
        aggModifier += val.modifier;
        if(val.bf)
          aggBF += val.bf;
      });
    }
    if(technique) {
      aggInterval *= technique.interval;
      aggModifier += technique.modifier;
      if(technique.tries)
        aggTries = Math.min(technique.tries, aggTries);
      if(technique.bf)
        aggBF += technique.bf;
    }
    if(material) {
      if(material.purity) {
        aggModifier += material.purity.modifier;
        if(material.purity.tries)
          aggTries = Math.min(aggTries, material.purity.tries);
        if(material.purity.bf)
          aggBF += material.purity.bf;
      }
      else {
        aggModifier += material.modifier;
        if(material.interval)
          aggInterval *= material.interval;
        if(material.tries)
          aggTries = Math.min(aggTries, material.tries);
        if(material.bf)
          aggBF += material.bf;
      }
    }
    if(quality) {
      aggCost += quality.cost;
    }
    return {
      cost: aggCost,
      modifier: aggModifier,
      interval: aggInterval,
      tries: aggTries,
      bf: aggBF,
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
          {name: "Versuche der Sammelprobe", value: aggregations.tries},
          {name: "Bruchfaktor / Strukturpunkte", value: aggregations.bf}
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
