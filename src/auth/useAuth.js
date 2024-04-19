import axios from "axios";
import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();
  const URL_API = import.meta.env.BASE_URL_API;

  const signIn = async (username, password) => {
    try {
      const response = await axios.post(`${URL_API}/auth/singin`, {
        username,
        password,
      });

      const data = response.data;
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);

      if (data.role === "admin") {
        navigate("/admin/dashboard", {
          replace: true,
        });
      } else if (data.role === "user") {
        navigate("/user/dashboard", {
          replace: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login", {
      replace: true,
    });
  };

  const value = useMemo(
    () => ({
      user,
      signIn,
      signOut,
    }),

    [user]
  );

  return (
    <AuthContext.AuthProvider value={value}>
      {children}
    </AuthContext.AuthProvider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
