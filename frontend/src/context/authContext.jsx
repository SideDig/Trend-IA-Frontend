import { createContext, useContext, useState, useEffect } from "react";
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { registerRequest, loginRequest, logOutRequest } from "../routes/auth";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const storedToken = Cookies.get('access_token');
    if (storedToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const registro = async (user) => {
    try {
      const res = await registerRequest(user);
      if (res.data && res.data.usuario) {
        setIsAuthenticated(true);
        setUser(res.data.usuario);
        Cookies.set('access_token', res.data.access_token, { expires: 7 });
      }
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  const IniciarSesion = async (data) => {
    try {
      const res = await loginRequest(data);
      if (res.data && res.data.user) {
        setIsAuthenticated(true);
        setUser(res.data.user);
        Cookies.set('access_token', res.data.access_token, { expires: 7 });
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        Swal.fire({
          icon: "error",
          title: "Usuario no existe",
        });
      } else if (Array.isArray(error.response.data)) {
        setErrors(error.response.data);
      } else {
        setErrors([error.response.data.message]);
      }
    }
  };

  const confirmLogout = async () => {
    const confirmResult = await Swal.fire({
      icon: "warning",
      title: "¿Estás seguro que deseas cerrar sesión?",
      showCancelButton: true,
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    });

    if (confirmResult.isConfirmed) {
      await logout();
    }
  };

  const logout = async () => {
    try {
      const res = await logOutRequest();
      setUser(res.data);
      setIsAuthenticated(false);
      Cookies.remove('access_token');
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  return (
    <AuthContext.Provider value={{ registro, IniciarSesion, user, logout: confirmLogout, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
