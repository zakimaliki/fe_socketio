import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { io } from "socket.io-client";

const Chatroom = () => {
  const [socket, setSocket] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [username, setUsername] = useState();
  const [group, setGroup] = useState();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    const resultSocket = io("http://localhost:4000");
    setSocket(resultSocket);
    resultSocket.emit("inisialRoom", { room: searchParams.get("group"),username: searchParams.get("username") });
    setUsername(searchParams.get("username"));
    setGroup(searchParams.get("group"));
  }, []);

  useEffect(() => {
    if(socket){
      socket.off("newMessage")
      socket.on("newMessage", (data) => {
          setMessages((current) => [...current, data]);
        })
        socket.on("notifAdmin", (data) => {
          setMessages((current) => [...current, data]);
        })
    }
  }, [socket]);


  const handleSendMessage = ( )=>{
    let dataMessage ={
      sender: username,
      message:message,
      room: group
    }
    console.log(dataMessage);
    socket.emit('sendMessage', dataMessage)
    setMessage('')
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3>Group :{group}</h3>
        </div>
        <div className="col-md-8">
          <div className="wrapper-chat">
          <ul className="list-group">
          {messages.map((item, index) => (
              <li className="list-group-item" key={index}>{item.sender} : {item.message} - {item.date}</li>
          ))}
          </ul>
          </div>
          <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSendMessage}>
              Send
          </button>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Chatroom;
