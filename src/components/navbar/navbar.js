import './navbar.scss'
//import '../img/logo.png'
import {CartWidget} from '../cart-widget/cart-widget'

export const NavBar = () => {
    return ( 
        <header>
            <div className="nav-bar">
                <h2>etiquetta</h2>
                <ul className="nav-links">
                    <li className="links">
                        <a href="">Inicio</a>
                    </li>
                    <li className="links">
                        <a href="">Productos</a>
                    </li>
                    <li className="links">
                        <a href="">Contacto</a>
                    </li>
                    <li className="links">
                        <CartWidget />
                    </li>
                </ul>
            </div>
        </header>
    )
}