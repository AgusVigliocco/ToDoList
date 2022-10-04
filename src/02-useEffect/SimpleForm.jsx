import { useEffect, useState } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Agustin",
    email: "agus@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("useEffec llamado!");
  }, []);

  useEffect(() => {
    // console.log("Form CAMBIO!");
  }, [formState]);

  useEffect(() => {
    // console.log("email CAMBIO!");
  }, [email]);

  useEffect(() => {
    // console.log("username CAMBIO!");
  }, [username]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      {username === "Agustin2" && <Message />}

      <input
        type="text"
        className="form-control"
        placeholder="E-Mail"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
