import React from "react";
import "./App.css";
import Routing from "./components/Routing/Routing";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const jwtUser = jwtDecode(jwt);
      if (Date.now() >= jwtUser.exp * 1000) {
        localStorage.removeItem("token");
        location.reload();
      } else {
        setUser(jwtUser);
      }
    } catch (err) {}
  }, []);



  return (
    <div className="App">
      <Navbar user={user}/>

      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App;
