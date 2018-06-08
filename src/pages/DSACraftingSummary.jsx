import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import DSAInfoBox from '../controls/DSAInfoBox';
import DSAItemList from '../controls/DSAItemList';

import { GetEnhancements } from '../chooser/DSAEnhancements';
import { Modifier, Talent} from '../DSAMisc';

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
    const {quality, material} = materials;
    let items = [
      {name: "Kosten", value: this.renderCost(cost)},
      {name: "Art des Gegenstandes", value: objecttype.description}
    ];
    if(complexity)
      items.push({name: complexity.name, value: complexity.description});
    if(quality)
    {
      let materialItems = [
        {name: "Qualität", value: quality.name},
        {name: "Effekt", value: quality.effect},
      ];
      if(material)
        materialItems.push(this.getSummaryMaterial(material));

      items.push({title: "Material", items: materialItems});
    }
    return items;
  }

  getSummaryObject(object, enhancements) {
    let items = {
      "title": object.name,
      "subtitle": "Name",
      "items": [
        {name: "Komplexität", value: Modifier(object.complexity)}
      ]
    };

    if(enhancements)
      items.items.push(...GetEnhancements(enhancements));

    return items;
  }

  getSummaryMaterial(material) {
    const { effect, modifier, bf, structure, name } = material
    let items = [
      {name: "Effekt", value: effect},
      {name: "Proben Erschwernis", value: Modifier(modifier)}
    ];
    if(bf)
      items.push({name: "Bruchfaktor Veränderung", value: Modifier(bf)});
    if(structure)
      items.push({name: "Strukturpunkte Veränderung", value: Modifier(structure)});

     return {
      "title": name,
      "subtitle": "Material",
      "items": items
    }
  }

  getSummary() {
    const { talent, enhancements, object } = this.props.craft;
    let summary = {
        "title": "Detaillierte Zusammenfassung",
        "items": this.getSummaryItems()
      };
    if(talent)
      summary.items.push(this.getSummaryTalent(talent))
    if(object)
      summary.items.push(this.getSummaryObject(object, enhancements));
    return [summary];
  }

  getAggregations()
  {
    const { cost, enhancements, complexity, materials } = this.props.craft;
    const {quality, material} = materials;
    let interval = 0;
    let modifier = 0;
    let tries = 7;
    let aggCost = cost.cost;
    if(enhancements)
    {
      interval += enhancements.reduce((sum, e) => sum.interval + e.interval);
      modifier += enhancements.reduce((sum, e) => sum.modifier + e.modifier);
    }
    if(material)
      modifier += material.modifier;
    if(quality)
      aggCost += quality.cost;
    return {
      cost: aggCost,
      modifier: modifier,
      interval: interval,
      tries: tries,
    }
  }

  getNumberSummary() {
    const aggregations = this.getAggregations();
    return [{
        "title": "Zusammenfassung",
        "items": [
          {name: "Kosten", value: aggregations.cost + "%"},
          {name: "Erschwernis", value: Modifier(aggregations.modifier)},
          {name: "Interval", value: Modifier(aggregations.interval)},
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
