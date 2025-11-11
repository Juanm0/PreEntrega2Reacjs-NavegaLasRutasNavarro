import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='navbar-container'>
      <img
        className='navbar-icon' src='./src/assets/nike-logo.png' alt='Logo'/>
      <nav className='navbar'>
        <ul className='links'>
          <li className='link'>
            <NavLink to="/">Inicio</NavLink>
          </li>

          <li className='link dropdown'>
            <button className='dropdown-btn' onClick={toggleMenu}>
              Categorias
            </button>
            {menuOpen && (
              <ul className='dropdown-menu'>
                <li><NavLink to="/">Todos</NavLink></li>
                <li><NavLink to="/categoria/remeras">Remeras</NavLink></li>
                <li><NavLink to="/categoria/gorras">Gorras</NavLink></li>
                <li><NavLink to="/categoria/zapatillas">Zapatillas</NavLink></li>
              </ul>
            )}
          </li>

          <li className='link'>
            <NavLink to="/contact">Contactos</NavLink>
          </li>
        </ul>

        <CartWidget />
      </nav>
    </div>
  )
}

export default Navbar
