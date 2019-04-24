import {Modifier} from './DSAMisc'
import {Complexity} from '../data/DSACraftingData'

export function GetTechnique(technique) {
  const {name, effect, modifier, bf, interval} = technique;
  return [{
    "title": name,
    "subtitle": "Herstellungstechnik",
    "items": [
      {name: "Effekt", value: effect},
      {name: "Erschwernis", value: Modifier(modifier)},
      {name: "Bruchfaktor/Stabilitätswert", value: Modifier(bf)},
      {name: "Verlängerung des Intervals", value: "×" + interval}
    ]
  }];
}

export function GetMaterial(materials) {
  const {quality, material, complex, magic} = materials;
  let materialItems = [];

  if(quality) {
    materialItems.push(...[
      {name: "Qualität", value: quality.name},
      {name: "Effekt", value: quality.effect},
    ]);
  }

  if(material && complex) {
    if(magic) {
      const { info, price, name, purity } = material;
      let items = [];
      if(info)
        items.push({name: "Info", value: info});
      items.push({name: "Preis", value: price});
      if(purity) {
        const { effect, modifier, bf, structure } = purity;
        items.push({name: "Reinheit", value: purity.purity + "%"});
        items.push({name: "Effect", value: effect});
        items.push({name: "Proben Erschwernis", value: Modifier(modifier)});
        if(bf)
          items.push({name: "Bruchfaktor Veränderung", value: Modifier(bf)});
        if(structure)
          items.push({name: "Strukturpunkte Veränderung", value: Modifier(structure)});

        items.push( {name: "Versuche der Sammelprobe", value: purity.tries ? purity.tries : 7});
      }

      materialItems.push({
        "title": name,
        "subtitle": "Magisches Metall",
        "items": items
      });
    }
    else {
      const { effect, modifier, bf, structure, name, tries} = material;
      let items = [
        {name: "Effekt", value: effect},
        {name: "Proben Erschwernis", value: Modifier(modifier)}
      ];
      if(bf)
        items.push({name: "Bruchfaktor Veränderung", value: Modifier(bf)});
      if(structure)
        items.push({name: "Strukturpunkte Veränderung", value: Modifier(structure)});

      items.push( {name: "Versuche der Sammelprobe", value: tries ? tries : 7});

      materialItems.push({
        "title": name,
        "subtitle": "Material",
        "items": items
      });
    }
  }

  return materialItems;
}

export function GetEnhancements(enhancements) {
  return [{
    "title": "Verbesserungen",
    "items": enhancements.map((e, i) => ({
        "title": e.effect,
        "subtitle": "Effekt",
        "items": [
          {name: "Erschwernis", value: Modifier(e.modifier)},
          {name: "Verlängerung des Intervals", value: "×" + e.interval}
        ]
      }))
  }];
}

export function GetObject(o) {
  const c = Complexity[o.complexity];

  let r = {
    "title": o.name,
    "items": [
      {name: "Komplexität", value: c.name},
      {name: "Beschreibung", value: c.description}
    ]
  };

  if(o.complexity === 1)
    r.items.push({name: "Sonderfertigkeit", value: o.sf});

  if(o.complexity === 2)
    r.items.push({name: "Berufsgeheimnis AP", value: o.ap});

  return [r];
}
