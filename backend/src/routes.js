const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
       
        aluno: 'Tiago Leandro',
        idade: 37
    });

});

// routes.get('/users/', (request, response) => {
//     const param = request.params;
//     console.log(param);
//     return response.json({
//         Users: [{aluno: 'Tiago Leandro', idade: 37}, {aluno: 'Lavinia dos Santos', idade: 9}, {aluno: 'Marjorie dos Santos', idade: 0}, ]
        
//     });

// });

// routes.get('/users/:id', (request, response) => {
//     const param = request.params;
//     console.log(param);
//     return response.json({
//         evento: 'Post',
//         aluno: 'Tiago Leandro'
//     });

// });

// routes.post('/users/', (request, response) => {
//     const param = request.body;
//     console.log(param);
//     const id = crypto.randomBytes(4).toString('HEX');
  
//     return response.json({
//         ONG_ID: id,
//         mensagem: 'Usuario Salvo com Sucesso'
//     });

// });
routes.post('/sessions/', SessionController.create);
routes.post('/ongs/', OngController.create);

routes.get('/ongs/', OngController.index);

routes.get('/profile/', ProfileController.index);

routes.post('/incidents/', IncidentController.create);

routes.get('/incidents/', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;