import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("currentUser");
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Register
  const register = (userData) => {
    setUsers((prev) => [...prev, userData]);
  };

  // Login
  const login = (email, password) => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (foundUser) {
      setCurrentUser(foundUser);
      setIsAuthenticated(true);

      localStorage.setItem("currentUser", JSON.stringify(foundUser));

      return true;
    }

    return false;
  };

  // Logout
  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        isAuthenticated,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);
