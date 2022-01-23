import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "./Componentes/Header";
import ListagemItems from "./Componentes/ListagemItems";
import Homepage from './Paginas/Homepage';
import Carrinho from './Paginas/Carrinho';



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



const App: React.FC = () => {

  const [itens, setItens] = useState<Item[]>([]); //itens que aparecem na homepage, pode ser filtrados na busca
  const [itensOriginal, setItensOriginal] = useState<Item[]>([]); //para utilizar na busca,contem todos os itens
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);


  //pega os itens guardados na LocalStorage
  const PegaItenslocalStorage = () =>{

    const session = localStorage.getItem('itensDFXC');
    if(!session)return false;
    else return JSON.parse(session);
}

//pega os itens no carrinho guardados na LocalStorage
const PegaCarrinholocalStorage = () =>{
  const session = localStorage.getItem('carrinhoDFXC');
  if(!session)return false;
  else return JSON.parse(session);
}

  //adiciona um item ao carrinho ou aumenta a quantidade
  const AddItemCarrinho = (item:Item) =>{

    //1. Se o carrinho não conter o item, atualiza o carrinho com o novo item
    //2. Se o carrinho conter o item, somente atualiza a quantidade do item
    
    const jaAdicionado = carrinho.find((itemCarrinho)=> itemCarrinho.id === item.id);
    if(jaAdicionado)
    {
      const aux : ItemCarrinho[] = carrinho.map((itemCarrinho)=> itemCarrinho.id === item.id ? {...itemCarrinho,quantidade : itemCarrinho.quantidade+1} : itemCarrinho); 
      localStorage.setItem('carrinhoDFXC',JSON.stringify(aux));
      setCarrinho( carrinho.map((itemCarrinho)=> itemCarrinho.id === item.id ? {...itemCarrinho,quantidade : itemCarrinho.quantidade+1} : itemCarrinho )   );
    }else
    {
      //cria produto no carrinho
      let novoItem = {} as ItemCarrinho;
      novoItem.id = item.id;
      novoItem.item = item;
      novoItem.quantidade = 1;
      

      localStorage.setItem('carrinhoDFXC',JSON.stringify([...carrinho,novoItem]))

      //utilizando a funcao callback do state para garantir que o estado seja att
      setCarrinho(prevCarrinho => [...prevCarrinho,novoItem]);
    }
  }

  //diminui uma unidade de um item no carrinho
  const DiminuiQtdItemCarrinho = (item:Item) =>{

    const aux : ItemCarrinho[] = carrinho.map((itemCarrinho)=> itemCarrinho.id === item.id ? {...itemCarrinho,quantidade : itemCarrinho.quantidade-1} : itemCarrinho); 
    localStorage.setItem('carrinhoDFXC',JSON.stringify(aux));
    setCarrinho( carrinho.map((itemCarrinho)=> itemCarrinho.id === item.id ? {...itemCarrinho,quantidade : itemCarrinho.quantidade-1} : itemCarrinho )   );
  }

  //Deleta um item do carrinho
  const ApagaItemCarrinho = (item:Item) =>{
    
    const aux : ItemCarrinho[] = carrinho.filter((itemCarrinho)=> itemCarrinho.id !== item.id); 
    localStorage.setItem('carrinhoDFXC',JSON.stringify(aux));
    setCarrinho( carrinho.filter((itemCarrinho)=> itemCarrinho.id !== item.id) );
  }

  const BuscaFruta = (nome:string) =>{

    console.log(nome);
    if(nome === "")
    {
      setItens(itensOriginal);
    }else
    {
      
      setItens(  itensOriginal.filter((item) => item.nome.toLowerCase().includes(nome.toLowerCase())));

    }
  }

  return (
    <div className="App">

      <Router>
        <Routes>
        <Route path = "/" 
        element = {
        <Homepage
        itens = {itens}
        setItens = {setItens}
        itensOriginal={itensOriginal}
        setItensOriginal = {setItensOriginal}
        carrinho = {carrinho}
        setCarrinho = {setCarrinho}
        AddItemCarrinho = {AddItemCarrinho}
        PegaItenslocalStorage = {PegaItenslocalStorage}
        PegaCarrinholocalStorage = {PegaCarrinholocalStorage}
        BuscaFruta = {BuscaFruta}
        ></Homepage>
        } ></Route>

        <Route path = "/carrinho" 
        element = {
        <Carrinho
          carrinho = {carrinho}
          setCarrinho = {setCarrinho}
          DiminuiQtdItemCarrinho = {DiminuiQtdItemCarrinho}
          ApagaItemCarrinho = {ApagaItemCarrinho}
          PegaItenslocalStorage = {PegaItenslocalStorage}
          PegaCarrinholocalStorage = {PegaCarrinholocalStorage}
          AddItemCarrinho = {AddItemCarrinho}
        ></Carrinho>}>
        </Route>
        </Routes>
      </Router>

    </div>
  );
};

export default App;
