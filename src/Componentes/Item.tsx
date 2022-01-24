import React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";



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


interface Props {
  item: Item;
  carrinho: ItemCarrinho[];
  AddItemCarrinho(item: Item): any;
}

const Item: React.FC<Props> = ({ item, carrinho, AddItemCarrinho }) => {
  const [qtdNoCarrinho, setQtdNoCarrinho] = useState(0);

  useEffect(() => {
    // let qtd = carrinho.find((x) => x.id === item.id);
    // if (qtd) {
    //   setQtdNoCarrinho(qtd.quantidade);
    // }

    

  }, [carrinho]);


  return (
    <div className="item">
      <h3 className="nome-item">{item.nome}</h3>
      <br />
      <div className="info-nutri">
        <div className="item-nutri">
          <p>Calorias:</p>
          <p>{item.nutricional.calories}</p>
        </div>
        <div className="item-nutri">
          <p>Carboidratos:</p>
          <p>{item.nutricional.carbohydrates}</p>
        </div>
        <div className="item-nutri">
          <p>Proteínas:</p>
          <p>{item.nutricional.protein}</p>
        </div>
        <div className="item-nutri">
          <p>Açucar:</p>
          <p>{item.nutricional.sugar}</p>
        </div>
      </div>
      <br />
      <Button variant="contained" id = {`${item.id}`}  onClick={() => AddItemCarrinho(item)}>
        Adicionar ao carrinho
      </Button>
    </div>
  );
};

export default Item;
