import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componants/Home.jsx';
import Login from './Componants/Login.jsx';
import Register from './Componants/Register.jsx';
import Root from './Componants/Root.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Orders from './Componants/Orders.jsx';
import PrivateRouter from './Routes/PrivateRouter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'order',
        element: <PrivateRouter><Orders></Orders></PrivateRouter>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
