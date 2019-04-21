export function Modifier(modifier) {
  let out = modifier;
  if(modifier === 0) out = "+/-" + Math.abs(modifier);
  else if(modifier > 0) out = "+" + Math.abs(modifier);
  else if(modifier < 0) out = "-" + Math.abs(modifier);
  return out;
}

export function Talent(talent) {
  return talent[0] + "/" + talent[1] + "/" + talent[2];
}
