import { NavLink, useLocation } from 'react-router-dom'
import './navbar.css'

const Navbar = ({ name }) => {
  const { pathname } = useLocation()
  console.log(pathname)

  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white" exact to="/">{ name }</NavLink>
        
        {/* TODO: Crear rutas de login y registro */}
        <ul className='navbar-nav d-flex flex-row gap-4'>
          <li className='nav-item'>
            <NavLink
              className={( { isActive } ) => isActive ? 'nav-link active' : 'nav-link' }
              exact to="/"
            >
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/register'
              className={`nav-link ${ pathname === '/register' ? 'active' : '' }`}>
              Registro
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/login'
              className={( { isActive } ) => isActive ? 'nav-link active' : 'nav-link' }>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`nav-link ${ pathname === '/cart' ? 'active' : '' }`}
              to='/cart'
            >
              Cart
            </NavLink>
          </li>
        </ul>
        
      </div>
    </nav>
  )
}

export default Navbar
