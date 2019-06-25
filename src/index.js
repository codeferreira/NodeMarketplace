const server = require('./server')
const port = 3000 || process.env.PORT

server.listen(port, () => console.log('Running on: ' + port))
