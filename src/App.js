import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import LoginContext from "./Context/Login";
import "./App.css";
import Routes from "./router";

function App() {
  const [userData, _setUserData] = useState(null);
  const [isLoading, _setIsLoading] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("uservalue"));

    _setUserData(userData);
    _setIsLoading(false);
  }, []);

  const setUserData = (data) => _setUserData(data);

  if (isLoading) return <h1>Loading ......</h1>;
  return (
    <Provider store={store}>
      <LoginContext.Provider value={{ userData, setUserData }}>
        <div className="App">
          <Routes />
        </div>
      </LoginContext.Provider>
    </Provider>
  );
}

export default App;
