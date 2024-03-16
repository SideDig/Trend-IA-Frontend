import "../../styles/Login/register.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Register = ({ swapPanel, setSwapPanelfalse }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registro, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/inicio");
  }, [isAuthenticated, navigate]);

  const RegistrarDatosUser = handleSubmit(async (values) => {
    registro(values);
  });

  return (
    <div className="form-container sign-up-container">
      <form className="Form_registro" onSubmit={RegistrarDatosUser}>
        <div className="formContent">
          <h1 className="title_iniciar">Registrarse</h1>
          {registerErrors.map((error, i) => (
            <p className="error-message" key={i}>
              {error}
            </p>
          ))}

          {/* NOMBRE USUARIO */}
          <input
            className="formButton"
            type="text"
            {...register("nombre", { required: true })}
            placeholder="Nombre"
          />
          {errors.name && (
            <p className="error-message">El nombre es requerido</p>
          )}

          {/* EMAIL USUARIO */}
          <input
            className="formButton"
            type="email"
            {...register("correo", { required: true })}
            placeholder="Ingresa tu Correo electronico"
          />
          {errors.email && (
            <p className="error-message">El email es requerido</p>
          )}

          {/* Password */}
          <input
            className="formButton"
            type="password"
            {...register("contraseña", { required: true })}
            placeholder="Ingresa una contraseña"
          />
          {errors.password && (
            <p className="error-message">La contraseña es requerida</p>
          )}
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