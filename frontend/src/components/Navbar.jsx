import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../redux/slices/authSlice";
import { signOut } from "../admin/auth";

const Navbar = () => {
  const isSignedIn = useSelector(state=>state.auth.isSignedIn);
  const dispatch = useDispatch();
  
  const logoutUser = async ()=> {
    await signOut();
    return dispatch(logout())
  } 

  return (
    <div className="bg-blue-900 text-white w-full fixed top-0 p-4 flex flex-col lg:flex-row justify-between items-center z-10">
    <div className="flex flex-row gap-3 items-center">
      <h1>Event App</h1>
    </div>
    <nav>
      <ul className="flex flex-col gap-3 lg:flex-row">
        <li><Link to="dashboard" >Dashboard</Link></li>
        <li>{!isSignedIn ? <button>Login</button> : <button onClick={logoutUser}>Logout</button>}</li>
      </ul>
    </nav>
  </div>

  )
}

export default Navbar