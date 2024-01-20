import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAYmI2UpiCYFoHMz6-AwJv2G7ycHzhiEAI",
  authDomain: "proyecto-reactjs-magallanes.firebaseapp.com",
  projectId: "proyecto-reactjs-magallanes",
  storageBucket: "proyecto-reactjs-magallanes.appspot.com",
  messagingSenderId: "473538975906",
  appId: "1:473538975906:web:71d7068f5553884efb5ffb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
