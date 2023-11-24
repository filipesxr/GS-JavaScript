import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Rotas
import App from './App.jsx';
import Login from "./Routes/Login/Login.jsx";
import Home from "./Routes/Home/Home.jsx";
import Error404 from './Routes/Error404/Error404.jsx';

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <App />,
    "errorElement": <Error404 />,
    "children":[
      {
        "path": "/",
        "element": <Login />
      },
      {
        "path": "/Home",
        "element": <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
