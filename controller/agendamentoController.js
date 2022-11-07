const express = require('express');  // Importanto Express

const app = express();
const router = express.Router();  // Instanciando o Express.Router

const Agendamento = require('../model/agendamento'); 

router.post(
    '/agendamento/cadastrarAgendamento',
    (req, res)=>{  

        const {cliente, horario, dentista} = req.body;

        Agendamento.create(
            {
                cliente,
                horario,
                dentista
            }
        ).then(
            ()=>{
                res.send('AGENDAMENTO CONFIRMADO COM SUCESSO!');
            }
        );

    }
);

router.get(
    '/agendamento/listarConsultas',
    (req, res)=>{

        Agendamento.findAll()
            .then((Agendamento) =>{
                res.send(Agendamento)
            }
        );
    }
);

router.delete(
    '/agendamento/deletarConsultas/:id',
    (req, res)=>{

        const {id} = req.params;

        Agendamento.findByPk(id)
            .then((Agendamento)=>{

                Agendamento.destroy({
                    where: {id}
                }).then(
                    ()=>{
                        res.send('Agendamento Excluido com Sucesso !');
                    } 
                );
                
            }
        );
    }
);

module.exports = router;