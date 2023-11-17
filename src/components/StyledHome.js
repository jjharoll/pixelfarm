// StyledHome.js
import styled from 'styled-components';

const StyledHome = styled.div`
  background-color: #e3ff37; /* Fondo amarillo */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .logo {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  .content {
    padding: 20px;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  .category-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5em;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.2em;
      margin-bottom: 5px;
    }
  }
`;

export default StyledHome;
