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
                res.send('ESPECIALIDADE CADASTRADA COM SUCESSO ! ');
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
                        res.send('ESPECIALIDADE EXCLUIDA COM SUCESSO !');
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
                res.send(Especialidade);
            }
        );
    }
);

module.exports = router;