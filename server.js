'use strict';

// create a variable called express to use the express library
const express = require('express');

// server has a lot of methods and properities to be used
const server = express();

// connect our server with the website
const PORT = process.env.PORT || 3000; //0-65000

// to access static files and folder in the public folder
server.use(express.static('./public'));


// route for testing
// request: localhost:3000/test
// response: 'my server is working!!'
server.get('/test',(request,response)=>{
    response.send('my server is working!!');
})

server.get('/people',(req,res)=>{
    let family = [
        {name:'Razan'},
        {name:'lina'},
        {name:'farhan'}
    ];
    res.send(family);
})


server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})
