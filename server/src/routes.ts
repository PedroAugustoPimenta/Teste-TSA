import express from 'express';
import db from './database/connection';


const routes = express.Router();

routes.get('/', async (request, response) => {
   const filters = request.query;

   const cadastro = await db('users');



   return response.send(cadastro);


});

routes.post('/', async (request, response) => {
   const {
      nome,
      email,
      cpf,
      endereco,
      estado,
      cidade,
      cep,
      formaDePagamento,
      nomeCartao,
      mes,
      ano,
      numeroCartao,
      codigoSeguranca,
   } = request.body;
   try {
      await db('users').insert({
         nome,
         email,
         cpf,
         endereco,
         estado,
         cidade,
         cep,
         formaDePagamento,
         nomeCartao,
         mes,
         ano,
         numeroCartao,
         codigoSeguranca,
      })
      return response.status(201).send();
   } catch (err) {
      return response.status(400).json({
         error: 'Unexpected error while creating new user'
      })
   }
});

export default routes;