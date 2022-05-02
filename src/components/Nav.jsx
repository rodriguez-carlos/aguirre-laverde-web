import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import logo from "../static/DEFINITIVOS-06.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const Header = styled.header`
    width: 100%;
    background-color: #D8DBDB;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    height: 165px;
    flex: 1;

    @media (min-width: 650px) {
        height: 221px;
        margin: 0 40px;
    }
`;

const MenuContainer = styled.nav`
    display: flex;
    padding: 0 40px;

    @media (min-width: 650px) {
        flex: 3;
    }
`;

const MenuListContainer = styled.div`
    display: none;
    flex: 1;

    @media (min-width: 650px) {
        display: flex;
    }
`;

const MenuButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #888;
    background-color: transparent;
    font-size: 26px;

    @media (min-width: 650px) {
        display: none;
    }
`;

const MenuDrawer = styled.div`
    position: absolute;
    top: 165px;
    right: 0;
    width: 100vw;
    height: ${props => props.isExpanded ? '300px' : 0};
    transition: 0.5s;
    border-top: ${props => props.isExpanded ? '2px' : 0} solid #888;
    background-color: #D8DBDB;
    z-index: 99;
    overflow: hidden;
`;

const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    list-style: none;
    justify-content: flex-end;
    margin-right: 40px;
    font-size: 30px;
    color: #3A4948;

    @media (min-width: 650px) {
        flex-direction: row;
    }
`;

const MenuItemLink = styled(Link)`
    color: #3A4948;
    text-decoration: none;
    margin: 30px 30px 0;
    display: block;

    @media (min-width: 650px) {
        margin: 0 30px;
    }
`;

const Nav = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => setIsExpanded(!isExpanded);

    const renderMenu = () => {
        return (
            <Menu>
                <li>
                    <MenuItemLink to="/conocenos">Conócenos</MenuItemLink>
                </li>
                <FontAwesomeIcon icon={faEllipsisVertical} color="#888" size="s" alt="Visual division on menu. No action" />

                <li>
                    <MenuItemLink to="/que-hacemos">¿Qué hacemos?</MenuItemLink>
                </li>
                <FontAwesomeIcon icon={faEllipsisVertical} color="#888" size="s" alt="Visual division on menu. No action" />

                <li>
                    <MenuItemLink to="/contacto">Contáctanos</MenuItemLink>
                </li>
            </Menu>
        );
    }

    return (
        <Header>
            <Link to="/">
                <Logo src={logo} alt="" />
            </Link>
            <MenuContainer>
                <MenuListContainer>
                    <Menu>
                        <li>
                            <MenuItemLink to="/conocenos">Conócenos</MenuItemLink>
                        </li>
                        <FontAwesomeIcon icon={faEllipsisVertical} color="#888" size="s" alt="Visual division on menu. No action" />

                        <li>
                            <MenuItemLink to="/que-hacemos">¿Qué hacemos?</MenuItemLink>
                        </li>
                        <FontAwesomeIcon icon={faEllipsisVertical} color="#888" size="s" alt="Visual division on menu. No action" />

                        <li>
                            <MenuItemLink to="/contacto">Contáctanos</MenuItemLink>
                        </li>
                    </Menu>
                </MenuListContainer>
                <MenuButton onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faEllipsisVertical} color="#888" size="s" alt="Toggle menu" />
                </MenuButton>
                <MenuDrawer isExpanded={isExpanded}>
                    <Menu>
                        <li>
                            <MenuItemLink to="/conocenos">Conócenos</MenuItemLink>
                        </li>
                        <li>
                            <MenuItemLink to="/que-hacemos">¿Qué hacemos?</MenuItemLink>
                        </li>
                        <li>
                            <MenuItemLink to="/contacto">Contáctanos</MenuItemLink>
                        </li>
                    </Menu>
                </MenuDrawer>
            </MenuContainer>
        </Header>
    );
}

export default Nav;