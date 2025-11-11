import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

function Navbar(){
    return (
        <nav className='navbar'>
            <ul className = 'links'>
                <li className= 'link'>Categorias</li>
                <li className= 'link'>Contacto</li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Navbar