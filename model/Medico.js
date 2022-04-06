/*Importação do módulo do Sequelize*/
const Sequelize = require('sequelize');

/*Importação da conexão com o banco de dados*/
const connection = require('../database/database');

/*Importação da tabela de categoria para criação da chave estrangeira
representanto a cardinalidade*/
const Especialidade = require('./Especialidade');

const Medico = connection.define(
    'tbl_medico',
    {
        nome_medico:{
            type: Sequelize.STRING,
            allowNull: false
        },
        email_medico:{
            type: Sequelize.STRING,
            allowNull: false
        },
        telefone_medico:{
            type: Sequelize.STRING,
            allowNull: false
        },
        celular_medico:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/

Especialidade.hasMany(Medico);


/*Implementação da  CHAVE PRIMÁRIA - LADO 1*/

Medico.belongsTo(Especialidade);

//Medico.sync({force:true});

module.exports = Medico;