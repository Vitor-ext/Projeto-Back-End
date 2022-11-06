// Importação do Sequelize 
const Sequelize = require('sequelize'); 

// Importação da conexão com o banco
const connection = require('../database/database');


const Especialidade = connection.define(
    'tbl_especialidade',         // Nome da Tabela no Banco de Dados
    {
        especialidade:
        {
            type: Sequelize.STRING,
            allownull: false
        }
    }
);


/*Executar a criação da tabela no Banco de Dados   -   Somente uma vez, após isso comentar essa linha*/
//Consulta.sync({force:True});

exports.module = Especialidade;