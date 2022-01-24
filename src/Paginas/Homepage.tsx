import React from 'react';
import Header from '../Componentes/Header';
import ListagemItems from '../Componentes/ListagemItems';
import Busca from '../Componentes/Busca';
import {useEffect,useState} from 'react';
import axios from 'axios'


import {Item,ItemCarrinho,InfoNutricional} from '../Interfaces';


interface Props{
    itens: Item[],
    setItens: React.Dispatch<React.SetStateAction<Item[]>>,
    itensOriginal: Item[],
    setItensOriginal: React.Dispatch<React.SetStateAction<Item[]>>
    carrinho: ItemCarrinho[],
    setCarrinho: React.Dispatch<React.SetStateAction<ItemCarrinho[]>>
    AddItemCarrinho(item : Item) : any;
    PegaItenslocalStorage() : any;
    PegaCarrinholocalStorage() : any;
    BuscaFruta(nome : string) : any;
}


const Homepage:React.FC<Props> = ({itens,setItens,itensOriginal,setItensOriginal,carrinho,setCarrinho,AddItemCarrinho,PegaItenslocalStorage,PegaCarrinholocalStorage,BuscaFruta}) =>{

    const [carregando,setCarregando] = useState(false);

    useEffect(() => {

      //pega os dados da API e do carrinho no LocalStorage
        const itens = PegaItenslocalStorage();
        const carrinho_updt = PegaCarrinholocalStorage();
        
        if(carrinho_updt !== false)
        {
          console.log("pegou carrinho da local em home:",carrinho);
          setCarrinho(prevCarrinho => carrinho_updt);
        }

        if(itens !== false)
        {   
            setItens(itens);
            setItensOriginal(itens);
        }else{
          setCarregando(true);
          //Entrando na aplicação pela primeira vez, faz a fetch na API
        axios
          .get("https://server-desafio-frexco.herokuapp.com/api")
          .then((resposta) => {
            let lista: Item[] = [];
            for (let i = 0; i < resposta.data.length; i++) {
              let obj = {} as Item;
              obj.nome = resposta.data[i].name;
              obj.id = resposta.data[i].id;
              obj.nutricional = resposta.data[i].nutritions;
              lista.push(obj);
            }
            setItens(lista);
            setItensOriginal(lista);
            localStorage.setItem('itensDFXC',JSON.stringify(lista));
            setCarregando(false);
          })
          .catch((erro) => alert("Ocorreu um erro, por favor recarregue a pagina."));
        }
      }, []);
    return(
        <div className="Homepage">

            <Header carrinho={carrinho}></Header>
            <Busca
                itens={itens}
                setItens={setItens}
                itensOriginal={itensOriginal}
                setItensOriginal={setItensOriginal}
                BuscaFruta = {BuscaFruta}
            ></Busca>
            
            {
              
              carregando === true? <div className="loader"></div>
              :
              <>
            <ListagemItems
                itens={itens}
                setItens={setItens}
                itensOriginal={itensOriginal}
                setItensOriginal={setItensOriginal}
                carrinho = {carrinho}
                AddItemCarrinho = {AddItemCarrinho}
            >
            </ListagemItems>
            </>
          }

        </div>
    )

}

export default Homepage;