const express = require('express') 
const cors = require('cors')
const timestamp = require('time-stamp')

const actionsRouter = require('./routes/actionsRouter.js')
const projectsRouter = require('./routes/projectsRouter.js')

const server = express()

server.use(cors())
server.use(logger)
server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectsRouter)

server.get('/', (req, res) => {
    res.send(`
    <p>Deployed by: <strong>${process.env.DEPLOYER}</strong></p>
    <p>Message of the Day: ${process.env.MOTD}</p>
    <p>Extra: ${process.env.OTHER_STUFF}</p>
    <script>
        const body = document.querySelector("body").style
        // body.backgroundColor = "red"
        body.display = "flex"
        body.justifyContent = "center"
        body.flexDirection = "column"
        body.width = "100vw"
        body.height = "100vh"
        body.textAlign = "center"
    </script>
    `)
})

function logger(req, res, next) {
    console.log(`A ${req.method} request to ${req.url} at ${timestamp.utc('HH:mm:ss on MM/DD/YYYY')}`)
    next()
}
  
  module.exports = server