import React from 'react';
import '../styles/_nav.css';
import logo from "../static/DEFINITIVOS-06.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
    return (
        <header>
            <nav>
                <div className='nav-left-side'>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div className='nav-right-side'>
                    <ul>
                        <li><Link to="/conocenos">Conócenos</Link> </li>
                        <li><FontAwesomeIcon icon={faEllipsisVertical} alt="Visual division on menu. No action" /></li>
                        <li><Link to="/que-hacemos">¿Qué hacemos?</Link></li>
                        <li><FontAwesomeIcon icon={faEllipsisVertical} alt="Visual division on menu. No action" /></li>
                        <li><Link to="/contacto">Contáctanos</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;