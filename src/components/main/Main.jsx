import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const toggleAuth = () => {
    if (isAuthenticated) {
      localStorage.removeItem("token");
    } else {
      localStorage.setItem("token", "123456789");
    }
    setAuthenticated(!isAuthenticated);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
