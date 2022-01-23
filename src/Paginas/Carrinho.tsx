import React from "react";
import { useEffect, useState } from "react";
import Header from "../Componentes/Header";
import ItemNoCarrinho from "../Componentes/ItemNoCarrinho";

interface InfoNutricional {
  calories: number;
  carbohydrates: number;
  fat: number;
  protein: number;
  sugar: number;
}

interface Item {
  nome: string;
  id: number;
  nutricional: InfoNutricional;
}

interface ItemCarrinho {
  item: Item;
  id: number;
  quantidade: number;
}

interface Props {
  carrinho: ItemCarrinho[];
  setCarrinho: React.Dispatch<React.SetStateAction<ItemCarrinho[]>>;
  DiminuiQtdItemCarrinho(item: Item): any;
  ApagaItemCarrinho(item: Item): any;
  PegaItenslocalStorage(): any;
  PegaCarrinholocalStorage(): any;
  AddItemCarrinho(item: Item): any;
}

const Carrinho: React.FC<Props> = ({
  carrinho,
  setCarrinho,
  DiminuiQtdItemCarrinho,
  ApagaItemCarrinho,
  PegaItenslocalStorage,
  PegaCarrinholocalStorage,
  AddItemCarrinho,
}) => {
  useEffect(() => {
    const cart = PegaCarrinholocalStorage();
    if (cart !== false) {
      setCarrinho(cart);
    }
  }, []);

  return (
    <div className="Carrinho">
      <Header carrinho={carrinho}></Header>
      <h1>SEU CARRINHO</h1>
      <div className="itensCarrinho-container">
        {carrinho.map((item, index) => (
          <ItemNoCarrinho
            key={index}
            item={item}
            DiminuiQtdItemCarrinho={DiminuiQtdItemCarrinho}
            ApagaItemCarrinho={ApagaItemCarrinho}
            AddItemCarrinho={AddItemCarrinho}
          ></ItemNoCarrinho>
        ))}
      </div>
    </div>
  );
};

export default Carrinho;
