//This Websocket Server are made by Bread_Eater, made in france :)

//NodeJS Modules
const Websocket = require('ws'); //Make sure to have ws module in your nodejs project file (to have it, run "npm install ws" in nodejs command prompt)
const WebsocketPort = 8080; //Default: 8080

//Websocket (dont touch if you dont know what you doing)
const socket = new Websocket.Server({port: WebsocketPort});
socket.on('connection', () => {
    console.log('New client connected to the WebSocket server');
  });
  
  socket.on('message', (message) => {
    console.log('New message from client:', message);
  });
  
  socket.on('close', () => {
    console.log('Client disconnected');
  });  

//Message when Websocket Server started
console.log('Websocket Server opened on port', WebsocketPort);
