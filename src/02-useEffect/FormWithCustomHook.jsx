import { useEffect, useState } from "react";
import { useForm } from "./../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  return (
    <>
      <h1>Formulario Con Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control my-3"
        placeholder="E-Mail"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <a onClick={onResetForm} className="btn btn-primary my-3" role="button">
        Borrar
      </a>
    </>
  );
};
