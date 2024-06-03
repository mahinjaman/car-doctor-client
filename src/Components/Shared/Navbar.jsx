import React, { useContext } from 'react';
import Logo from '../../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  // Handle LogOut 
  const handleSignOut = () =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be log out this site",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, LogOut!'
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
        .then(() => {
          Swal.fire(
            "Logged Outed!",
            "Your account has been successfully logged out",
            "success"
          );
        })
      }
    })
  }
    // Nav items

    const navItems = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        
        {
          user && <li><NavLink to={'/bookings'}>Bookings</NavLink></li>
        }
        {
          user ? <button className='flex items-center' onClick={handleSignOut}>LogOut</button> :<li><NavLink to={'/login'}>LogIn</NavLink></li>
        }

    </>


    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to={"/"}>
            <img className='w-16 lg:w-20' src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button className='text-lg font-semibold py-2 px-5 border border-orange-500 rounded-md text-orange-500'>Appointment</button>
        </div>
      </div>
    );
};

export default Navbar;