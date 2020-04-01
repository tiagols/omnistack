
const connection = require('../database/connection');

module.exports = {

async create (request, response) {
    
    const param = request.body;
    const {id} = param;
    console.log(param);
    const ong = await connection('ongs').where('id', id).
    select('name').first();

    if(!ong)
    {
        return response.status(400).json('ONg not found!');
    }
    return response.json({
        name: ong
    });
},

}
