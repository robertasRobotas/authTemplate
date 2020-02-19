const http = require('http');
const port = process.env.PORT || 8080;
const app = require('./app')
const server = http.createServer(app);
const initializeEnvVariables = require('./secrets');

initializeEnvVariables();

server.listen(port, ()=>{
    console.log('SERVER STARTED ON PORT ' + port);
});