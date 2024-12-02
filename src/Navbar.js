import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Logo>MiPortafolio</Logo>
      <Menu>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/projects">Proyectos</NavLink>
        <NavLink to="/about">Sobre mí</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #1c1c1c;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 24px;
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    color: #00e0ff;
  }
`;

export default Navbar;
