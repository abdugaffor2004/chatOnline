const express = require('express');
const cors = require('cors');
const getOrcreateUser = require('./api');


const app = express();

app.use( express.json() ) // It parses incoming JSON requests and puts the parsed data in req.body.
app.use(cors({ origin: true }));

app.post( '/authenticate', async (req, res) =>{
    const {username, secret} = req.body // Попробуй без скобок и увидишь разницу в ответе

    getOrcreateUser( { username: username, secret: secret } ).then( (response)=>{
        
        return res.status(response.status).json(response.data) //  используем .json чтобы запарсить в res данные
       
    //    res = response.data
    //    return res // можно и так но движок chatengine видит запрос и создает пользователя, а request.rest не видит, но также сервер не падает!
    } )

    
    
} )

app.listen(3001)

