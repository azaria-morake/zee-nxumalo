// src/components/SpotifyEmbed.jsx
import React from 'react';
import { EmbedContainer, StyledIframe, SpotifyWrapper } from './SpotifyEmbedStyles';
import { CenteredWrapper } from './SpotifyEmbedStyles';
//import AlbumArt from './AlbumArt'; // Assuming you have a separate component for the album art
import styled from 'styled-components';

const SpotifyEmbed = () => {
  return (
    <CenteredWrapper>
    <SpotifyWrapper>

      <EmbedContainer>
        <StyledIframe
          src="https://open.spotify.com/embed/artist/5m5lgddffBHA2pv0m5E2Ro?utm_source=generator"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
              width="100%"
    height="100%"
        />
      </EmbedContainer>
    </SpotifyWrapper>
    </CenteredWrapper>
  );
};

export default SpotifyEmbed;

