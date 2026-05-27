const net = require("node:net");

const client = net.createConnection({
    "port": 2000,
    "host": "127.0.0.1"
});

client.on("connect", () => {
    console.log("Connected to the Server");

    client.write("Hello Server 000000001");
});

client.on("data", (chunk)=>{
    console.log(chunk.toString())
})

client.on("end", ()=>{
    console.log("Donneeeeeee")
});
