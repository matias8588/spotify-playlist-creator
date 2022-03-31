import React, { useState, createContext, useContext } from "react";
import { auth } from "@/utils/getAuth";

export const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};
interface AuthContextProps {
  children?: React.ReactNode;
}

const clientId = process.env.REACT_APP_CLIENT_ID;
const host = process.env.REACT_APP_HOST;

const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${host}&scope=user-read-private`;

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<object | null>(null);
  const [playlists, setPlaylists] = useState<string[]>([]);

  const login = () => {
    window.location.replace(url);
  };

  const getToken = async (token: string) => {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
      setUser(await auth(token));
    }
  };

  const createPlaylists = (items: any) => {
    setPlaylists([...playlists, items]);
  };

  return (
    <AuthContext.Provider value={{ user, login, getToken, createPlaylists, playlists }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
