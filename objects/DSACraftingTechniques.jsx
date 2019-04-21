import {Modifier} from '../DSAMisc.jsx'

export function GetTechnique(technique) {
  return [{
    "title": "Herstellungstechnik",
    "items": [{
        "title": technique.effect,
        "subtitle": "Effekt",
        "items": [
          {name: "Erschwernis", value: Modifier(technique.modifier)},
          {name: "Verlängerung des Intervals", value: "×" + technique.interval}
        ]
      }]
  }];
}
