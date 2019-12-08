// import React, { useState, useEffect } from "react";
// import { subscribeToTimer, sendMessage, subscribeToChat } from "./../api";

// function Chat() {
//   const [timestamp, setTimestamp] = useState("no timestamp yet");
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState("No chat yet");

//   useEffect(() => {
//     console.log("useEffect called");
//     subscribeToTimer((err, timestamp) => setTimestamp(timestamp));
//   }, []);

//   function handleSendMsg(e) {
//     e.preventDefault();
//     setChat(sendMessage(message)); // I think this will work, but currently returning undef
//     console.log(sendMessage(message));
//   }

//   function handleChangeMessage(e) {
//     setMessage(e.target.value);
//   }

//   return (
//     <div>
//       <h4>Chat</h4>
//       <ul id="messages"></ul>
//       <p>Timestamp: {timestamp}</p>
//       <p>{chat}</p>
//       <form action="">
//         <input className="form-control" value={message} onChange={(e) => handleChangeMessage(e)} />
//         <button className="btn btn-primary" onClick={(e) => handleSendMsg(e)}>
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Chat;
