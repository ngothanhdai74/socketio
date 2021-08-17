const express = require("express")


const http = require("http")

const app = express()

const server = http.createServer(app)

const { Server } = require("socket.io")

const io = new Server(server)

io.on("connection", socket => {
    console.log("user connect");

    socket.on("on-chat", data => {
        console.log(data)
        io.emit("user-chat", {
            ...data,
            dai: "dai"   
        });
    })

})

app.get('/dai', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

server.listen(3456, () => {
})