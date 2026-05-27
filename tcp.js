const net = require("net");

const server = net.createServer(
    (socket) => {
        socket.on("data", chunk => {
            console.log("From Client")
            console.log(chunk.toString());
        })
        socket.write("Hello, Client!")

        socket.on("end", () => {
            console.log("Receiveddddd")
        })
    }
)

server.listen(2000)