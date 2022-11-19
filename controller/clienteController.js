const express = require('express');  // Importanto Express

const app = express();
const router = express.Router();  // Instanciando o Express.Router

const Cliente = require('../model/cliente'); 

router.post(
    '/cliente/cadastrarCliente',
    (req, res)=>{  

        const {nome, cpf, rg, telefone} = req.body;

        Cliente.create(
            {
                nome,
                cpf,
                rg,
                telefone
            }
        ).then(
            ()=>{
                res.send('CLIENTE CADASTRADO COM SUCESSO!');
            }
        );

    }
);

router.get(
    '/cliente/listarCliente',
    (req, res)=>{

        Cliente.findAll()
            .then((Cliente) =>{
                res.send(Cliente)
            }
        );
    }
);

router.delete(
    '/cliente/deletarCliente/:id',
    (req, res)=>{

        const {id} = req.params;

        Cliente.findByPk(id)
            .then((Cliente)=>{

                Cliente.destroy({
                    where: {id}
                }).then(
                    ()=>{
                        res.send('CLIENTE EXCLUIDO COM SUCESSO !');
                    } 
                );
                
            }
        );
    }
);

module.exports = router;