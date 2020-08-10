// import { Request, Response, request } from 'express';
// import db from '../database/connection';

// export default class CadastroController {
//    async index(resquest: Request, response: Response) {
//       const filters = request.query;

//       const cadastro = await db('users');
//       return response.send(cadastro);
//    }
//    async create(resquest: Request, response: Response) {
//       const {
//          nome,
//          email,
//          endereco,
//          estado,
//          cidade,
//          cep,
//          formaDePagamento,
//          mes,
//          ano,
//          numeroCartao,
//          codigoSeguranca,
//       } = request.body;

//       try {
//          await db('users').insert({
//             nome,
//             email,
//             endereco,
//             estado,
//             cidade,
//             cep,
//             formaDePagamento,
//             mes,
//             ano,
//             numeroCartao,
//             codigoSeguranca,
//          })
//          console.log('send!: ', request.body);
//          return response.status(201).send();

//       } catch (err) {
//          console.log('Erro!: ', request.body);
//          return response.status(400).json({
//             error: 'Unexpected error while creating new user'
//          })
//       }
//    }
// }