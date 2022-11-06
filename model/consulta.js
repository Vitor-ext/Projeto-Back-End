// Importação do Sequelize 
const Sequelize = require('sequelize'); 

// Importação da conexão com o banco
const connection = require('../database/database');


const Consulta = connection.define(
    'tbl_consulta',         // Nome da Tabela no Banco de Dados
    {
        cliente:
        {
            type: Sequelize.STRING,
            allownull: false
        },
        dentista:
        {
            type: Sequelize.STRING,
            allownull: false
        },
        especialidade:
        {
            type: Sequelize.STRING,
            allownull: false
        },
        horario:
        {
            type: Sequelize.TIME,
            allownull: false
        }
    }
);


/*Executar a criação da tabela no Banco de Dados   -   Somente uma vez, após isso comentar essa linha*/
//Consulta.sync({force:True});

exports.module = Consulta;