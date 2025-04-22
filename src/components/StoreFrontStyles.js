// StoreFrontStyles.js

import styled from 'styled-components';

export const ProductsContainer = styled.div`

  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(rgba(3, 3, 3, 0.5), rgba(0, 32, 90, 0.7)),
              url('/store/backgrounds/img-10.jpg');
  background-size: contain;
  position: relative;
  z-index: 2;
  overflow-x: hidden; 


`;

export const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
  text-align: center;

  @media  (max-width: 720px) {
    font-size: 2rem;
    margin-bottom: 5px;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: 100%;
  box-sizing: border-box;

`;

export const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }

`;

export const ProductThumbnail = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
  position: relative;
  overflow: hidden;
`;

export const ProductDetails = styled.div`
  padding: 1.5rem;
  margin-top: 1px;
`;

export const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 0.5rem;
  color: #333;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  min-height: 10px;
`;

export const ColorOptions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const ColorSwatch = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid ${props => props.selected ? '#333' : 'transparent'};
  transition: all 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductPrice = styled.button`
  width: 100%;
  padding: 1rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #555;
  }
`;


export const ClickOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  text-align: center;
  position: relative;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 60vh;
  object-fit: contain;
`;

export const ModalNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  button {
    background: #333;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      background: #555;
    }
  }

  span {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
  }
`;


export const ProductThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;