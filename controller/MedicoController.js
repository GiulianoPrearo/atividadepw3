const express = require('express');
const fs = require('fs');

const app = express();
const router = express.Router();

const medico = require('../model/Medico');
const { Console } = require('console');





router.post('/medico/cadastrarMedico',
(req, res)=>{

    

    const { nome_medico, email_medico, telefone_medico, celular_medico, tblEspecialidadeId } = req.body;
   

    medico.create(
        {
            nome_medico,
            email_medico,
            telefone_medico,
            celular_medico,
            tblEspecialidadeId

        }
    ).then(
        ()=>{
            res.send('DADOS DO MEDICO INSERIDOS COM SUCESSO!');      
        }
    );

});

router.get('/medico/listarMedico', (req, res)=>{

    medico.findAll()
          .then((medicos)=>{
              res.send(medicos)
          });
});

router.get('/medico/listarMedicoCodigo/:id', (req, res)=>{

    const { id } = req.params

    medico.findByPk(id)
          .then((medicoId)=>{
              res.send(medicoId)
          });
});

router.delete('/medico/excluirMedico/:id', (req, res)=>{

    let { id } = req.body;

                medico.destroy(
                {where: {id}}
                ).then(
                ()=>{
                   
                    res.send('DADOS DO MEDICO EXCLUIDOS COM SUCESSO')
                 }
                 );
                });

                  

router.put('/medico/alterarMedico', 
 (req, res)=>{

    const { nome_medico, email_medico, telefone_medico, celular_medico, tblEspecialidadeId, id} = req.body;
   

            /**  ATUALIZAÇÃO DOS DADOS DO MEDICO **/
            medico.update(
                {  
                    id,
                    nome_medico,
                    email_medico,
                    telefone_medico,
                    celular_medico,
                    tblEspecialidadeId
                },
                {where: {id}}
            ).then(
            ()=>{
                res.send('DADOS DO MEDICO ALTERADOS COM SUCESSO!');
            }
            );

        }
        );

    

module.exports = router;