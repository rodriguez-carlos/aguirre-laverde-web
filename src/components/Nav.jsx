import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from '@emotion/styled';
import logo from "../static/DEFINITIVOS-06.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useServices } from '../context';

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
    
    @media (min-width: 960px) {
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
    overflow: ${props => props.isExpanded ? 'visible' : 'hidden'};

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

const MenuItem = styled.li`
    position: relative;

    :nth-of-type(2) {
        z-index: 2;
    }
`;

const MenuItemLink = styled(HashLink)`
    color: #3A4948;
    text-decoration: none;
    margin: 15px 30px;
    display: block;
    transition: 0.5s;

    :hover {
        opacity: 0.5;
    }

    @media (min-width: 960px) {
        margin: 0 30px;
        line-height: 2;
    }
`;

const MenuItemLinkDrawer = styled(MenuItemLink)`
    font-size: 16px;
    line-height: 18px;
    height: 45px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 100%;

    @media (min-width: 960px) {
        margin: 0;
    }
`;

const ServicesDrawer = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #D8DBDB;
    width: 100%;
    min-width: 280px;
    z-index: 101;
`;

const Nav = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isServicesExpanded, setIsServicesExpanded] = useState(false);
    const servicesData = useServices();

    const toggleMenu = () => setIsExpanded(!isExpanded);

    const renderMenu = (desktop) => (
        <Menu>
            <MenuItem>
                <MenuItemLink to="/conocenos">Conócenos</MenuItemLink>
            </MenuItem>
            {desktop && (
                <FontAwesomeIcon icon={faEllipsisVertical} color="#888" alt="Visual division on menu. No action" />
            )}

            <MenuItem
                onMouseOver={() => setIsServicesExpanded(true)}
                onMouseLeave={() => setIsServicesExpanded(false)}
            >
                <MenuItemLink to="/que-hacemos">
                    ¿Qué hacemos?
                </MenuItemLink>
                {isServicesExpanded && (
                    <ServicesDrawer>
                        {servicesData.map(service => (
                            <MenuItemLinkDrawer key={service.id}
                                to={`/que-hacemos#${service.attributes.nombre.replaceAll(" ", "-").toLowerCase()}`}>
                                    {service.attributes.nombre}
                            </MenuItemLinkDrawer>
                        ))}
                        <MenuItemLinkDrawer to="/que-hacemos#modelos-de-servicio">Modelos de Servicio</MenuItemLinkDrawer>
                    </ServicesDrawer>
                )}
            </MenuItem>
            {desktop && (
                <FontAwesomeIcon icon={faEllipsisVertical} color="#888" alt="Visual division on menu. No action" />
            )}

            <MenuItem>
                <MenuItemLink to="/contacto">Contáctanos</MenuItemLink>
            </MenuItem>
        </Menu>
    )

    return (
        <Header>
            <Link to="/">
                <Logo src={logo} alt="" />
            </Link>
            <MenuContainer>
                <MenuListContainer>
                    {renderMenu(true)}
                </MenuListContainer>
                <MenuButton onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faEllipsisVertical} color="#888" alt="Toggle menu" />
                </MenuButton>
                <MenuDrawer isExpanded={isExpanded}>
                    {renderMenu()}
                </MenuDrawer>
            </MenuContainer>
        </Header>
    );
}

export default Nav;