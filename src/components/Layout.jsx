// Layout.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styled from 'styled-components';
import SpotifyEmbed from '../components/SpotifyEmbed';

import {
  Wrapper,
  BackgroundGradient,
  NavItemsContainer,
  Header,
  NavItem,
  Bg,
  BurgerButton,
  MobileMenu,
  MobileNavItem,
  NavImage,
  MainDiv
} from './HomepageStyles';

// ===== PROMOTIONAL COMPONENTS ===== //
const PromoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-end;
  margin-left: auto;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    gap: 12px;
    padding: 8px 0;
    overflow-x: auto;
    width: auto;
    max-width: 100%;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const AlbumArt = styled.div`
  width: 80px;
  height: 80px;
  background-image: url('/img-23.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  flex-shrink: 0;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
  }
`;

const PreOrderButton = styled.div`
  width: 240px;
  height: 120px;
  background-image: url('/pre-order.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    height: 60px;
    width: 120px;
  }
`;

const SpotifyButton = styled.div`
  width: 120px;
  height: 70px;
  background-image: url('/spotify.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    height: 40px;
    width: 80px;
  }
`;

const AppleButton = styled.div`
  width: 120px;
  height: 70px;
  background-image: url('/apple-music-apple.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    height: 40px;
    width: 80px;
  }
`;

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  
  const promoItems = [
    { component: AlbumArt, link: "/album" },
    { component: PreOrderButton, link: "/preorder" },
    { component: SpotifyButton, link: "/spotify" },
    { component: AppleButton, link: "/apple-music" }
  ];
  const embedUrl = "https://open.spotify.com/embed/artist/1dfeR4HaWDbWqFHLkxsg1d?utm_source=generator"; // Replace with your artist/playlist

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    const checkDesktop = () => setIsDesktop(window.innerWidth > 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('resize', checkDesktop);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Bg>
      <BackgroundGradient>
        <MainDiv>
          <Wrapper>
            {!isDesktop && (
              <BurgerButton onClick={toggleMenu}>
                {isMenuOpen ? <X size={30} /> : <Menu size={40} />}
              </BurgerButton>
            )}

            <PromoRow>
              {promoItems.map((item, index) => {
                const ItemComponent = item.component;
                return (
                  <ItemComponent
                    key={index}
                    onClick={() => (window.location.href = item.link)}
                  />
                );
              })}
            </PromoRow>

            {isDesktop ? (
              <NavItemsContainer className="desktop-nav">
                <NavImage />
                <Header> | </Header>
                <NavItem as={Link} to="/">Home</NavItem>
                <NavItem as={Link} to="/lyrics">Lyrics</NavItem>
                {/* <NavItem as={Link} to="/upcoming-gigs">Upcoming Gigs</NavItem> */}
                <NavItem as={Link} to='/storefront'>Store</NavItem>
              </NavItemsContainer>
            ) : null}

            <MobileMenu $isOpen={isMenuOpen}>
              <MobileNavItem as={Link} to="/" onClick={toggleMenu}>Home</MobileNavItem>
              <MobileNavItem as={Link} to="/lyrics" onClick={toggleMenu}>Lyrics</MobileNavItem>
              <MobileNavItem as={Link} to="/storefront" onClick={toggleMenu}>Store</MobileNavItem>
              {/*<div style={{ width: '100%', maxWidth: '400px', height: '400px', margin: '0 auto' }}> 
                
              </div> */}
                
              <SpotifyEmbed />

            </MobileMenu>
          </Wrapper>

        </MainDiv>
        {children}
      </BackgroundGradient>
    </Bg>
  );
};

export default Layout;