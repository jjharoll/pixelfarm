// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import CardComponent from './CardComponent';
import StyledHome from './StyledHome';
import PixelEffect from './PixelEffect';
import Navbar from './Navbar';

const Home = () => {
  const categories = [
    { id: 1, title: 'Beverage Master', path: '/beverage' },
    { id: 2, title: 'Farming', path: '/farming' },
    { id: 3, title: 'Granger', path: '/granger' },
    { id: 4, title: 'Cooking', path: '/cooking' },
    { id: 5, title: 'Grilling', path: '/grilling' },
    { id: 6, title: 'Woodworking', path: '/woodworking' },
    { id: 7, title: 'Ceramicist', path: '/ceramicist' },
    { id: 8, title: 'Textiler', path: '/textiler' },
  ];

  return (
    <PixelEffect>
      <Navbar />
      <StyledHome>
        <img className="logo" src="logo.png" alt="Logo" />
        <div className="content">
          <h1>Welcome to Pixel!</h1>
          <div className="category-container">
            {categories.map((category) => (
              <Link to={category.path} key={category.id} style={{ textDecoration: 'none' }}>
                <CardComponent title={category.title} />
              </Link>
            ))}
          </div>
        </div>
      </StyledHome>
    </PixelEffect>
  );
};

export default Home;
