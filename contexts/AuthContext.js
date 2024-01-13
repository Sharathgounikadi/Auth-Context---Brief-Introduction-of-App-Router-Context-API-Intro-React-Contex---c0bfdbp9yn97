// contexts/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if a token is present in the local storage
    const storedToken = localStorage.getItem('sampleToken');
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (sampleToken) => {
    // Set the provided sample token in the local storage
    localStorage.setItem('sampleToken', sampleToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Remove the token from local storage
    localStorage.removeItem('sampleToken');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
