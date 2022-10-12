import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import { CounterApp } from "./01-useEstate/CounterApp";
// import { CounterWithCustomHook } from "./01-useEstate/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { CustomCharacters } from "./03-examples/CustomCharacters";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import Memorize from './06-memos/Memorize';
// import { MemoHook } from "./06-memos/memoHook";
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer'

import { TodoApp } from './08-useReducer/TodoApp';


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TodoApp />
    </React.StrictMode>
);
