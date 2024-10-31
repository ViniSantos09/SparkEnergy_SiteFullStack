import React, { useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Home/About";
import Services from "./components/Home/Services";
import Contacts from "./pages/Contacts";
import NewPost from "./pages/NewPost";
import SparkPost from "./pages/SparkPost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import ValidLogin from "./pages/ValidLogin";
import SignUp from "./pages/SignUp";
import ValidSignUp from "./pages/ValidSignUp";
import { AuthContext } from "./Helpers/AuthContext";
import { useState } from "react";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/auth/auth", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
        }
      });
  }, []);

  return (
    <div>
      <div>
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <Router>
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/newpost" element={<NewPost />} />
              <Route path="/sparkPost" element={<SparkPost />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/login" element={<Login />} />
              <Route path="/validLogin" element={<ValidLogin />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/validSignUp" element={<ValidSignUp />} />
            </Routes>
          </Router>
        </AuthContext.Provider>
      </div>
    </div>
  );
}

export default App;
