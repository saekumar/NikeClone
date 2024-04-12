import React, { useState } from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-white-400 shadow-lg ">
      <nav className="flex justify-between items-center max-contaier">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <button onClick={toggleMenu}>
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </button>
          <ul
            className={`flex flex-col absolute rounded-sm shadow-lg bg-white top-full gap-3  right-0 p-4 transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            {navLinks.map((item) => (
              <li key={item.label} className="mb-2">
                <a
                  href={item.href}
                  className="font-montserat leading-normal text-lg text-slate-gray block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav
