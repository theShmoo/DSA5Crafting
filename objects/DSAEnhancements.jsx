import {Modifier} from '../DSAMisc.jsx'

export function GetEnhancements(enhancements) {
  return [{
    "title": "Verbesserungen",
    "items": enhancements.map((e, i) => ({
        "title": e.effect,
        "subtitle": "Effekt",
        "items": [
          {name: "Effekt", value: e.effect},
          {name: "Erschwernis", value: Modifier(e.modifier)},
          {name: "Verlängerung des Intervals", value: "×" + e.interval}
        ]
      }))
  }];
}
