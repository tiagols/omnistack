
const connection = require('../database/connection');

module.exports = {
async index(request, response){
    const ong_id = request.headers.authorization;
    const incidents = await connection('incidents')
    .where('ong_id', ong_id).select('*')
    return response.json(incidents);
},

async create (request, response) {
    
    const param = request.body;
    const {title, description, value} = param;
    const ong_id = request.headers.authorization;
    console.log(param);
    //const id = crypto.randomBytes(4).toString('HEX');
    const [id] = await connection('incidents').insert({
        
        title,
        description,
        value,
        ong_id
    });
    return response.json({id});
},
async delete(request, response) {
    
    const param = request.params;
    const {id} = param;
    const ong_id = request.headers.authorization;
    console.log(param);
    //const id = crypto.randomBytes(4).toString('HEX');
    const incident = await connection('incidents')
    .where('id', id)
    .select('ong_id')
    .first();
    console.log(incident, ong_id);
    if(incident.ong_id != ong_id)
    {
        return response.status(401).json({error: 'Operation not permitted.'});
    }
    await connection('incidents')
    .where('id', id).delete();
        
    return response.status(204).send();
},

}
