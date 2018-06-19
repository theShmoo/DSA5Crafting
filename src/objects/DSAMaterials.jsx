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
      const { purities, info, price, purity } = material;
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
