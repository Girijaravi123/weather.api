const http = require('http')
const  port = 8000
const server = http.createServer(function(req, res)){
    res.write('First node.js web server!!!'))
    res.end()

})
server.listen(port, function(error)){
    if(error) {
        console.log('something wrong ||')
    } else{
        console.log('Server is listening to:'+ port)
    }
})