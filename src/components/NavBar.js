import '../img/logo.png'
function NavBar() {
    return ( 
        <header>
            <div className="nav-bar">
                <h2>etiquetta</h2>
                <ul className="nav-links">
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="">Productos</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                    <li>
                        <a href=""><i class="fas fa-shopping-cart"></i></a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default NavBar;