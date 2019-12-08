import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

function subscribeToTimer(cb) {
  socket.emit("subscribeToTimer", 1000);
  socket.on("timer", (timestamp) => cb(null, timestamp));
}

function sendMessage(msg) {
  socket.emit("chat message", msg);
  socket.on("callback msg", function(msg) {
    console.log(typeof msg);
    return msg;
  });
}

function subscribeToChat(msg) {
  socket.emit("update chat", msg);
  socket.on("get chat", (msg) => console.log(msg));
}
export { subscribeToTimer, sendMessage, subscribeToChat };
