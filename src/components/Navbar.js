// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-weight: bold;
    font-size: 18px;

    &:hover {
      color: #ddd;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/beverage">Beverage</Link>
      <Link to="/farming">Farming</Link>
      <Link to="/granger">Granger</Link>
      <Link to="/cooking">Cooking</Link>
      <Link to="/grilling">Grilling</Link>
      <Link to="/woodworking">Woodworking</Link>
      <Link to="/ceramicist">Ceramicist</Link>
      <Link to="/textiler">Textiler</Link>
    </StyledNavbar>
  );
};

export default Navbar;
