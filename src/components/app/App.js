import React from "react";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../main/Main";

const App = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <header>
        <button onClick={toggleAuth}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </header>
      <main>
        {isAuthenticated ? <h1>Hello, user!</h1> : <h1>Please, login!</h1>}
      </main>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppWrapper;
