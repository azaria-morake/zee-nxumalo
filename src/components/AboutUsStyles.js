import styled, { css } from 'styled-components';

export const AboutUsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  top: 80px;
  font-family: 'Helvetica';
  line-height: 1.6;
  color: rgb(216, 220, 224);
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  background-image: url('/intricate-explorer-H0-3xfbU8wk-unsplash.jpg');
  background-size: cover;
  background-position: center;
  z-index: 1000;


  @media (max-width: 720px) {
    padding: 0.5rem;
    background-size: 150%;
    z-index: 1000;
    top: 80px;
  }
`;

export const LyricsContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  border: 1px solid #a2a9b1;
  border-radius: 3px;
  margin-bottom: 2rem;

  @media (max-width: 720px) {
    padding: 1rem;
  }
`;

// In your AboutUsStyles.js

export const LyricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 0.5rem;
  }
`;

export const SongTile = styled.div`
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 720px) {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px;
    background-color: rgba(0, 0, 0, 0.79);
    border-radius: 8px;
    margin: 0.5rem 0;
    //border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      transform: none;
      background: rgba(14, 14, 14, 0.7);
    }
  }
`;

export const SongImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 720px) {
    width: 60px;
    height: 60px;
    min-width: 60px;
    border-radius: 4px;
  }
`;

export const SongInfo = styled.div`
  padding: 0.5rem;
  text-align: center;
  color: white;

  h4 {
    margin: 0.5rem 0;
    font-size: 1.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 720px) {
    padding: 0;
    text-align: left;
    flex-grow: 1;
    min-width: 0;

    h4 {
      margin: 0;
      font-size: 1rem;
      background: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p, p1, p3 {
      
      font-size: 12px;
      margin: 0;
      color: #888;
      white-space: wrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const LyricsModal = styled.div`
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; // Very high z-index
  // Make sure it's appended to the document body
  isolation: isolate; // Creates a new stacking context in modern browsers
`;

export const LyricsModalContent = styled.div`
  background: rgb(15, 15, 15);
  max-width: 700px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 10px;
  padding: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 5000;

  /* Custom Scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(107, 107, 107, 0.8) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(107, 107, 107, 0.8);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: 720px) {
    padding: 1rem;
    width: 95%;
  }
`;

export const LyricsBody = styled.div`
  line-height: 1.6;
  padding: 0rem 0;
  color: white;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-wrap: break-word;
  margin: 0 0 0 20px;

  /* Removed max-height and overflow-y to enable unified scrolling */
  /* Custom Scrollbar removed here since parent handles scrolling */
`;


export const MobileDiv = styled.div`
  @media (max-width: 720px) {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    //gap: 12px;  
    align-items: flex-start;
    
    > div:first-child { // Text content wrapper
      width: 100%;
      h3 {
        margin:0;
        font-size: 1.3rem;
        line-height: 1;
        color: white;
      }
      p {
        font-size: 0.6rem;
        color: #888;
        margin: 0 0 8px 0;
      }
      p2 {
        font-size: 0.9rem;
        color: #888;
        font-weight: bold;
        line-height: 2;

      }
    }
  }
`;

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 32px;
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 720px) {
    margin: 0;
    width: 100%;
    justify-content: center;
    position: relative;
  }
`;



export const LyricsHeader = styled.div`
  display: flex;
  gap: 1.5rem;
  background-color: rgb(0, 0, 0);
  border-radius: 5px;
  width: 100%;



  @media (max-width: 720px) {
    flex-direction: row;
    gap: 1rem;
    margin: auto;
    width: 90%;
    padding: 1rem;
    }

  ${SongImage} {
    width: 150px;
    height: 150px;
    margin: 20px;

    @media (max-width: 720px) {
      width: auto;
      height: 100px;
      margin: auto;
    }
  }

  div {
    flex: 1;
    margin: 10px;
    @media (max-width: 720px) {
      margin: 0;

    }

    h3 {
      margin: 0 0 0.5rem;
      font-size: 1.5rem;
      color: white;
    }

    p {
      color: #888;
      margin: 0;
    }

    p2 {
      color: #888;
      margin: 0;
      font-weight: 700;
      line-height: 3;
    }
  }
`;



export const ShareButton = styled.button`
  background: rgb(242, 29, 111);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 720px) {
  width: 10rem;
  position: relative;
  margin-top:0;
  z-index: 3;
  }
`;




export const SocialIcons = styled.div`
  position: absolute;
  left: calc(100% + 8px);
  top: 16%;
  transform: translateY(-50%) translateX(${({ showSocial }) => (showSocial ? '0' : '-20px')});
  display: flex;
  gap: 0.5rem;
  opacity: ${({ showSocial }) => (showSocial ? 1 : 0)};
  visibility: ${({ showSocial }) => (showSocial ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  align-items: center;

  a {
    text-decoration: none;
    display: flex;
  }

  button {
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 0.3rem;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    transition: all 0.3s ease;
    opacity: ${({ showSocial }) => (showSocial ? 1 : 0)};
    transform: translateX(${({ showSocial }) => (showSocial ? '0' : '-20px')});

    &:hover {
      background: white;
      color: black;
    }

    &:nth-child(1) {
      transition-delay: ${({ showSocial }) => (showSocial ? '0.1s' : '0s')};
    }
    &:nth-child(2) {
      transition-delay: ${({ showSocial }) => (showSocial ? '0.2s' : '0s')};
    }
    &:nth-child(3) {
      transition-delay: ${({ showSocial }) => (showSocial ? '0.3s' : '0s')};
    }
  }

  @media (max-width: 720px) {
    left: 50%;
    top: 100%;
    flex-direction: row;
    transform: translateX(-50%) translateY(${({ showSocial }) => (showSocial ? '10px' : '-20px')});
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);

    button {
      transform: translateY(${({ showSocial }) => (showSocial ? '0' : '-10px')});
      &:nth-child(1) { transition-delay: ${({ showSocial }) => (showSocial ? '0.1s' : '0s')}; }
      &:nth-child(2) { transition-delay: ${({ showSocial }) => (showSocial ? '0.2s' : '0s')}; }
      &:nth-child(3) { transition-delay: ${({ showSocial }) => (showSocial ? '0.3s' : '0s')}; }
    }
  }
`;


export const Header = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;
  position: absolute;
  z-index: 1000;
  color: white;
  border-bottom: 1px solid #a2a9b1;
  padding-bottom: 0.5rem;

  @media (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

// Carousel Styles (unchanged, retained for completeness)
export const VideoCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 20px 0;
  height: 220px;

  @media (max-width: 720px) {
    height: 180px;
  }
`;

export const VideoCarouselWrapper = styled.div`
  display: flex;
  gap: 10px;
  transform: translateX(${(props) => props.translateX}px);
  transition: transform 0.5s ease;
`;

export const VideoCard = styled.div`
  flex: 0 0 auto;
  width: 300px;
  height: 200px;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 720px) {
    width: 250px;
    height: 150px;
  }

  ${props =>
    props.$isHovered &&
    css`
      transform: scale(1.07);
      z-index: 2;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    `}

  ${props =>
    !props.$isHovered &&
    css`
      transform: scale(0.9);
      opacity: 100%;
    `}
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const PlayButtonOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 720px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;

export const YTCarouselButton = styled.button`
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

  &:hover {
    background: black;
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  @media (max-width: 720px) {
    width: 50px;
    height: 50px;
  }
`;

export const YouTubeModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const YouTubeModalContent = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  width: 90%;
  max-width: 800px;
  position: relative;
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

export const CenteredParagraph = styled.p`
  text-align: left;
  color: rgb(255, 255, 255);
  margin-bottom: 3rem;
  max-width: 100%;

  @media (max-width: 720px) {
    margin-bottom: 1.5rem;
  }
`;

export const VertContainer = styled.div `
  display: flex;
  //flex-direction: column;
  align-items: center;
  //justify-content: center;
  //gap: 1rem;
  padding: 16px;

  //@media (max-width: 720px) {
  //  margin-top: 1rem;
  //  gap: 0.5rem;
  //}
`;