import {Modifier} from '../DSAMisc.jsx'

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
      }

      materialItems.push({
        "title": name,
        "subtitle": "Magisches Metall",
        "items": items
      });
    }
    else {
      const { effect, modifier, bf, structure, name } = material;
      let items = [
        {name: "Effekt", value: effect},
        {name: "Proben Erschwernis", value: Modifier(modifier)}
      ];
      if(bf)
        items.push({name: "Bruchfaktor Veränderung", value: Modifier(bf)});
      if(structure)
        items.push({name: "Strukturpunkte Veränderung", value: Modifier(structure)});
      materialItems.push({
        "title": name,
        "subtitle": "Material",
        "items": items
      });
    }
  }

  return materialItems;
}
