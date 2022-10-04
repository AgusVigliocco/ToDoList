import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import { CounterApp } from "./01-useEstate/CounterApp";
// import { CounterWithCustomHook } from "./01-useEstate/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook/> */}
    {/* <SimpleForm /> */}
    <FormWithCustomHook />
  </React.StrictMode>
);
