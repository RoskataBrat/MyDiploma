import React, { useState } from "react";
import { useTheme } from "../ThemeContext";
import "../styles/Messages.css";

const Messages = () => {
  const { sendMessage } = useTheme();
  const [message, setMessage] = useState("");

  // Handle sending a message
  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(message); // Add message to Notifications
      setMessage(""); // Clear the input field
      alert("Message sent to Notifications!");
    } else {
      alert("Message cannot be empty!");
    }
  };

  return (
    <div className="messages">
      <h2>Send a Message</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        rows="5"
        cols="30"
      ></textarea>
      <br />
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
};

export default Messages;
