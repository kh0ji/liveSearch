import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import * as App from "./App.jsx"
import "./index.css"

ReactDOM.render(
<BrowserRouter >
<App.default />
</BrowserRouter>,document.getElementById('root'))