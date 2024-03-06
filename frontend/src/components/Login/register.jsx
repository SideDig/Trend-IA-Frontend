
import "../../styles/Login/register.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Register = ({ swapPanel, setSwapPanelfalse }) =>  {
  
  return (
    <div className="form-container sign-up-container">
      <form className="Form_registro" >
        <div className="formContent">
          <h1 className="title_iniciar">Registrarse</h1>
         
          <input
            className="formButton"
            type="text"
            required = "true" 
            placeholder="Nombre"
          />

          <input
            className="formButton"
            type="email"
            required = "true" 
            placeholder="Email"
          />

          <input
            className="formButton"
            type="password"
            required = "true" 
            placeholder="Contraseña"
          />
        
          <div className="buttonsRegister">
            <button type="submit" className="botonRegister">
              Registrarte
            </button>
          </div>
          <p>
            ¿Ya estas registrado?
            <a onClick={() => setSwapPanelfalse(false)} className="cursor-pointer"> <b>Iniciar sesion</b></a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;