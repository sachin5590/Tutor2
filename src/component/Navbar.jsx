import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../action/Action";

const Header = () => {
  const dispatch= useDispatch();
  const navigate = useNavigate();   
  const state1 = useSelector((state)=>state);
   
  const logout1 = ()=>{
    dispatch(logout())
    navigate("/")
  }

  return (
    <header className="text-gray-600 body-font">
       {state1 ? (
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">MOOD</span>
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              className="mr-5 hover:text-gray-900 cursor-pointer"
              to="/home"
            >
              Home
            </Link>

            <Link
              className="mr-5 hover:text-gray-900 cursor-pointer"
              to="/form"
            >
              Form
            </Link>
            <Link
              className="mr-5 hover:text-gray-900 cursor-pointer"
               onClick={logout1}
              to="/"
            >
              Logout 
            </Link>
           
          </nav>
        </div>
      ) : (
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">MOOD</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
              className="mr-5 hover:text-gray-900 cursor-pointer"
              to="/login"
            >
              Login
            </Link>
            <Link className="mr-5 hover:text-gray-900 cursor-pointer" to="/">
              Signup
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

{
  /* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
 
  <span className="ml-3 text-xl">MOOD</span>
</a>

<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
  <Link className="mr-5 hover:text-gray-900 cursor-pointer" to="/home">Home</Link>
  <Link className="mr-5 hover:text-gray-900 cursor-pointer" to="/login">Login</Link>
  <Link className="mr-5 hover:text-gray-900 cursor-pointer" to="/">Signup</Link>
  <Link className="mr-5 hover:text-gray-900 cursor-pointer" to="/form">Form</Link>
  
</nav>

</div> */
}
