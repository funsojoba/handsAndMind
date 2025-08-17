import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import GiveHelp from './pages/GiveHelp/index.jsx'
import Chapters from './pages/Chapters/index.jsx'
import Program from './pages/Program/index.jsx'
import Workshops from './pages/Workshops/index.jsx'
import Events from './pages/Events/index.jsx'
import Volunteer from './pages/Volunteer/index.jsx'
import Community from './pages/Community/index.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/give-help",
    element: <GiveHelp />
  },
  {
    path: "/chapters",
    element: <Chapters />
  },
  {
    path: "/programs",
    element: <Program />
  },
  {
    path: "/workshops",
    element: <Workshops />
  },
  {
    path: "/events",
    element: <Events />
  },
  {
    path: "/volunteer",
    element: <Volunteer />
  },
  {
    path: "/community",
    element: <Community />
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

