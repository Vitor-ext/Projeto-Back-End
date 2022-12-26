const express = require('express');

const Especialidade = require('../model/especialidade');

const router = express.Router(); 

router.post(
    '/especialidade/cadastrarEspecialidade',
    (req, res)=>{

        const {especialidade} = req.body;

        Especialidade.create(
            {especialidade}
        ).then(
            ()=>{
                //res.send('ESPECIALIDADE CADASTRADA COM SUCESSO ! ');

                res.json({
                    Erro:'0',
                    Message:"ESPECIALIDADE CADASTRADA COM SUCESSO !",
                    Referencia:'1',
                    Params:'11540'
                });
            }
        );
    }
);


router.delete(
    '/especialidade/deletarEspecialidade/:id',
    (req, res)=>{

        const {id} = req.params;

        Especialidade.findByPk(id)
            .then((Especialidade)=>{

                Especialidade.destroy({
                    where: {id}
                }).then(
                    ()=>{
                        //res.send('ESPECIALIDADE EXCLUIDA COM SUCESSO !');

                        res.json({
                            Erro:'0',
                            Message:"ESPECIALIDADE EXCLUIDA COM SUCESSO !",
                            Referencia:'1',
                            Params:'11540'
                        });
                    }
                );
            }
        );
    }
);


router.get(
    '/especialidade/listarEspecialidade',
    (req, res)=>{

        Especialidade.findAll()
            .then((Especialidade)=>{
                //res.send(Especialidade);

                res.json({
                    data: Especialidade,
                    Erro:'0',
                    Message:"Lista de Especialidades existentes!",
                    Referencia:'1',
                    Params:'11540'
                });
            }
        );
    }
);

module.exports = router;