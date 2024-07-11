import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Workspaces from "./pages/Workspaces/Workspaces";
import Categories from "./pages/Categories/Categories";
import Details from "./pages/Details/Details";
import Booking from "./pages/Booking/Booking";
import Post from "./pages/Post/Post";

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
]);


function App(){

  return(
    <RouterProvider router={router}/>
  )
}

export default App;