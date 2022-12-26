const express = require('express');  // Importanto Express

const app = express();
const router = express.Router();  // Instanciando o Express.Router

const Dentista = require('../model/dentista'); 

router.post(
    '/dentista/cadastrarDentista',
    (req, res)=>{  

        const {nome, cpf, rg, telefone, endereco, tblEspecialidadeId} = req.body;

        Dentista.create(
            {   
                nome,
                cpf,
                rg,
                telefone,
                endereco,
                tblEspecialidadeId
            }
        ).then(
            ()=>{
                //res.send('DENTISTA CADASTRADO COM SUCESSO!');

                res.json({
                    Erro:'0',
                    Message:"DENTISTA CADASTRADO COM SUCESSO!",
                    Referencia:'1',
                    Params:'11540'
                });
            }
        );

    }
);

router.get(
    '/dentista/listarDentistas',
    (req, res)=>{

        Dentista.findAll()
            .then((Dentista) =>{
                //res.send(Dentista)
                res.json({
                    data: Dentista,
                    Erro:'0',
                    Message:"DENTISTA EXCLUIDO COM SUCESSO !",
                    Referencia:'1',
                    Params:'11540'
                });

            }
        );
    }
);

router.delete(
    '/dentista/deletarDentistas/:id',
    (req, res)=>{

        const {id} = req.params;

        Dentista.findByPk(id)
            .then((Dentista)=>{

                Dentista.destroy({
                    where: {id}
                }).then(
                    ()=>{
                        //res.send('DENTISTA EXCLUIDO COM SUCESSO !');

                        res.json({
                            Erro:'0',
                            Message:"DENTISTA EXCLUIDO COM SUCESSO !",
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