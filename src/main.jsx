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
import PrivacyPolicy from './pages/Privacy/index.jsx'
import DonationPage from './pages/Donation/index.jsx'

import AdminAuth from './pages/Admin/Auth/index.jsx'
import AdminDashboard from "./pages/Admin/Dashboard/index.jsx"
import SuccessPayment from './pages/Donation/SuccessPayment.jsx'
import GetHelpPage from './pages/GetHelp/index.jsx'
import SupportRequestSuccess from './pages/SupportSuccess/index.jsx'
import HeartsHomeReliefSupport from './pages/HeartsHomeReliefSupport/index.jsx'
import ReflectRenewWorkshops from './pages/ReflectRenewWorkshops/index.jsx'
import HeartsBrunchSeries from './pages/HeartsBrunchSeries/index.jsx'
import CoachingMentorshipProgram from './pages/CoachingMentorshipProgram/index.jsx'
import CaregiverCircle from './pages/CaregiverCircle/index.jsx'

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
    path:"*",
    element:<Home/>
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/donate",
    element: <DonationPage />
  },
  {
    path: "/donate/success",
    element: <SuccessPayment />
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
    path: "/get-help",
    element: <GetHelpPage />
  },
  {
    path: "/community",
    element: <Community />
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />
  },
  {
    path: "/admin/auth",
    element: <AdminAuth/>
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard/>
  },
  {
    path: "/support-success",
    element: <SupportRequestSuccess/>
  },
  {
    path: "/hearts-home-relief-support",
    element: <HeartsHomeReliefSupport />
  },
  {
    path: "/reflect-renew-workshops",
    element: <ReflectRenewWorkshops />
  },
  {
    path: "/hearts-brunch-series",
    element: <HeartsBrunchSeries />
  },
  {
    path: "/coaching-mentorship-program",
    element: <CoachingMentorshipProgram />
  },
  {
    path: "/caregiver-circle",
    element: <CaregiverCircle />
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

