import './navbar.css'
import AccountBtn from '../AccountBtn/AccountBtn'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const strongLink = ' link-strong'
    const activeLink = 'nav-list_link nav-list_link-active';
	const passiveLink = 'nav-list_link';
    return(       
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo"><strong>Olympiad Games</strong></NavLink>
                    <AccountBtn/>   
                    <ul className="nav-list">
                        <li className="nav-list_item"><NavLink to="/square" className={({ isActive }) => `${isActive ? activeLink : passiveLink} ${strongLink}`}>Квадрат</NavLink></li>
                        <li className="nav-list_item"><NavLink to="/carousel" className={({ isActive }) => `${isActive ? activeLink : passiveLink} ${strongLink}`}>Карусель</NavLink></li>
                        <li className="nav-list_item"><NavLink to="/game3" className={({ isActive }) => `${isActive ? activeLink : passiveLink} ${strongLink}`}>Игра3</NavLink></li>
                        <li className="nav-list_item"><NavLink to="/game4" className={({ isActive }) => `${isActive ? activeLink : passiveLink} ${strongLink}`}>Игра4</NavLink></li>
                        <li className="nav-list_item"><NavLink to="/rating" className={({ isActive }) => isActive ? activeLink : passiveLink}>Рейтинг</NavLink></li>
                        <li className="nav-list_item"><NavLink to="/adminpanel" className={({ isActive }) => isActive ? activeLink : passiveLink}>Админ-панель</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;