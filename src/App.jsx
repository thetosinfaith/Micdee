import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./layouts/Homepage/Homepage";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Details from "./pages/Details/Details";
import Booking from "./pages/Booking/Booking";
import Post from "./pages/Post/Post";
import Authentication from "./RegisterAuth/Authentication/Authentication";
import Login from "./RegisterAuth/Login/Login";
import Signup from "./RegisterAuth/Signup/Signup";
import AccountTypeLayout from "./layouts/Account/Account";
import AgentAccount from "./pages/AgentAccount/AgentAccount";
import DeveloperAccount from "./pages/DeveloperAccount/DeveloperAccount";
import LandlordAccount from "./pages/LandlordAccount/LandlordAccount";
import IndividualAccount from "./pages/IndividualAccount/IndividualAccount";
import DashboardLayout from "./layouts/Dashboard/Dashboard";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Contacts from "./pages/Contacts/Contacts";
import Properties from "./pages/Properties/Properties";
import Calendar from "./pages/Calendar/Calendar";
import Inbox from "./pages/Inbox/Inbox";
import Notifications from "./pages/Notifications/Notifications";
import Settings from "./pages/Settings/Settings";
import Logout from "./pages/Logout/Logout";
import NotFound from "./pages/PageNotFound/NotFound"; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'details',
        element: <Details />,
      },
      {
        path: 'booking',
        element: <Booking />,
      },
    ],
  },
  {
    path: '/choose-account',
    element: <AccountTypeLayout />,
    children: [
      {
        path: 'agent',
        element: <AgentAccount />,
      },
      {
        path: 'developer',
        element: <DeveloperAccount />,
      },
      {
        path: 'individual',
        element: <IndividualAccount />,
      },
      {
        path: 'landlord',
        element: <LandlordAccount />,
      },
    ],
  },
  {
    path: '/auth',
    element: <Authentication />,
    children: [
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'post',
        element: <Post />, 
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'properties',
        element: <Properties />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'inbox',
        element: <Inbox />,
      },
      {
        path: 'notifications',
        element: <Notifications />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
    ],
  },
  {
    path: '*', 
    element: <NotFound />, 
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
