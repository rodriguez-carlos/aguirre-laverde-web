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
    height: 150px;
    flex: 1;

    @media (min-width: 650px) {
        height: 221px;
        margin: 0 40px;
    }
`;

const MenuContainer = styled.nav`
    display: flex;
    flex: 0 1 auto;
    z-index: 1;

    @media (min-width: 960px) {
        flex: 3;
    }
`;

const MenuListContainer = styled.div`
    display: none;
    flex: 1;

    @media (min-width: 960px) {
        display: flex;
    }
`;

const MenuButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #888;
    background-color: transparent;
    font-size: 26px;
    margin-right: 40px;
    padding: 0;

    @media (min-width: 960px) {
        display: none;
    }
`;

const MenuDrawer = styled.div`
    position: absolute;
    top: 150px;
    right: 0;
    width: 100vw;
    height: ${props => props.isExpanded ? '230px' : 0};
    transition: 0.5s;
    border-top: ${props => props.isExpanded ? '2px' : 0} solid #888;
    background-color: #D8DBDB;
    z-index: 99;
    overflow: hidden;

    @media (min-width: 650px) {
        top: 221px;
    }
`;

const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    list-style: none;
    justify-content: flex-end;
    color: #3A4948;
    font-size: 24px;
    padding-inline-start: 0;

    @media (min-width: 960px) {
        flex-direction: row;
        margin-right: 40px;
    }

    @media (min-width: 1240px) {
        font-size: 30px;
    }
`;

const MenuItemLink = styled(Link)`
    color: #3A4948;
    text-decoration: none;
    margin: 15px 30px;
    display: block;

    @media (min-width: 960px) {
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