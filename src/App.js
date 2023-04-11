import React, { useState, useEffect } from "react";
import Home from "./page/Home";
import Signup from "./page/Signup";
import Login from "./page/Login";
import { Routes, Route } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log();
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
return(
    <Router>
      <div className="App bg-primary">
        <section>
          <div>
            <Routes>
            <Route path="/" element={<Home name={userName} />} />
              <Route path="/signup" element={<Signup />} />
             {userName === null ? <Route path="/login" element={<Login />} />:<Route path="/login" element={<Login />} />} 
            </Routes>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
