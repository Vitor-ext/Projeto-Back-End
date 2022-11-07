/* Importar o pacote Express */
const express = require('express');

/* Instanciar o pacote Express */
const app = express();

/* Indicando para o Express, qual a biblioteca de referencia para Json deve ser utilizada*/
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*Importação da conexão com o banco de dados*/

const connection = require('./database/database');

/* Importar Models */
const Agendamento = require('./model/agendamento');
const Cliente = require('./model/cliente');
const Consulta = require('./model/consulta');
const Dentista = require('./model/dentista');
const Especialidade = require('./model/especialidade');


/* Importar Rotas */

const agendamentoController = require('./controller/agendamentoController');
app.use('/', agendamentoController); 

// const clienteController = require('./controller/clienteController');
// // app.use('/', clienteController);

// const consultaController = require('./controller/consultaControlle');
// app.use('/', consultaController);

// const dentistaController = require('./controller/dentistaController');
// app.use('/', dentistaController);

const especialidadeController = require('./controller/especialidadeController');
app.use('/', especialidadeController); 

/*Servidor de requisições da aplicação */
app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000 - http://localhost:3000/');
});