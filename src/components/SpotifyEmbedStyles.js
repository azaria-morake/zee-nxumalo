// src/components/SpotifyEmbed.styles.js
import styled from 'styled-components';

export const EmbedContainer = styled.div`
  position: relative;
  width: 100%; // previously 100%
  max-width: 310px; // previously 310px
  // padding-top: 100%; /* 1:1 Aspect Ratio */
  height: 152px; // previously 60%
  overflow: visible;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
  margin: 8px 0; // To match spacing between menu items


  @media (max-width: 720px) {
    width: 270px;
    height: 200px; // Height of container
  }
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  border: none;
 
  height: 100%;
  border-radius: 6px;
  display: block;
  height: 500px; // Increases  sizes of contents like album art, etc

  @media (max-width: 720px) {
    //width: 300px;
  }
`;

export const SpotifyWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  //height: 400px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; // centers the content vertically.


  
  @media (max-width: 720px) {
    width: 100%;
  }

`;

export const CenteredWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;