import React from "react";
import ReactDOM from "react-dom/client"; // Use the new `react-dom/client` API
import App from "./App";
import { ThemeProvider } from "./ThemeContext";
import { MessageProvider } from "./MessageContext";
import { BrowserRouter } from "react-router-dom";

// Create a root container using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app inside the root container
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <MessageProvider>
        <App />
      </MessageProvider>
    </ThemeProvider>
  </BrowserRouter>
);




