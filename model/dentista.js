// Importação do Sequelize 
const Sequelize = require('sequelize');

// Importação da conexão com o banco

const connection = require("../database/database");

/*Importação da tabela de categoria para criação da chave estrangeira
representanto a cardinalidade*/
const Especialidade = require('./especialidade');

const Dentista = connection.define(
    'tbl_dentista',    // Nome da Tabela no Banco de Dados
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
        },
        endereco:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }   
);


/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/
Especialidade.hasMany(Dentista);


/*Implementação da  CHAVE PRIMÁRIA - LADO 1*/
Dentista.belongsTo(Especialidade);


/*Executar a criação da tabela no Banco de Dados   -   Somente uma vez, após isso comentar essa linha*/
//Dentista.sync({force:true});

module.exports = Dentista;