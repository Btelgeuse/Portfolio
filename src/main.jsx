import React from "react"
import ReactDOM from "react-dom/client"

import './index.css'
import App from './App.jsx'
import Provider from "@/components/ui/provider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider h='0vh' w='0vw'>
      <App />
    </Provider>
  </React.StrictMode>,
)