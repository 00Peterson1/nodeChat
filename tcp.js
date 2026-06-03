const net = require("net");
 const clients = [];
const server = net.createServer(
    (socket) => {
        clients.push(socket);
        console.log(socket)

        socket.on("data", (chunk)=> {
            const message = chunk.toString();
            console.log(message);

            clients.forEach(
                (client) => {
                    client.write(message)
                }
            )


            
        })
        socket.on("end", () => {
                console.log("Client Disconnected!");

                const index = clients.indexOf(socket);

                if(index !== -1 ) {
                    clients.splice(index, 1)

                }
            })

    }, () => {
        console.log("[From Server]")
    }
).listen(3509)