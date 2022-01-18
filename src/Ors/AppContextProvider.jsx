import AppContext from "../Context/AppContext.jsx";
import useUser from "../Hooks/useUser.jsx";

function AppContextProvider({ children }) {
  const { register, login, logout, userId, header } = useUser();

  return (
    <AppContext.Provider value={{ register, login, logout, userId, header }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
