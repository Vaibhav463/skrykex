import React from 'react';
import bgImage from '../../assets/leftbannerbg.png';
import xLogo from '../../assets/icons/x.svg';

const ContactCard = () => {
  return (
    <div style={{
      margin: '16px',
      padding: '24px 20px',
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      position: 'relative',
      border: '0.22px solid #000000BF',
      boxShadow: '0px 0.9px 3.14px 0px #00000040'
    }}>
      <img 
        src={xLogo} 
        alt="logo" 
        style={{ 
          width: '24px', 
          height: '24px',
          objectFit: 'contain'
        }} 
      />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ 
          margin: 0,
          color: '#FFFFFF',
          fontFamily: 'DM Sans',
          fontWeight: '600',
          fontSize: '20px',
          lineHeight: '100%',
          letterSpacing: '0%'
        }}>
          Contact Us
        </h3>
        
        <p style={{ 
          margin: 0,
          color: '#C7C7C7',
          fontFamily: 'DM Sans',
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%'
        }}>
          All Trading Bots Trading Bots Lorem Ipsum
        </p>
      </div>

      <button style={{
        marginTop: '4px',
        width: '100%',
        padding: '12px',
        borderRadius: '24px',
        border: 'none',
        backgroundColor: '#FFFFFF',
        color: '#00172D',
        fontFamily: 'DM Sans',
        fontWeight: '600',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'opacity 0.2s'
      }}
      onMouseOver={(e) => e.target.style.opacity = '0.9'}
      onMouseOut={(e) => e.target.style.opacity = '1'}
      >
        Support
      </button>
    </div>
  );
};

export default ContactCard;