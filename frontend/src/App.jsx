import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistroLogin from "./pages/viewRegisterLogin";
import Inicio from "./pages/Inicio";
import Principal from "./pages/Principal";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Principal/>}/>
         <Route path="/registro" element={<RegistroLogin />} />
         <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
