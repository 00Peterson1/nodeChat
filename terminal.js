process.stdin.on('data', (chunk)=> {
 let message = chunk.toString();
 process.stdout.write("This is the message:" + message)
}
)