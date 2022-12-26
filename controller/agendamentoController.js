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
                //res.send('AGENDAMENTO CONFIRMADO COM SUCESSO!'); // Maneira Easy

                // Maneira HARD 

                res.json({
                    Erro:'0',
                    Message:"AGENDAMENTO CONFIRMADO COM SUCESSO!",
                    Referencia:'1',
                    Params:'11540'
                });
            }
        );

    }
);

router.get(
    '/agendamento/listarConsultas',
    (req, res)=>{

        Agendamento.findAll()
            .then((Agendamento) =>{
                //res.send(Agendamento)
                res.json({
                    data: Agendamento,
                    Erro:'0',
                    Message:"Agendamento Excluido com Sucesso!",
                    Referencia:'1',
                    Params:'11540'
                });
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
                        //res.send('Agendamento Excluido com Sucesso !');

                        res.json({
                            Erro:'0',
                            Message:"Agendamento Excluido com Sucesso!",
                            Referencia:'1',
                            Params:'11540'
                        });
                    } 
                );
                
            }
        );
    }
);

module.exports = router;