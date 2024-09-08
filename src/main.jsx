import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import App from './routes/App'
import './index.css'
import Repertoire from './routes/Repertoire'
import Pricing from './routes/Pricing'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/repertoire', element: <Repertoire />},
  {path: '/pricing', element: <Pricing />}
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
