import React from 'react';
import '../styles/_nav.css';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import logo from "../static/DEFINITIVOS-06.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const LogoContainer = styled.div`
    height: 100%;
`;

const Logo = styled.img`
    height: 100%;
`;

const Nav = () => {
    return (
        <header>
            <nav>
                <LogoContainer>
                    <Link to="/">
                        <Logo src={logo} alt="" />
                    </Link>
                </LogoContainer>
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