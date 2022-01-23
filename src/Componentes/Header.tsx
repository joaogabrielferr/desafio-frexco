import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";

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
}

const Header: React.FC<Props> = ({ carrinho }) => {
  return (
    <div className="header">
      <div className="inner-header">
        <h1>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            Hortifruti
          </Link>
        </h1>
        <div className="opcoes-header">
          <Button
            style={{ color: "white", border: "0.1em solid white" }}
            variant="outlined"
          >
            <Link
              to="/carrinho"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              ABRIR CARRINHO
            </Link>
          </Button>
          <Link
            to="/carrinho"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <ShoppingCartIcon></ShoppingCartIcon>
            <span className = "qtd-carrinho">{carrinho.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
