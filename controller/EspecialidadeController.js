const express = require('express');

const especialidade = require('../model/Especialidade');

/** CONFIGURAÇÃO DAS ROTAS **/
const router = express.Router();

/** DEFINIÇÃO DAS ROTAS **/

router.post(
    '/especialidade/cadastrarEspecialidade',
    (req, res)=>{
       
     
        let { nome_especialidade } = req.body;

        especialidade.create(
            {nome_especialidade}
            
        ).then(
            ()=>{
                res.send('DADOS DE ESPECIALIDADE INSERIDO COM SUCESSO!');
            }
        );
        
    }
);
/* ROTA DE LISTAGEM GERAL DE ESPECIALIDADE (VERBO HTTP: GET)*/
router.get(
    '/especialidade/listarEspecialidade',
    (req, res)=>{
        //{order:['id', 'DESC']}
        especialidade.findAll()
                 .then(
                     (especialidades)=>{
                        res.send(especialidades);
                     }
                 );

        //res.send('ROTA DE LISTAGEM DE ESPECIALIDADE');
    }
);

/* ROTA DE LISTAGEM POR ID DE ESPECIALIDADE (VERBO HTTP: GET)*/
router.get( '/especialidade/listarEspecialidade/:id', (req, res)=>{

    let {id} = req.params;
    // console.log("ID: " + id);

    especialidade.findByPk(id)
             .then(
                 (especialidade)=>{
                    res.send(especialidade);
                 }
             );

});

/* ROTA DE ALTERAÇÃO DE ESPECIALIDADE (VERBO HTTP: PUT)*/
router.put(
    '/especialidade/alterarEspecialidade',
    (req, res)=>{

        // console.log(req.body);
        let {id, nome_especialidade} = req.body;

        especialidade.update(
                {nome_especialidade},
                {where: {id}}
        ).then(
            ()=>{
                res.send('DADO DA ESPECIALIDADE ALTERADO COM SUCESSO!');
            }
        );

    }
);
/* ROTA DE EXCLUSÃO DE especialidade (VERBO HTTP: DELETE)*/
router.delete(
    '/especialidade/excluirEspecialidade',
    (req, res)=>{

        let {id} = req.body;

        especialidade.destroy(
            {where: {id}}
        ).then(

            ()=>{
                res.send('ESPECIALIDADE EXCLUÍDA COM SUCESSO!');
            }

        );

    }
);

module.exports = router;