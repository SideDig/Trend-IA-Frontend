import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistroLogin from "./pages/viewRegisterLogin";
import Inicio from "./pages/Inicio";
import Principal from "./pages/Principal";
import Categorias from "./pages/Categorias";
import Suscripciones from "./pages/Suscripciones";
import { AuthProvider } from "./context/authContext";
import RutaProtegida from "./Rutaprotegida/RutaProtegida";
import { DataProvider } from "./context/dataContext";
import Categoria from "./pages/Categoria";

function App() {
  return (
    <AuthProvider> 
      <DataProvider>
        <div className="app">
          <Router>
            <Routes>
              {/* Páginas a las que se puede acceder sin inicio de sesión */}
              <Route path="/" element={<Principal />} />
              <Route path="/registro" element={<RegistroLogin />} />
              
              {/* Rutas protegidas que requieren inicio de sesión */}
              <Route element={<RutaProtegida />}>
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/categorias" element={<Categorias />} />
                <Route path="/categorias/:idC" element={<Categoria />} />
                <Route path="/suscripciones" element={<Suscripciones />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
