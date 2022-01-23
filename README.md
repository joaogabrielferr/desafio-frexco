# desafio-frexco
App para o desafio da Frexco.
<br/>
O deploy foi feito no seguinte endereço: https://desafio-frexco.herokuapp.com
<br/>
A API utilizada foi a seguinte: https://www.fruityvice.com/
<br/>
A API gera um erro de Cross-Origin Resource Sharing ao ser chamada diretamente utilizando a biblioteca Axios (ou qualquer outro serviço de teste online que não utiliza um server de api's como o https://resttesttest.com/) . Portanto para facilitar o desenvolvimento eu criei um server em Node.Js
que serve como Proxy, o server chama a API e retorna a resposta para a aplicação ( Como o server está fora do browser o erro de CORS não acontece).<br/>
O server esta hosteado em https://server-desafio-frexco.herokuapp.com/api
<br/>
e se trata somente de algumas linhas de codigo (server completo : https://github.com/joaogabrielferr/server-desafio-frexco)<br/>
```
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios")
app.use(cors());
app.get("/api", async (req,res)=>{
    axios.get("https://www.fruityvice.com/api/fruit/all")
    .then(resposta=>res.send(resposta.data))
    .catch(erro=>res.send(erro));
});
app.listen(process.env.PORT || 8000);
```


