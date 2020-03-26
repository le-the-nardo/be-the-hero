const crypto = require('crypto'); //cryptografia e gerar string aleatória

const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body; //pega o corpo da request

        const id = crypto.randomBytes(4).toString('HEX'); //string aleatória em hexadecimal

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,        
        })

        return response.json({ id });
    }
};