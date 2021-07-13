const http = require('http');
const server = http.createServer((req,res)=>{
    // res.write('welcome to homepage')
    res.end('welcome to homepage')

})

server.listen(5000)