import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from './components/Header/Header.tsx'

export function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  )
}
