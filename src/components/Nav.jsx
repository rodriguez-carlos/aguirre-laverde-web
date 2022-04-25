import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import logo from "../static/DEFINITIVOS-06.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const Header = styled.header`
    width: 100%;
    background-color: #D8DBDB;
    height: 221px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    height: 221px;
    margin: 0 40px;
    flex: 1;
`;

const MenuContainer = styled.nav`
    flex: 3;
    display: flex;
    padding: 0 10%;
`;

const Menu = styled.ul`
    display: flex;
    flex: 1;
    align-items: center;
    list-style: none;
    justify-content: space-evenly;
    font-size: 30px;
    color: #3A4948;

    @media (max-width: 550px) {
        .nav-right-side ul {
            display: none;
        }
    }
`;

const MenuItemLink = styled(Link)`
    color: #3A4948;
    text-decoration: none;
`;

const Nav = () => {
    return (
        <Header>
            <Link to="/">
                <Logo src={logo} alt="" />
            </Link>
            <MenuContainer>
                <Menu>
                    <li>
                        <MenuItemLink to="/conocenos">Conócenos</MenuItemLink>
                    </li>
                    <FontAwesomeIcon icon={faEllipsisVertical} alt="Visual division on menu. No action" />

                    <li>
                        <MenuItemLink to="/que-hacemos">¿Qué hacemos?</MenuItemLink>
                    </li>
                    <FontAwesomeIcon icon={faEllipsisVertical} alt="Visual division on menu. No action" />

                    <li>
                        <MenuItemLink to="/contacto">Contáctanos</MenuItemLink>
                    </li>
                </Menu>
            </MenuContainer>
        </Header>
    );
}

export default Nav;