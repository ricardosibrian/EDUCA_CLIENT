import { useState } from 'react';
import { toast } from 'react-toastify';
import classes from '../AuthForm.module.scss';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ onRegister = () => { } }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const errors = {
    "username": !username || username.length < 4 || username.length > 32,
    "email": !email,
    "password": !password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/.test(password),
    "re-password": !rePassword || password !== rePassword
  }

  const hasErrors = () => Object.values(errors).some(error => error);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (hasErrors()) {
      toast.warn("Wrong fields!");
      return;
    }

    onRegister(username, email, password);
    navigate('/auth/signin');    
  }

  return (
    <section className={classes["containerr"]}>
      <h3 style={{fontSize:"25px", padding:"0px", marginBottom:"0px", marginTop:"0px"}}> Crear cuenta </h3>

      <form onSubmit={onSubmitHandler}>
        <label>
          Usuario *
          <input
            className={errors["username"] ? classes["error"] : ""}
            type={"text"}
            placeholder="e.g. supernick33"
            autoComplete="username"
            name="username"
            value={username}
            onChange={({ target }) => { setUsername(target.value) }} />

          <div className={classes["hint"]}>
            Debe contener entre 4 y 32 caracteres
          </div>
        </label>

        <label>
          Correo electrónico *
          <input
            className={errors["email"] ? classes["error"] : ""}
            type={"email"}
            placeholder="e.g. example@example.com"
            autoComplete="email"
            name="email"
            value={email}
            onChange={({ target }) => { setEmail(target.value) }} />
          <div className={classes["hint"]}>
            Utiliza un correo válido
          </div>
        </label>

        <label>
          Contraseña *
          <input
            className={errors["password"] ? classes["error"] : ""}
            type={"password"}
            autoComplete="new-password"
            placeholder="A strong password"
            name="password"
            value={password}
            onChange={({ target }) => { setPassword(target.value) }} />

          <div className={classes["hint"]}>
            Debe contener como mínimo 1 mayúscula, 1 mínuscula, 1 número, y 8-32 caracteres
          </div>
        </label>

        <label>
          Repite la contraseña *
          <input
            className={errors["re-password"] ? classes["error"] : ""}
            type={"password"}
            autoComplete="new-password"
            placeholder="Repeat the strong password"
            name="re-password"
            value={rePassword}
            onChange={({ target }) => { setRePassword(target.value) }} />
        </label>

        <button type="submit" disabled={hasErrors()} >
        Crear cuenta
        </button>
        <button type='button' onClick={()=>{navigate('/auth/signin')}}>
          Ya tengo una cuenta
        </button>
      </form>
    </section>
  )
}

export default RegisterForm;