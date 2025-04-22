import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const popIn = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;


export const BackgroundGradient = styled.div` 
  background: rgb(5, 5, 5);
  min-height: 100vh;
  padding: 20px;
  position: relative;
  overflow: hidden;
  background-image: url('/gytis-bukauskas-28vTSxwQG0s-unsplash.jpg');
  background-position: 30% 10%;
  background-size: contain;
  /* Pseudo-element for the dim overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(5, 5, 5, 0.7); /* Semi-transparent black overlay */
    z-index: 1; /* Ensure the overlay is above the background image */
  }
`;

/* export const BackgroundGradient = styled.div`
  background: linear-gradient(90deg, #d7a7ff, #a389d4);
  min-height: 100vh;
  padding: 20px;
`; */
export const Bg = styled.div`
background: rgb(5, 5, 5);
opacity: 100%;
`;

export const PageWrapper = styled.div`
  text-align: center;
  font-family: 'Arial', sans-serif;
  align-items: center;
  justify-content: center;
    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    pointer-events: none; /* Ensures the noise layer doesn't interfere with interactions */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.2; /* Adjust opacity for subtlety */
    z-index: 0; }
`;

export const Wrapper = styled.div`
  background-color: rgba(44, 37, 51, 0.17);
  background-image: url('/img-15.jpg');
  background-blend-mode: overlay;
  border: 1px solid white;
  background-size: cover;
  background-position: 20% 25%;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between; // Changed from center to space-between
  align-items: center;
  position: sticky;
  width: calc(100% - 40px);
  z-index: 1009;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 992px) {
    flex-wrap: wrap; // Allow wrapping on tablet
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 10px;
    width: calc(100% - 20px);
    justify-content: center; // Center on mobile
  }
`;


export const MainDiv = styled.div `
display: flex;
z-index: 100 ;
`;

export const Header = styled.h1`
  font-size: 50px;
  color: white;
  animation: ${slideIn} 1s ease-out;
  margin-left: -59px;
  z-index: 2;
`;


export const NavItemsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    &.desktop-nav {
      display: none;
    }
  }
`;

export const NavImage = styled.div`
  // background-image: url('/img-2.jpg');
  background-size: cover; /* Ensures the image covers the entire container */
  background-position: 70% 13%;
  background-repeat: no-repeat; /* Prevents the image from repeating */
  width: 50%; /* Set a specific width */
  height: 100px; /* Set a specific height */
  transition: transform 0.3s ease;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 80px; /* Adjust for smaller screens */
    height: 40px;
  }
`;

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(56, 8, 230, 0.3);
  height: 30px;
  width: fit-content;
  margin: 0 10px;

  &:last-child {
    margin-right: 20px;
  }

  &:hover {
    font-weight: 400;
    background-color: rgb(255, 255, 255);
    color: black;
    height: 30px;
    align-items: center;
    width: fit-content;
    padding: 5px 20px;
  }

`;




export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 80%;
  margin: 20px auto;
  padding: 20px 0;
  gap: 5px;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
    padding: 0;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  gap: 0px;
  transform: translateX(${(props) => props.translateX}px);
  transition: transform 0.5s ease;
  margin: 0 50px;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 0 20px; // Added margin to prevent image from touching edges
    gap: 10px;
  }
`;

export const CarouselImageContainer = styled.div`
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform-origin: center;
  cursor: pointer;

  @media (max-width: 768px) {
    gap: 20px;
    width: calc(100vw - 120px); /* Adjust width to account for margins and gaps */
    height: calc((100vw - 120px) * 0.75); /* Maintain aspect ratio */
    transform: scale(1) !important; // Disable scaling on mobile
    gap: 10px;
    border-radius: 10px; // Ensure border radius is applied consistently
  }

  ${props =>
    props.$isHovered &&
    css`
      @media (min-width: 769px) {
        transform: scale(1.07);
        z-index: 2;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }
    `}
  
  ${props =>
    !props.$isHovered &&
    css`
      @media (min-width: 769px) {
        transform: scale(0.9);
        opacity: 100%;
      }
    `}
`;


export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease; 
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.7);
  }

  &:hover {
    background: black;
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: 5px;
  }

  &.next {
    right: 5px;
  }
`;

export const GroupName = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin: 20px 0;
  animation: ${slideIn} 1s ease-out;
  font-family: 'DM Sans', sans-serif;
  position: relative;
  z-index: 2;
`;

export const Description = styled.p`
  color: white;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  z-index: 3;

  button {
    background: rgba(173, 173, 173, 0.2);;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1;
    justify-content: center;
    align-items: center;
    width: fit-content;
    position: relative; /* Ensure the button's layout is stable */
    min-width: 120px; /* Set a minimum width to prevent shifting */
    /* Add a pseudo-element for the hover effect */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: white;
      border-radius: 5px;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1; /* Place the pseudo-element behind the text */
    }

    &:hover {
      color: black;
      font-weight: 300; /* Light font weight on hover */
      transform: translateY(-2px);

      &::before {
        opacity: 1; /* Show the white background on hover */
      }
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;
  z-index: 10011;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  animation: ${slideIn} 0.3s ease;
  z-index: 1001;
`;

export const CarouselModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10111;
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselModalContent = styled.div`
  position: relative;
  background: transparent;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10111;

  /* Ensure the close button stays within the modal content */
  & > ${CloseButton} {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
    z-index: 1001;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease; // Add a smooth transition for hover effects
  }
    &:hover {
      transform: scale(1.1); // Slight zoom effect on hover  
  }
`;



export const FullSizeImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  border-radius: 10px;
  object-fit: contain; /* Ensure the full image is visible */
`;

export const Icon = styled.a`
  font-size: 1.2rem;
  color: black;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: gray;
    transform: translateY(-2px);
  }
`;

export const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  padding: 10px;
  margin-right: auto;
  align-items: right; // tried to move it to the right here
  z-index: 1010; // Increased z-index to stay on top of everything

  @media (max-width: 768px) {
    display: block;
    position: inherit; // Changed to fixed
    left: 100%;
    top: 5%; // Adjusted top position
    z-index: 1010;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 180px; /* Adjust based on header height */
    width: 65%;
    height: calc(100vh - 80px);
    background: rgba(5, 5, 5, 1.5);
    padding: 20px 60px;
    transform: translateY(-150%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    align-items: center;
    overflow-y: auto;
    margin: auto;
    border-radius: 10px;
    
    ${props => props.$isOpen && css`
      transform: translateY(0);
    `}

    /* noise/texture */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      opacity: 0.1;
      pointer-events: none;
    }
  }
`;

export const MobileNavItem = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 15px;
  border-radius: 8px;
  width: 100%;
  margin: 8px;
  text-align: center;
  background: rgba(173, 173, 173, 0.1);
  transform: scale(0.8);
  opacity: 0;
  animation: ${popIn} 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transition: all 0.2s ease;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }

  &:hover {
    background: rgba(255, 255, 255, 0.95);
    color: #000;
    transform: scale(1.02);
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 0.9rem;
  }
`;

// Booking card styles

// Update these specific styling components in your HomepageStyles.js file:

export const BookingsCard = styled.div`
  background: rgba(173, 173, 173, 0.1);
  border-radius: 5px;
  padding: 1rem;

  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  cursor: pointer;
  width: 100%;
  max-width: 600px; 
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2000;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  cursor: pointer;
  width: 80%;
  //max-width: 600px; 
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2000;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const BookingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const BookingTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: white;
`;

export const Underliner = styled.div `

border-bottom: 1px solid rgb(255, 255, 255);
margin: 20px;

`;

export const BookingDetails = styled(motion.div)`
  color: white;
  overflow: hidden;
  
  p {
    margin: 0.5rem 0;
  }
`;