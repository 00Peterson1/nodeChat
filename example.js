const fs = require("node:fs");

const path = require("path");

const pathfile = path.join(__dirname, "./client/index.html")

const open = fs.open(pathfile, "r", (err, data)=> {
    if(err) {
        console.log(err)
        return;
    }
    console.log(data);


    const buffer = Buffer.alloc(400);
    fs.read(data, buffer,0, 400 ,0 ,(err, bytesRead, buffer)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log(bytesRead)
        console.log(buffer.toString())
    })
})

