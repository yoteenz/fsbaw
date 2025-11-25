import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Lobby Component
const LobbyPage: React.FC = () => {
  const navigate = useNavigate();
  console.log('✅✅✅ LobbyPage component rendering - ROOT ROUTE');
  
  // Ensure we're on the root route
  useEffect(() => {
    console.log('✅ LobbyPage useEffect - pathname:', window.location.pathname);
    if (window.location.pathname !== '/') {
      console.warn('⚠️ LobbyPage rendered but pathname is not /:', window.location.pathname);
    }
  }, []);

  return (
    <div className="bg-red-900 relative" style={{ height: '100vh', overflow: 'visible', display: 'flex', flexDirection: 'column', width: '100vw', flexShrink: 0 }}>
      {/* Background Image */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '0', 
          right: '0', 
          bottom: '0', 
          left: '0', 
          backgroundImage: 'url(/assets/landing-background.png)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Chat Icon - Upper Left */}
      <div className="absolute top-6 left-6 z-20">
        <img 
          src="/assets/chat-icon.svg" 
          alt="Chat" 
          style={{ width: '32px', height: '32px', cursor: 'pointer' }}
        />
      </div>
      
      {/* Menu Icon - Upper Right */}
      <div className="absolute top-6 right-6 z-20">
        <img 
          src="/assets/landing-menu-icon.svg" 
          alt="Menu" 
          style={{ width: '32px', height: '32px', cursor: 'pointer' }}
        />
      </div>
      
      {/* Main Content Container */}
      <div style={{ 
        position: 'relative', 
        zIndex: '10', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        padding: '0 16px'
      }}>
        
        {/* Neon Logo - Center */}
        <div style={{ marginBottom: '32px', padding: '0px' }}>
          <img 
            src="/assets/neon-logo.png" 
            alt="Frontal Slayer" 
            style={{ width: 'auto', height: '60px', maxHeight: '60px', margin: '0', padding: '0' }}
          />
        </div>
        
        {/* Navigation Links */}
        <div style={{ 
          margin: '0', 
          padding: '0', 
          marginBottom: '64px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '0px'
        }}>
          <img 
            src="/assets/neon-products.png" 
            alt="Products" 
            onClick={() => navigate('/build-a-wig')}
            style={{ width: 'auto', height: '44px', cursor: 'pointer', margin: '0', padding: '0', display: 'block', transform: 'translateX(0px)' }}
          />
          <img 
            src="/assets/neon-tools.png" 
            alt="Tools" 
            style={{ width: 'auto', height: '44px', cursor: 'pointer', margin: '0', padding: '0', display: 'block', transform: 'translateX(-50px)' }}
          />
          <img 
            src="/assets/neon-booking.png" 
            alt="Booking" 
            style={{ width: 'auto', height: '44px', cursor: 'pointer', margin: '0', padding: '0', display: 'block', transform: 'translateX(-100px)' }}
          />
        </div>
        
        {/* Product Display Shelves */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '32px', 
          marginBottom: '64px',
          alignItems: 'center'
        }}>
          {/* HD LACE Shelf */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="/assets/hd-group.png" 
              alt="HD Lace Collection" 
              style={{ 
                width: 'auto', 
                height: '64px',
                display: 'block'
              }}
            />
          </div>
          
          {/* TRANSPARENT LACE Shelf */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="/assets/transparent-group.png" 
              alt="Transparent Lace Collection" 
              style={{ 
                width: 'auto', 
                height: '64px',
                display: 'block'
              }}
            />
          </div>
          
          {/* CUSTOM UNITS Shelf */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="/assets/custom-group.png" 
              alt="Custom Units Collection" 
              style={{ 
                width: 'auto', 
                height: '64px',
                display: 'block'
              }}
            />
          </div>
        </div>
        
        {/* Bottom Display Case and Accessories */}
        <div style={{ 
          position: 'relative', 
          width: '60%', 
          maxWidth: '768px',
          marginTop: '-50px'
        }}>
          {/* Acrylic Case */}
          <div style={{ position: 'relative' }}>
            <img 
              src="/assets/CASE.png" 
              alt="Display Case" 
              style={{ 
                width: '100%', 
                height: 'auto',
                display: 'block'
              }}
            />
            
            {/* Register - Left side of case */}
            <div style={{ 
              position: 'absolute', 
              top: '16px', 
              left: '32px'
            }}>
              <img 
                src="/assets/REGISTER.png" 
                alt="Register" 
                style={{ 
                  width: '40px', 
                  height: '32px',
                  display: 'block'
                }}
              />
            </div>
            
            {/* Phone - Right side of case */}
            <div style={{ 
              position: 'absolute', 
              top: '16px', 
              right: '32px'
            }}>
              <img 
                src="/assets/PHONE.png" 
                alt="Phone" 
                style={{ 
                  width: '40px', 
                  height: '32px',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

// Lounge Component
const LoungePage: React.FC = () => {
  return (
    <div className="bg-white relative" style={{ minHeight: '105vh', width: '100vw', overflow: 'visible', display: 'block', margin: 0, padding: 0 }}>
      {/* Background Image - Using landing2-background */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%',
          height: '100%',
          minHeight: '105vh',
          backgroundImage: 'url(/assets/landing2-background.png)',
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Menu Icon - Upper Right */}
      <div className="absolute right-6 z-20" style={{ top: '104px' }}>
        <img 
          src="/assets/landing-menu-icon.svg" 
          alt="Menu" 
          style={{ width: '16px', height: '16px', cursor: 'pointer' }}
        />
      </div>
      
      {/* Neon Logo - Independent container with absolute positioning */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(calc(-50% + 56px), calc(-50% - 160px))', 
        zIndex: 10, 
        width: 'fit-content'
      }}>
        <div style={{ display: 'inline-block', position: 'relative', width: 'fit-content' }}>
          <img 
            src="/assets/neon-logo.png" 
            alt="Frontal Slayer" 
            style={{ 
              width: 'auto', 
              height: '265px', 
              maxWidth: 'none',
              maxHeight: '265px', 
              margin: 0, 
              padding: 0,
              display: 'block',
              visibility: 'visible',
              opacity: 1
            }}
          />
        </div>
      </div>
      
      {/* TV Screen - Independent container with absolute positioning */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(calc(-50% + 58px), calc(-50% + 50px))', 
        zIndex: 10, 
        width: 'fit-content'
      }}>
        <div style={{ display: 'inline-block', position: 'relative', width: 'fit-content' }}>
          <img 
            src="/assets/tv-screen.png" 
            alt="TV Screen" 
            style={{ 
              width: 'auto', 
              height: '146px', 
              cursor: 'pointer', 
              margin: 0, 
              padding: 0, 
              display: 'block',
              maxWidth: 'none'
            }}
          />
        </div>
      </div>
      
      {/* Play Button - Independent container with absolute positioning */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(calc(-50% + 60px), calc(-50% + 49px))', 
        zIndex: 10, 
        width: 'fit-content'
      }}>
        <div style={{ display: 'inline-block', position: 'relative', width: 'fit-content' }}>
          <img 
            src="/assets/play-button.png" 
            alt="Play Button" 
            style={{ width: 'auto', height: '15px', cursor: 'pointer', margin: 0, padding: 0, display: 'block' }}
          />
        </div>
      </div>
      
      {/* Salon Chairs - Independent container with absolute positioning */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(calc(-50% + 25px), calc(-50% + 310px))', 
        zIndex: 10, 
        width: 'fit-content'
      }}>
        <div style={{ display: 'inline-block', position: 'relative', width: 'fit-content' }}>
          <img 
            src="/assets/salon-chairs.png" 
            alt="Salon Chairs" 
            style={{ width: 'auto', height: '160px', cursor: 'pointer', margin: 0, padding: 0, display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
};

// Main Lobby App Component with Slide Transition
const LobbyApp: React.FC = () => {
  console.log('🎯 LOBBY PAGE LOADING - This should show when visiting root path');
  const [currentPage, setCurrentPage] = useState<number>(0); // 0 = Lobby, 1 = Lounge
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const pages = [<LobbyPage key="lobby" />, <LoungePage key="lounge" />];

  const handlePrevious = useCallback(() => {
    if (currentPage > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentPage(currentPage - 1);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  }, [currentPage, isTransitioning]);

  const handleNext = useCallback(() => {
    if (currentPage < pages.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentPage(currentPage + 1);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  }, [currentPage, isTransitioning, pages.length]);

  // Handle keyboard arrow keys
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handlePrevious, handleNext]);

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden', 
      position: 'relative',
      backgroundColor: '#000'
    }}>
      {/* Slide Container */}
      <div 
        style={{
          display: 'flex',
          width: `${pages.length * 100}vw`,
          height: '100vh',
          transform: `translateX(-${currentPage * 100}vw)`,
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'transform'
        }}
      >
        {pages}
      </div>

      {/* Left Arrow Button - Show on lounge page */}
      {currentPage === 1 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handlePrevious();
          }}
          disabled={isTransitioning}
          aria-label="Previous page"
          style={{
            position: 'fixed',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 999999,
            background: '#ffffff !important',
            border: '3px solid #000000 !important',
            borderRadius: '50%',
            width: '70px',
            height: '70px',
            minWidth: '70px',
            minHeight: '70px',
            cursor: isTransitioning ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000000 !important',
            fontSize: '32px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            opacity: isTransitioning ? 0.5 : 1,
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
            pointerEvents: 'auto',
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation'
          }}
          onMouseEnter={(e) => {
            if (!isTransitioning) {
              e.currentTarget.style.background = '#f0f0f0';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          ←
        </button>
      )}

      {/* Right Arrow Button - Always show on lobby page */}
      {currentPage === 0 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleNext();
          }}
          disabled={isTransitioning}
          aria-label="Next page"
          style={{
            position: 'fixed',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 999999,
            background: '#ffffff !important',
            border: '3px solid #000000 !important',
            borderRadius: '50%',
            width: '70px',
            height: '70px',
            minWidth: '70px',
            minHeight: '70px',
            cursor: isTransitioning ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000000 !important',
            fontSize: '32px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            opacity: isTransitioning ? 0.5 : 1,
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
            pointerEvents: 'auto',
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation'
          }}
          onMouseEnter={(e) => {
            if (!isTransitioning) {
              e.currentTarget.style.background = '#f0f0f0';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          →
        </button>
      )}
    </div>
  );
};

export default LobbyApp;

