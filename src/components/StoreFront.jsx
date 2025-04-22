// StoreFront.jsx

import React, { useState, useEffect, useRef } from 'react';
import Layout from './Layout';
import Modal from './Modal'; // import the new Modal component
import {
  ProductsContainer,
  Header,
  ProductsGrid,
  ProductCard,
  ProductThumbnail,
  ProductDetails,
  ProductName,
  ProductDescription,
  ProductPrice,
  ColorOptions,
  ColorSwatch,
  ProductThumbnailWrapper,
  ClickOverlay
} from './StoreFrontStyles';
import {
  BookingsCard,
  BookingHeader,
  BookingTitle,
  BookingDetails,
} from './HomepageStyles';

import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { PageWrapper } from './HomepageStyles';
import { UpcomingGigsContainer } from './UpcomingGigsStyles';

const Products = () => {
  const [selectedColors, setSelectedColors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [modalColorIndex, setModalColorIndex] = useState(0);
  const [showBookings, setShowBookings] = useState(false);
  
  const openModal = (product, index) => {
    setModalProduct(product);
    setModalColorIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalProduct(null);
  };

  const nextColor = () => {
    setModalColorIndex((prev) => (prev + 1) % modalProduct.colors.length);
  };

  const prevColor = () => {
    setModalColorIndex((prev) => (prev - 1 + modalProduct.colors.length) % modalProduct.colors.length);
  };

  useEffect(() => {
    const disableScroll = (e) => e.preventDefault();

    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.addEventListener('touchmove', disableScroll, { passive: false });
    } else {
      document.body.style.overflow = 'auto';
      document.body.removeEventListener('touchmove', disableScroll);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.removeEventListener('touchmove', disableScroll);
    };
  }, [modalOpen]);

  const products = [
    {
      id: 1,
      name: 'Classic T-Shirt',
      description: '100% Cotton crew neck t-shirt',
      price: 'R399',
      colors: [
        { name: 'Red', image: '/store/items/img-4.png' },
        { name: 'Blue', image: '/store/items/img-5.png' },
        { name: 'Black', image: '/store/items/img-3.png' },
      ]
    },
    {
      id: 2,
      name: 'Hooded Sweatshirt',
      description: 'Premium cotton blend hoodie',
      price: 'R199',
      colors: [
        { name: 'Gray', image: 'store/items/img-0.png' },
        { name: 'Navy', image: '/store/items/img-1.png' },
        { name: 'Black', image: '/store/items/img-2.png' },
      ]
    },
  ];

  const handleColorSelect = (productId, colorIndex) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: colorIndex
    }));
  };

  return (
    <Layout>
      <UpcomingGigsContainer>
        <PageWrapper>
          <ProductsContainer>
            <Header>Zee's Collection</Header>
            <ProductsGrid>
              {products.map((product) => (
                <ProductCard key={product.id}>
                  <ProductThumbnailWrapper onClick={() => openModal(product, selectedColors[product.id] || 0)}>
                    <ProductThumbnail 
                      src={product.colors[selectedColors[product.id] || 0].image} 
                      alt={product.name} 
                    />
                    <ClickOverlay>Click for full view</ClickOverlay>
                  </ProductThumbnailWrapper>
                  <ProductDetails>
                    <ProductName>{product.name}</ProductName>
                    <ProductDescription>{product.description}</ProductDescription>
                    <ColorOptions>
                      {product.colors.map((color, index) => (
                        <ColorSwatch 
                          key={color.name}
                          onClick={() => handleColorSelect(product.id, index)}
                          selected={selectedColors[product.id] === index}
                        >
                          <img src={color.image} alt={color.name} />
                        </ColorSwatch>
                      ))}
                    </ColorOptions>
                    <ProductPrice onClick={() => {/* Payment integration later */}}>
                      {product.price}
                    </ProductPrice>
                  </ProductDetails>
                </ProductCard>
              ))}
            </ProductsGrid>
          </ProductsContainer>
        </PageWrapper>
      </UpcomingGigsContainer>

      {modalOpen && modalProduct && (
        <Modal onClose={closeModal}>
          <img 
            src={modalProduct.colors[modalColorIndex].image} 
            alt={modalProduct.name}
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={prevColor}>←</button>
            <span>{modalProduct.colors[modalColorIndex].name}</span>
            <button onClick={nextColor}>→</button>
          </div>
        </Modal>
      )}

      <BookingsCard onClick={() => setShowBookings(!showBookings)}>
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
              <p>☎️: +27 83 242 9237 / +27 78 036 4373</p>
              <p>📧: info@kwanxumalo.com</p>
            </BookingDetails>
          )}
        </AnimatePresence>
        </BookingsCard>
    </Layout>
  );
};

export default Products;
