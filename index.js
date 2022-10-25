/* Importar o pacote Express */
const express = require('express');

/* Instanciar o pacote Express */
const app = express();

/* Indicando para o Express, qual a biblioteca de referencia para Json deve ser utilizada*/
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*Importação da conexão com o banco de dados*/


/* Importar Models */


/* Importar Rotas */


/*Servidor de requisições da aplicação */
app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000 - http://localhost3000');
});