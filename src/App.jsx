import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Workspaces from "./pages/Workspaces/Workspaces";
import Categories from "./pages/Categories/Categories";
import Details from "./pages/Details/Details";
import Booking from "./pages/Booking/Booking";
import Post from "./pages/Post/Post";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AccountTypeLayout from "./components/AccountTypeLayout/AccountTypeLayout";
import AgentAccount from "./pages/AgentAccount/AgentAccount";
import DeveloperAccount from "./pages/DeveloperAccount/DeveloperAccount";
import LandlordAccount from "./pages/LandlordAccount/LandlordAccount";
import IndividualAccount from "./pages/IndividualAccount/IndividualAccount";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";  
import Dashboard from "./pages/Dashboard/Dashboard";                        
import Profile from "./pages/Profile/Profile";                              
import Contacts from "./pages/Contacts/Contacts";                          
import Properties from "./pages/Properties/Properties";               
import Calendar from "./pages/Calendar/Calendar";                       
import Inbox from "./pages/Inbox/Inbox";                                   
import Notifications from "./pages/Notifications/Notifications";          
import Settings from "./pages/Settings/Settings";                          
import Logout from "./pages/Logout/Logout";                               
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/workspaces',
        element: <Workspaces />,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
      {
        path: '/details',
        element: <Details />,
      },
      {
        path: '/booking',
        element: <Booking />,
      },
      {
        path: '/post',
        element: <Post />,
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
    element: <AuthLayout />,
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
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
