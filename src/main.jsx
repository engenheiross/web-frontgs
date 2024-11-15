import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import {register} from 'swiper/element-bundle'
import Home from './routes/Home/Home.jsx'
import Login from './routes/Login/Login.jsx'
import Sobre from './routes/Sobre/Sobre.jsx'
import Solução from './routes/Solução/Solucao.jsx'
import Error from './routes/Error/Error.jsx'
import Cadastrar from './routes/Cadastrar/Cadastrar.jsx'
import Contato from './routes/Contato/Contato.jsx'
import './style.css'

register();
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LoginSucesso from './routes/LoginSucesso/LoginSucesso.jsx'

const router = createBrowserRouter([
  {
    // Elementos pai
    path: '/',
    element: <App />,
    errorElement: <Error />,
    
    // Elementos filho
    children: [
      { path: '', element: <Home/> }, 
      { path: 'login', element: <Login/> },
      { path: 'cadastrar', element: <Cadastrar/> },
      { path: 'sobre', element: <Sobre/> }, 
      { path: 'solucao', element: <Solução/> }, 
      {path: 'loginsucesso', element: <LoginSucesso/>},
      {path: 'contato', element:<Contato/>}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
