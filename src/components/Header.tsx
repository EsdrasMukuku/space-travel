import  { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/assets/shared/logo.svg';

const Header = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState({
    home: false,
    destination: false,
    crew: false,
    technology: false,
  });

  const handleClick = (page: string) => {
    setIsActive({
      home: false,
      destination: false,
      crew: false,
      technology: false,
      [page]: true,
    });
  };

  useEffect(() => {
    // Set the active state based on the current location
    const path = location.pathname;
    if (path === '/' || path === '/home') {
      setIsActive({ home: true, destination: false, crew: false, technology: false });
    } else if (path === '/Destination') {
      setIsActive({ home: false, destination: true, crew: false, technology: false });
    } else if (path === '/Crew') {
      setIsActive({ home: false, destination: false, crew: true, technology: false });
    } else if (path === '/Technology') {
      setIsActive({ home: false, destination: false, crew: false, technology: true });
    }
  }, [location.pathname]);

  return (
    <header>
      <nav className="border flex justify-between items-center relative w-full">
        <div>
          <NavLink to='/' onClick={() => handleClick('home')}>
            <img src={logo} alt="Site logo" className="w-14 h-14" />
          </NavLink>
        </div>

        <ul className="text-white flex gap-4 backdrop-blur-lg bg-white/10 p-7 pl-16 pr-20">
          <li>
            <NavLink
              
              to='/'
              className={`py-7 mx-5 hover:border-b-2 ${isActive.home ? 'border-b-4' : ''} ease duration-300`}
              onClick={() => handleClick('home')}
            >
              <span className="font-bold mr-2">00</span>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Destination'
              className={`py-7 mx-5 hover:border-b-2 ${isActive.destination ? 'border-b-4' : ''} ease duration-300`}
              onClick={() => handleClick('destination')}
            >
              <span className="font-bold mr-2">01</span>
              DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Crew'
              className={`py-7 mx-5 hover:border-b-2 ${isActive.crew ? 'border-b-4' : ''} ease duration-300`}
              onClick={() => handleClick('crew')}
            >
              <span className="font-bold mr-2">03</span>
              CREW
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Technology'
              className={`py-7 mx-5 hover:border-b-2 ${isActive.technology ? 'border-b-4' : ''} ease duration-300`}
              onClick={() => handleClick('technology')}
            >
              <span className="font-bold mr-2">04</span>
              TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className='border border-gray-500 w-[350px] absolute ml-36 mt-[-39px]'></div>
    </header>
  );
};

export default Header;
