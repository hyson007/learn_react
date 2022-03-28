import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/Context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // if we do this way, it will create an infinite loop
  // whenever we call the set state, this component will re-execute
  // hence we need to use useEffect and move below code into useEffect
  // const storedUserLoggedIn = localStorage.getItem('isLoggedIn');

  // if (storedUserLoggedIn) {
  //   setIsLoggedIn(true);
  // }

  useEffect(() => {
    const storedUserLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);

    // set to local storage
    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "0");
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler
      }}>
      <MainHeader/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
