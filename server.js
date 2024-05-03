const http = require("http")
const io = require("socket.io");

const apiServer=require('./api.js')
const httpServer=http.createServer(apiServer);
const socketServer=io(httpServer);
 
const sockets=require('./sockets.js')

const PORT = 3000;

httpServer.listen(PORT);
console.log("Listning on Port ", PORT);

sockets.listen(socketServer);


