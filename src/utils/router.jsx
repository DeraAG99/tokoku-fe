import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Kategori from "../pages/admin/Kategori";
import Pengguna from "../pages/admin/Pengguna";
import Pesanan from "../pages/admin/Pesanan";
import Produk from "../pages/admin/Produk";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/kategori",
    element: <Kategori />,
  },
  {
    path: "/admin/pengguna",
    element: <Pengguna />,
  },
  {
    path: "/admin/pesanan",
    element: <Pesanan />,
  },
  {
    path: "/admin/produk",
    element: <Produk />,
  },
]);
