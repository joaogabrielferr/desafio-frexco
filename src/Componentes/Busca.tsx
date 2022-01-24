import TextField from '@mui/material/TextField';
import React from 'react';



import {Item,ItemCarrinho,InfoNutricional} from '../Interfaces';


  interface Props{
      itens : Item[];
      setItens : React.Dispatch<React.SetStateAction<Item[]>>;
      itensOriginal : Item[];
      setItensOriginal: React.Dispatch<React.SetStateAction<Item[]>>;
      BuscaFruta(nome : string) : any
  }



const Busca:React.FC<Props> = ({itens,setItens,itensOriginal,setItensOriginal,BuscaFruta}) =>{


    return( 
    <div className = "Busca">
        <TextField 
        id="outlined-basic"
         label="Digite o nome de uma fruta"
         variant="filled"
          style = {{color:"#333",backgroundColor:"white",width:"50%",borderRadius:"0.3em"}}
          onChange={(e)=>BuscaFruta(e.target.value)}/>
    </div> )

}

export default Busca;