import React from "react";
import "./App.css";
import Routing from "@/routes/Router";
import AuthProvider from "@/context/authContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </div>
  );
}

export default App;
