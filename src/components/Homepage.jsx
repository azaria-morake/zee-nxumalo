import React, { useState, useEffect, useRef } from 'react';
import Layout from './Layout';
import {
  PageWrapper,
  CarouselContainer,
  CarouselWrapper,
  CarouselImageContainer,
  CarouselImage,
  CarouselButton,
  GroupName,
  Description,
  ButtonWrapper,
  Modal,
  ModalContent,
  Icon,
  CloseButton,
  FullSizeImage,
  CarouselModal,
  CarouselModalContent,
  BookingsCard,
  BookingHeader,
  BookingTitle,
  BookingDetails,
  Underliner,
  InnerCard,
} from './HomepageStyles';
import Descriptions from './Description';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';


const Homepage = () => {
  const [isStreamModalOpen, setStreamModalOpen] = useState(false);
  const [isFollowModalOpen, setFollowModalOpen] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State for full-size image
  const carouselRef = useRef(null);
  const [showBookings, setShowBookings] = useState(false);
  const bookingsRef = useRef(null);

  const isMobile = window.innerWidth <= 768;
  const imageWidth = isMobile ? window.innerWidth - 80 : 310; // Adjust width for mobile

  useEffect(() => {
    const handleResize = () => {
      // Reset position when switching between mobile and desktop
      setTranslateX(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showBookings && bookingsRef.current) {
      const timeout = setTimeout(() => {
        const top = bookingsRef.current.getBoundingClientRect().top + window.scrollY;
        const offset = 100; // Adjust this number to get the spacing you want
  
        window.scrollTo({
          top: top - offset,
          behavior: 'smooth',
        });
      }, 450); // Wait for the animation to complete
  
      return () => clearTimeout(timeout);
    }
  }, [showBookings]);
  
  

  const images = [
    '/img-0.jpg',
    '/img-1.jpg',
    '/img-2.jpg',
    '/img-3.jpg',
    '/img-4.jpg',
    '/img-5.jpg',
    '/img-6.jpg',
    '/img-7.jpg',
    '/img-8.jpg',
    '/img-9.jpg',
    '/bannerpic.jpg',
  ];

  const visibleImages = Math.floor((carouselRef.current?.offsetWidth || 0) / imageWidth);
  const maxTranslateX = -(imageWidth * (images.length - visibleImages));

  useEffect(() => {
    let intervalId;
    if (autoScroll) {
      intervalId = setInterval(() => {
        setTranslateX((prev) => {
          const nextTranslate = prev - imageWidth;
          return nextTranslate <= maxTranslateX ? 0 : nextTranslate;
        });
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [autoScroll, maxTranslateX, imageWidth]);

  const handleNext = () => {
    setAutoScroll(false);
    setTranslateX((prev) => {
      const nextTranslate = prev - imageWidth;
      return nextTranslate <= maxTranslateX ? 0 : nextTranslate;
    });
  };

  const handlePrev = () => {
    setAutoScroll(false);
    setTranslateX((prev) => {
      const nextTranslate = prev + imageWidth;
      return nextTranslate >= 0 ? 0 : nextTranslate; // Reset to 0 if at the first image
    });
  };

  const handleMouseEnter = (index) => {
    setAutoScroll(false);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setAutoScroll(true);
    setHoveredIndex(null);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image); // Open modal with the selected image
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close modal
  };

  return (
    <Layout>
      <PageWrapper>
        <CarouselContainer ref={carouselRef}>
          <CarouselButton className="prev" onClick={handlePrev}>
            &#8249;
          </CarouselButton>
          <CarouselWrapper translateX={translateX}>
            {images.map((image, index) => (
              <CarouselImageContainer
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                $isHovered={hoveredIndex === index}
                $isAdjacent={hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1}
                onClick={() => handleImageClick(image)} // Add click handler
              >
                <CarouselImage src={image} alt={`Carousel ${index + 1}`} />
              </CarouselImageContainer>
            ))}
          </CarouselWrapper>
          <CarouselButton className="next" onClick={handleNext}>
            &#8250;
          </CarouselButton>
        </CarouselContainer>

        <GroupName>Zee Nxumalo</GroupName>
        <Description> <Descriptions /> </Description>


        <ButtonWrapper>
          <button onClick={() => setStreamModalOpen(true)}>Stream</button>
          <button onClick={() => setFollowModalOpen(true)}>Follow Me</button>
        </ButtonWrapper>

        {isStreamModalOpen && (
          <Modal onClick={() => setStreamModalOpen(false)}>
            <ModalContent>
              <Icon href="https://open.spotify.com/artist/5m5lgddffBHA2pv0m5E2Ro" target="_blank">
                Spotify
              </Icon>
              <Icon href="https://music.apple.com/mt/artist/zee-nxumalo/1606439969" target="_blank">
                Apple Music
              </Icon>
            </ModalContent>
          </Modal>
        )}

        {isFollowModalOpen && (
          <Modal onClick={() => setFollowModalOpen(false)}>
            <ModalContent>
              <Icon href="https://www.facebook.com/zeenxumaloza/" target="_blank">
                Facebook
              </Icon>
              <Icon href="https://www.instagram.com/zeenxumalo_/?hl=en" target="_blank">
                Instagram
              </Icon>
            </ModalContent>
          </Modal>
        )}

        {selectedImage && ( // Full-size image modal
  <CarouselModal onClick={handleCloseModal}>
    <CarouselModalContent onClick={(e) => e.stopPropagation()}> {/* Prevent modal from closing when clicking inside */}
      <CloseButton onClick={handleCloseModal}>X</CloseButton>
      <FullSizeImage src={selectedImage} alt="Full Size" />
    </CarouselModalContent>
  </CarouselModal>
)}


        <Description>   
</Description>
<BookingsCard ref={bookingsRef} onClick={() => setShowBookings(!showBookings)}>
  <BookingHeader>
    <BookingTitle>Bookings</BookingTitle>
    {showBookings ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
  </BookingHeader>
  <AnimatePresence>
    {showBookings && (
      <BookingDetails
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <Underliner/>
        <InnerCard>
        <p>+27 83 242 9237</p>
        <p> +27 78 036 4373 </p>
        <p>info@kwanxumalo.com</p>
        </InnerCard>
      </BookingDetails>
    )}
  </AnimatePresence>
  </BookingsCard>
      </PageWrapper>
    </Layout>
  );
};

export default Homepage;