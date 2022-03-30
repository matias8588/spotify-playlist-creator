import React, { useEffect, useState, createContext, useContext  } from "react";

export const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};
interface AuthContextProps {
  children?: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const login = () => {
    setUser(true);
    setLoading(false);
  };

  useEffect(() => {}, []);

  return <AuthContext.Provider value={{ user, loading, login }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;