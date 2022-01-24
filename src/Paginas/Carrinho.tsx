import React from "react";
import { useEffect, useState } from "react";
import Header from "../Componentes/Header";
import ItemNoCarrinho from "../Componentes/ItemNoCarrinho";
import { Link } from "react-router-dom";


import {Item,ItemCarrinho,InfoNutricional} from '../Interfaces';


interface Props {
  carrinho: ItemCarrinho[];
  setCarrinho: React.Dispatch<React.SetStateAction<ItemCarrinho[]>>;
  DiminuiQtdItemCarrinho(item: Item): any;
  ApagaItemCarrinho(item: Item): any;
  PegaItenslocalStorage(): any;
  PegaCarrinholocalStorage(): any;
  AddItemCarrinho(item: Item): any;
}



const Carrinho: React.FC<Props> = ({carrinho,setCarrinho,DiminuiQtdItemCarrinho,ApagaItemCarrinho,PegaItenslocalStorage,
  PegaCarrinholocalStorage,
  AddItemCarrinho,
}) => {


  useEffect(() => {
    const cart = PegaCarrinholocalStorage();
    if (cart !== false) {
      console.log("pegou carrinho da local em carrinho:",carrinho);
      setCarrinho(prevCarrinho => cart);
    }
  }, []);

  return (
    <div className="Carrinho">
      <Header carrinho={carrinho}></Header>
      <Link to = "/" style={{ textDecoration: 'inherit',color:"#0288d1"}}><h1>← Voltar</h1></Link>
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
