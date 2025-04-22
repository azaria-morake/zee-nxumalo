import styled from 'styled-components';

export const UpcomingGigsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Georgia', serif;
  line-height: 1.6;
  color: #202122;
  overflow: visible; /* Allow overflow */
  background-image: url('/fredy-martinez-ou3fG2zWbcs-unsplash.jpg');
  background-size: 100%;

  @media (max-width: 720px) {
    margin-top: 20px;
    padding: 10px; /* Reduce padding for smaller screens */
    background-size: 150%; /* Adjust background size for smaller screens */
    border-radius: 10px;
  }
`;

export const Header = styled.h1`
 font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
  color: white;
  border-bottom: 3px rgb(255, 255, 255);
  padding-bottom: 0px;
  position: relative;
  z-index: 1008;
`;

export const Para = styled.p`
 font-family: Arial, Helvetica, sans-serif;
 font-style: italic;
  font-size: 18px;
  margin-bottom: 1.5rem;
  color: white;
  padding-bottom: 0.5rem;
  position: relative;
  z-index: 1008;

  @media (max-width: 720px ) {
    font-style: normal;
    margin: 15px;
  }
`;

export const GigsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px; /* Increase the gap to accommodate the overlapping paper */
  padding: 20px 0;
  overflow: visible; /* Allow overflow */
`;

export const GigCard = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #a2a9b1;
  border-radius: 10px;
  overflow: visible; /* Allow the paper to overflow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-image: url('/bruno-thethe-Evp4iNF3DHQ-unsplash.jpg');
  background-size: cover;
  background-position: center;
  position: relative; /* Make this the reference for absolute positioning */
  z-index: 1004;
  min-height: 300px; /* Set a minimum height to prevent collapsing */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const GigThumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0; /* Rounded corners at the top */
`;

export const GigDetails = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem;
  position: absolute;
  bottom: -20px; /* Pull the paper down to overlap */
  left: 0;
  right: 0;
  z-index: 1005;
  background-image: url('/paperbg.png'); /* Add a paper texture background */
  background-size: 100% 110%; /* Stretch the background slightly */
  background-position: center;
  border-radius: 5px; /* Rounded corners for the paper block */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  overflow: visible; /* Allow the paper to overflow */
`;

export const GigDate = styled.p`
  font-size: 1rem;
  color: #000; /* Dark text for better contrast on the paper */
  margin: 0 0 10px 0; /* Add spacing between items */
  text-align: center;
`;

export const GigLocation = styled.p`
  font-size: 1rem;
  color: #000; /* Dark text for better contrast on the paper */
  margin: 0 0 10px 0; /* Add spacing between items */
  text-align: center;
`;

export const GigPrice = styled.p`
  font-size: 1rem;
  color: #000; /* Dark text for better contrast on the paper */
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

// Modal Styles
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Dimmed background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000; /* Ensure modal is on top of everything */
`;

export const ModalContent = styled.div`
  background: #fff;
  background-image: url('/bruno-guerrero-wemnmGh-7ps-unsplash.jpg');
  background-size: 100%;
  padding: 20px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  position: relative;
  z-index: 10001; /* Ensure modal content is on top of the overlay */
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff; /* White background for visibility */
  border: 2px solid #000; /* Black border for contrast */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  color: #000; /* Black color for the '×' */
  z-index: 10002; /* Ensure the button is on top of the image */

  &:hover {
    background: #000; /* Black background on hover */
    color: #fff; /* White color for the '×' on hover */
  }
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  
`;