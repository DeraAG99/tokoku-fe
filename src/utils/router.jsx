import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard"
import Kategori from "../pages/admin/Kategori";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
        
    },
    {
        path: "/kategori",
        element: <Kategori/>
    }
])