interface InfoNutricional {
    calories: number;
    carbohydrates: number;
    fat: number;
    protein: number;
    sugar: number;
  }
  
  interface Item {
    nome: string;
    id : number;
    nutricional: InfoNutricional;
  }
  
  interface ItemCarrinho {
    item: Item;
    id : number;
    quantidade: number;
  }

export type {Item,ItemCarrinho,InfoNutricional};