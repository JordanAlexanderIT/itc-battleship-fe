import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import AppContext from "./Context/AppContext";
import useUser from "./Hooks/useUser";
import "./App.css";

function App() {
  const { register, login, logout, userId, header } = useUser();
  const [state, setState] = React.useState({
    something: true,
  });
  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        register,
        login,
        logout,
        userId,
        header,
      }}
    >
      <div className="App">
        <Navbar />
        {userId ? <Outlet /> : <About />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
