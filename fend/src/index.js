import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './Context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
          <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
