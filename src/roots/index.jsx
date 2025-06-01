import React from "react";
import {createRoot} from 'react-dom/client';
import Main from "./Main";
import "../css/main.scss"
import "../css/category.scss"
import "../css/screen.scss"
import "../css/colors.scss"
import "../css/print.scss"

createRoot(document.getElementById('root')).render(<Main/>)
