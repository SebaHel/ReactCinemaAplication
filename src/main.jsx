import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import App from './routes/App'
import './index.css'
import Repertoire from './routes/Repertoire'
import Pricing from './routes/Pricing'
import FilmInfo from './routes/FilmInfo'
import Reservation from './routes/Reservation'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/repertoire/:Id', element: <Repertoire />},
  {path: '/pricing', element: <Pricing />},
  {path: '/film/:Id', element: <FilmInfo />},
  {path: 'film/reservation/:Id', element: <Reservation />}
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
