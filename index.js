const express = require("express")
const app = express()

const http = require("http")

const server = http.createServer(app)

// const { Server } = require("socket.io")

// const io = Server(server)

app.get('/dai', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

server.listen(3456, () => {
    console.log('daint on 3456')
})