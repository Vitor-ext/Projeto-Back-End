// Importação do Sequelize 
const Sequelize = require('sequelize');

// Importação da conexão com o banco

const connection = require("../database/database");

const Cliente = connection.define(
    'tbl_cliente',    // Nome da Tabela no Banco de Dados
    {
        nome:{
            type: Sequelize.STRING,
            allowNull: false
        },
        cpf:{
            type: Sequelize.INTEGER(11),
            allowNull: false
        },
        rg:{
            type: Sequelize.INTEGER(10),
            allowNull: false
        },
        telefone:{
            type: Sequelize.INTEGER(11),
            allowNull: false
        }
    }   
);


/*Executar a criação da tabela no Banco de Dados   -   Somente uma vez, após isso comentar essa linha*/
// Cliente.sync({force:true});

exports.module = Cliente;