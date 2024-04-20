import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Monsters from './pages/Monsters';
import AddMonster from './pages/AddMonster';
import Monster from './pages/Monster';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/monsters",
        element: <Monsters/>,
        children: [
          {
            path: "/monsters/:monstersId",
            element: <Monster />,
          },
        ],
      },
      {
        path: "/addmonster",
        element: <AddMonster/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
