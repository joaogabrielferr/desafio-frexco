import React from 'react'
import {Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from "react";


import {Item,ItemCarrinho,InfoNutricional} from '../Interfaces';



interface Props{
    item: ItemCarrinho;
    DiminuiQtdItemCarrinho(item:Item) : any;
    ApagaItemCarrinho(item:Item) : any;
    AddItemCarrinho(item:Item) : any
}

const ItemNoCarrinho:React.FC<Props> = ({item,DiminuiQtdItemCarrinho,ApagaItemCarrinho,AddItemCarrinho}) =>{

    

    return(
        <div className="ItemNoCarrinho">
                <h1 className = "nome-item">{item.item.nome}</h1>
                <div className='Operacoes'>
                {
                    item.quantidade === 1 ?
                    <Button variant = "contained" disabled onClick = {()=>DiminuiQtdItemCarrinho(item.item)}>-</Button>
                    :
                    <Button variant = "contained" onClick = {()=>DiminuiQtdItemCarrinho(item.item)}>-</Button>
                }
                <h3>Qtd: {item.quantidade}</h3>
                <Button variant = "contained" onClick = {()=>AddItemCarrinho(item.item)}>+</Button>
                <Button variant = "contained" startIcon={<DeleteIcon />} onClick = {()=>ApagaItemCarrinho(item.item)}>Excluir</Button>
                </div>
        </div>
    )



};

export default ItemNoCarrinho;