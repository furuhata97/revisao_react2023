import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from './components/Header/Header.tsx'

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }

export function App() {
  return (
    <div className='container'>
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  )
}
