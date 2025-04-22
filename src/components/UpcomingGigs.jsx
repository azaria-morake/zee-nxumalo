import React, { useState } from 'react';
import Layout from './Layout';
import {
  UpcomingGigsContainer,
  Header,
  GigsGrid,
  GigCard,
  GigThumbnail,
  GigDetails,
  GigDate,
  GigLocation,
  GigPrice,
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalImage,
  Para,
} from './UpcomingGigsStyles';

// Modal component to display the full image
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

const UpcomingGigs = () => {
  const [selectedGig, setSelectedGig] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data for upcoming gigs
  const gigs = [
    {
      id: 1,
      thumbnail: '/events/img-6.jpg',
      date: 'December 14, 2024',
      location: 'Spanakising, Ficksburg, FS',
      price: 'Starting at R100',
    },
    {
      id: 2,
      thumbnail: '/events/img-1.jpg',
      date: 'September 7, 2024',
      location: 'Sandys Bar',
      price: 'Starting @ R80',
    },
    {
      id: 3,
      thumbnail: '/events/img-2.jpg',
      date: 'October 5, 2024',
      location: 'Lemo Green Park, BFN',
      price: 'Starting @ R200',
    },
    {
      id: 4,
      thumbnail: '/events/img-3.jpg',
      date: 'November 29, 2024',
      location: 'Mafikeng, NW',
      price: 'Starting @ R150',
    },
    {
      id: 5,
      thumbnail: '/events/img-5.jpg',
      date: 'December 7, 2024',
      location: 'Clarens Square, FS',
      price: 'R200',
    },
    {
      id: 6,
      thumbnail: '/events/img-4.jpg',
      date: 'September 26, 2024',
      location: 'Mmabana Stadium, Thaba Nchu',
      price: 'Starting @ R80',
    },
  ];

  const handleGigClick = (gig) => {
    setSelectedGig(gig);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGig(null);
  };

  return (
    <Layout>
      <UpcomingGigsContainer>
        <Header>Upcoming Gigs</Header>
        <Para> Here's all our upcoming gigs. Click on any of them to view the full image and details. Come back often to stay updated! </Para>
        <GigsGrid>
          {gigs.map((gig) => (
            <GigCard key={gig.id} onClick={() => handleGigClick(gig)}>
              <GigThumbnail src={gig.thumbnail} alt={`Gig ${gig.id}`} />
              <GigDetails>
                <GigDate>{gig.date}</GigDate>
                <GigLocation>{gig.location}</GigLocation>
                <GigPrice>{gig.price}</GigPrice>
              </GigDetails>
            </GigCard>
          ))}
        </GigsGrid>
      </UpcomingGigsContainer>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedGig && (
          <ModalImage
            src={selectedGig.thumbnail}
            alt={`Gig ${selectedGig.id}`}
          />
        )}
      </Modal>
    </Layout>
  );
};

export default UpcomingGigs;