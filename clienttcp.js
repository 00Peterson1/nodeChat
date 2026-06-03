const net = require("node:net");

const readLine = require("readline");

const rl = readLine.createInterface(

    {
        input: process.stdin,
        output :process.stdout
    }
)

const client = net.createConnection({
    "port": 3509,
    "host": "127.0.0.1"
});

client.on("connect", () => {
    console.log("Connected to the chat");

    askMessage();

    
});

client.on("data", (chunk)=>{
    console.log("\n" + chunk.toString())
    askMessage();
})

client.on("end", ()=>{
    console.log("Disconnected from server");

})
function askMessage() {
    rl.question("You:", (message)=>{
        client.write(message);
    })

}

