import {Outlet, RouterProvider, createBrowserRouter, redirect} from 'react-router-dom';
import Navbar from '../components/Navbar';
import LoginPage from '../pages/auth/Login';
import Dashboard from '../pages/dashboard';
import AddEvent from '../pages/event/AddEvent';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import ViewEvent from '../pages/event/ViewEvent';
import EditEvent from '../pages/event/EditEvent';
import Explore from '../pages/event/Explore';
import Nearby from '../pages/event/Nearby';
const NavbarWrapper = () => {
    return (
      <div>
          <main >

              <Outlet />
          </main>
      </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarWrapper />,
        children: [
            {
                path: "/",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Signup />
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/event/book",
                element: <AddEvent />
            },
            {
                path: "/event/:id",
                element: <ViewEvent />
            },
            {
                path: "/event/edit/:id",
                element: <EditEvent />
            },
            {
                path: "/event/explore",
                element: <Explore />
            },
            {
                path: "/event/nearby",
                element: <Nearby />
            }

        ]
    }
])

export default router;