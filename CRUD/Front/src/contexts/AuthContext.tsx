import React from "react";
import { getData, login } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Book = {
  id: string;
  owner: User;
  title: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  books: Book[];
};

type AuthContextValue = {
  user: User | null;
  token: string | null;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
};

const AuthContext = React.createContext<AuthContextValue | null>(null);

export const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = React.useState<User | null>(null);
  const { value: token, setValue: setToken } = useLocalStorage("token");
  console.log(user);

  const navigate = useNavigate();

  React.useEffect(() => {
    const stored = localStorage.getItem("token");

    if (stored) {
      const requestData = async () => {
        try {
          const data = await getData(stored);
          if (data instanceof Error) throw new Error();
          if (data?.data) {
            const { user } = data.data;
            setUser(user);
            setToken(stored);
            navigate("/dashboard");
          }
        } catch (err) {
          navigate("/");
        }
      };
      requestData();
    }
  }, [navigate, token, setToken]);

  const handleLogin = async (email: string, password: string) => {
    const data = await login(email, password);
    if (data?.data) {
      const { user, token } = data.data;
      setUser(user);
      setToken(token);
      if (user.id) navigate("/dashboard");
    }
  };

  const handleLogout = async () => {
    setUser(null);
    setToken(null);
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ user, token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("AuthContext precisa estar dentro do provider");
  return context;
};
