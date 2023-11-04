import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import createdRoute from './Route/Route'
import AuthProvider from './Provider/AuthProvider'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <AuthProvider>
        <RouterProvider router={createdRoute}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
