import React, {useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/Context/auth-context";


function App() {
  const ctx = useContext(AuthContext);
  // if we do this way, it will create an infinite loop
  // whenever we call the set state, this component will re-execute
  // hence we need to use useEffect and move below code into useEffect
  // const storedUserLoggedIn = localStorage.getItem('isLoggedIn');

  // if (storedUserLoggedIn) {
  //   setIsLoggedIn(true);
  // }

  return (

    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
    
  );
}

export default App;
