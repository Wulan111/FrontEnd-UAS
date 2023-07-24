import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

function Navbar() {
  const [jwt, setJwt] = useState([]);
  const navigate = useNavigate();


  function handleClick() {
    AuthService.logout();
    navigate('/login');
    window.location.reload();
  }

  const getJwt = () => {
    setJwt(AuthService.getCurrentUser);
  }
  useEffect(() => {
    getJwt();
  }, []);

  return (
    <>
      <div className="w-full h-16 flex items-center px-14 justify-between" style={{ backgroundColor: '#682f01' }}>
      <Link to={"/"} className="text-3xl font-semibold font-Montesarrat" style={{ color: 'orange' }}>
        ART GALLERY
      </Link> 

      <div className="flex">
        {jwt ? <button onClick={handleClick} className="hover:bg-orange-700 hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg font-bold py-2 px-2" 
        style={{ backgroundColor: 'orange', color: 'white' }}>
        LogOut </button> : <Link to={"/login"} className="hover:bg-orange-700 hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg font-bold py-2 px-2" 
        style={{ backgroundColor: 'orange', color: 'white' }}>LogIn</Link> }
        </div>
      </div>
    </>
  )
}

export default Navbar;



