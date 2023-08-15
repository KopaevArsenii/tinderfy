import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import ErrorRoutePage from './pages/ErrorRoutePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='text-red-500'>Empty page!</div>,
    errorElement: <ErrorRoutePage />
  },
  {
    path: "/z",
    element: <div>Z page!</div>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router}/>
);
