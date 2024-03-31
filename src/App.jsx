import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Workspaces from "./pages/Workspaces/Workspaces";
import Categories from "./pages/Categories/Categories";
import Details from "./pages/Details/Details";
import Booking from "./pages/Booking/Booking";
import Post from "./pages/Post/Post";
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"

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
    path: '/auth',
    element: <AuthLayout/>,
    children: [
      {
        path: 'signup',
        element: <Signup/>
        
      },
      {
        path: 'login',
        element: <Login/>,
      },
    ],
  },
  
]);



function App(){

  return(
    <RouterProvider router={router}/>
  )
}

export default App;