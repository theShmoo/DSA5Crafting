import {Quality, Costs, Crafting} from './DSACraftingData';

export const DefaultMaterial = {quality: Quality[2], materials: undefined, complex: false, magic: false};

export const DefaultCost = Costs[0];

export const DefaultType = Crafting[0];

export function DefaultState() {
  return {
    activeStep: 0,
    craft: {
      materials: DefaultMaterial,
      cost: DefaultCost,
      objecttype: DefaultType,
    }
  }
}

