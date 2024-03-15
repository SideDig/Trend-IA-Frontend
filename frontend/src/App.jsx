import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistroLogin from "./pages/viewRegisterLogin";
import Inicio from "./pages/Inicio";
import Principal from "./pages/Principal";
import Categorias from "./pages/Categorias";
import Suscripciones from "./pages/Suscripciones";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/registro" element={<RegistroLogin />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/categoria" element={<Categorias />} />
          <Route path="/suscripciones" element={<Suscripciones />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
