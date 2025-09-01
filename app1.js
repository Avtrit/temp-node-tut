const http = require('http');

const server = http.createServer((req,res) =>{
    res.write('This is the home page ')
    res.end()
})

server.listen (5000)