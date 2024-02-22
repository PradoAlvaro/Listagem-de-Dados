import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import { App } from './app';
import './index.css'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >    
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);