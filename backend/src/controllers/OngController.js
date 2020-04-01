const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
async index(request, response){
 
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
},
async create (request, response) {
    
    const param = request.body;
    const {name, email, whatsapp, city, state} = param;
    console.log(param);
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        state
    });
    return response.json({
        ONG_ID: id,
        mensagem: 'Ong Salva com Sucesso'
    });
},

}
