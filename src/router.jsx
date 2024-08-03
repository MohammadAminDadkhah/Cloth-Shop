import {createHashRouter} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./page/Home/Home.jsx";

export const router = createHashRouter([
    {
        element: <Layout />,
        children: [
            {
                element: <Home />,
                path: '/'
            }
        ]
    }
])