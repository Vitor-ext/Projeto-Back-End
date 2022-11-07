// Importação do Sequelize 
const Sequelize = require('sequelize');

// Importação da conexão com o banco
const connection = require('../database/database');

const Agendamento = connection.define(
    'tbl_agendamento',    // Nome da Tabela no Banco de Dados
    {
        cliente:{
            type: Sequelize.STRING,
            allowNull: false
        },
        horario:{
            type: Sequelize.TIME,
            allowNull: false
        },
        dentista:{
            type: Sequelize.STRING,
            allowNull: false
        },

    }
);

/*Executar a criação da tabela no Banco de Dados   -   Somente uma vez, após isso comentar essa linha*/
// Agendamento.sync({force:true});

module.exports = Agendamento;