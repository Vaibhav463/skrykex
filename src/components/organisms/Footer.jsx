import React from 'react';
import phoneIcon from '../../assets/icons/phone.svg'; 
import mailIcon from '../../assets/icons/mail.svg';

const Footer = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 0',
    marginTop: 'auto', 
    borderTop: '1px solid #1E1E1E',
    width: '100%',
    boxSizing: 'border-box'
  };

  const textStyle = {
    color: '#808191',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    margin: 0
  };

  const contactSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    color: '#808191',
    cursor: 'pointer'
  };

  const iconStyle = {
    width: '16px',
    height: '16px',
    opacity: 0.8
  };

  return (
    <footer style={containerStyle}>
      <p style={textStyle}>© 2025 StrykeX. All rights reserved.</p>

      <div style={contactSectionStyle}>
        <a href="tel:+916377959992" style={contactItemStyle}>
          <img src={phoneIcon} alt="phone" style={iconStyle} />
          <span style={textStyle}>+91 6377959992</span>
        </a>
        
        <a href="tel:+916377959992" style={contactItemStyle}>
          <img src={phoneIcon} alt="phone" style={iconStyle} />
          <span style={textStyle}>+91 6377959992</span>
        </a>

        <a href="mailto:Sambhav@stryke.tech" style={contactItemStyle}>
          <img src={mailIcon} alt="mail" style={iconStyle} />
          <span style={textStyle}>Sambhav@stryke.tech</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;