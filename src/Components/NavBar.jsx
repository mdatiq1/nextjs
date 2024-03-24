import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
 <img src="https://t4.ftcdn.net/jpg/05/23/15/59/360_F_523155949_3LoWLHYWFh9kufJmoXMeI8D6afaa8qFH.jpg" className="w-[60px] h-[60px] pt-1 rounded-full" alt="" />            <Link href="/" passHref>
             
              {/* <span className="text-white text-xl font-bold">Logo</span> */}
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                <NavItem href="/dashboard" handleSetActiveLink={handleSetActiveLink} activeLink={activeLink}>Home</NavItem>
                <NavItem href="/about" handleSetActiveLink={handleSetActiveLink} activeLink={activeLink}>About</NavItem>
                <NavItem href="/contact" handleSetActiveLink={handleSetActiveLink} activeLink={activeLink}>Contact</NavItem>
              </ul>
              <div className="relative mt-1 h-0.5">
                <div
                  className="absolute top-0 left-0 bg-white transition-all duration-300 ease-in-out"
                  style={{
                    width: activeLink === '' ? '0' : `${document.getElementById(activeLink)?.offsetWidth}px`,
                    transform: `translateX(${activeLink === '' ? '0' : document.getElementById(activeLink)?.offsetLeft}px)`
                  }}
                />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
                <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3 absolute bg-gray-600 w-[100vw]">
          <ul className="flex flex-col space-y-4">
            <NavItem href="/dashboard" handleSetActiveLink={handleSetActiveLink} activeLink={activeLink}>Home</NavItem>
            <NavItem href="/about" handleSetActiveLink={handleSetActiveLink} activeLink={activeLink}>About</NavItem>
            <NavItem href="/contact" handleSetActiveLink={handleSetActiveLink} activeLink={activeLink}>Contact</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, children, handleSetActiveLink, activeLink }) => (
  <li>
    <Link href={href} passHref>
      <span
        className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeLink === href ? 'bg-gray-700 text-white' : ''}`}
        onClick={() => handleSetActiveLink(href)}
      >
        {children}
      </span>
    </Link>
  </li>
);

export default Navbar;
