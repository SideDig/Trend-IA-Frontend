
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

const RutaProtegida = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return <h1>Cargando</h1>;
  }

  if (!loading && !isAuthenticated) {
    return <Navigate to="/registro" replace />;
  }

  return <Outlet />;
};

export default RutaProtegida;