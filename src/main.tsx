import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './globals.css';
import { HomePage } from './routes/HomePage.tsx';
import { ErrorPage } from './routes/ErrorPage.tsx';
import { SinglePost } from './routes/SinglePost.tsx';
import { NewPost } from './routes/NewPost.tsx';

// const api = axios.create({
//   baseURL: 'https://api.example.com',
//   headers: {
//     'Authorization': 'Bearer <seu-token-aqui>',
//     'Content-Type': 'application/json',
//   },
// });

// // Exemplo de solicitação GET
// api.get('/endpoint')
//   .then(response => {
//     // Manipular a resposta da API
//   })
//   .catch(error => {
//     // Tratar erros
//   });

// // Exemplo de solicitação POST
// api.post('/endpoint', { data })
//   .then(response => {
//     // Manipular a resposta da API
//   })
//   .catch(error => {
//     // Tratar erros
//   });

//Exemplo de rota privada
// const PrivateRoute = ({ element: Element }) => {
//   // Verifique aqui a autenticação do usuário
//   const isAuthenticated = true; // Exemplo: usuário sempre autenticado

//   // Se o usuário estiver autenticado, renderize o componente da rota
//   // Caso contrário, redirecione para a página de login
//   return isAuthenticated ? <Element /> : <Navigate to="/login" />;
// };

// const routes = [
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <HomePage />,
//       },
//       {
//         path: '/posts/:id',
//         element: <PrivateRoute element={<SinglePost />} />,
//       },
//       {
//         path: '/posts/create',
//         element: <PrivateRoute element={<NewPost />} />,
//       },
//     ],
//   },
// ];

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/posts/:id',
      element: <SinglePost />
    },
    {
      path: '/posts/create',
      element: <NewPost />
    }
  ]
}]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
