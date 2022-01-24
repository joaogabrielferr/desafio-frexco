import React from 'react';
import ItemComponente from './Item'
import {useEffect} from 'react';


import {Item,ItemCarrinho,InfoNutricional} from '../Interfaces';


  interface Props{
    itens: Item[],
    setItens: React.Dispatch<React.SetStateAction<Item[]>>,
    itensOriginal: Item[],
    setItensOriginal: React.Dispatch<React.SetStateAction<Item[]>>
    carrinho: ItemCarrinho[],
    AddItemCarrinho(item : Item) : any
  }


const ListagemItems:React.FC<Props> = ({itens,setItens,itensOriginal,setItensOriginal,carrinho,AddItemCarrinho}) => {

  useEffect(() => {
    //console.log();
  }, [carrinho]);
  
  return(
      <div className="listagemItems">
        
        {
            itens.map((item,index)=><ItemComponente key = {index} item = {item} carrinho = {carrinho} AddItemCarrinho = {AddItemCarrinho} ></ItemComponente>)
        }
            
      </div>
  )
};

export default ListagemItems;
