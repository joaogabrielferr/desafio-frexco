import React from 'react';
import ItemComponente from './Item'


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


  interface Props{
    itens: Item[],
    setItens: React.Dispatch<React.SetStateAction<Item[]>>,
    itensOriginal: Item[],
    setItensOriginal: React.Dispatch<React.SetStateAction<Item[]>>
    carrinho: ItemCarrinho[],
    AddItemCarrinho(item : Item) : any
  }


const ListagemItems:React.FC<Props> = ({itens,setItens,itensOriginal,setItensOriginal,carrinho,AddItemCarrinho}) => {
  return(
      <div className="listagemItems">
        
        {
            itens.map((item,index)=><ItemComponente key = {index} item = {item} carrinho = {carrinho} AddItemCarrinho = {AddItemCarrinho} ></ItemComponente>)
        }
            
      </div>
  )
};

export default ListagemItems;
