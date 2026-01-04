import React from 'react';
import MarginCard from '../molecules/MarginCard';
import dashboardIcon from '../../assets/icons/icon-dashboard.svg';
import accountIcon from '../../assets/icons/icon-account.svg'; 
import icon1 from '../../assets/icons/icon1.svg'; 
import icon2 from '../../assets/icons/icon2.svg';

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 24px',
      backgroundColor: '#101010',
      borderBottom: '1px solid #23262F',
      height: '72px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src={dashboardIcon} alt="Dash" style={{ width: '100%', height: '100%' }} />
        <span style={{ 
          fontFamily: 'DM Sans', 
          fontWeight: '600', 
          fontSize: '18px', 
          color: '#FFFFFF' 
        }}>
          Dashboard
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <MarginCard />

        <button style={actionButtonStyle}>
          <img src={icon1} alt="scanner" style={{ width: '20px', height: '20px' }} />
        </button>

        <div style={{ position: 'relative' }}>
          <button style={actionButtonStyle}>
            <img src={icon2} alt="notifications" style={{ width: '20px', height: '20px' }} />
          </button>
          <div style={badgeStyle}>1</div>
        </div>

        <div style={{ width: '1px', height: '32px', backgroundColor: '#23262F', margin: '0 8px' }}></div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '8px' }}>
          <div style={{ position: 'relative' }}>
            <img 
              src={accountIcon} 
              alt="User" 
              style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} 
            />
            <div style={statusDotStyle}></div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ 
              fontFamily: 'DM Sans', 
              fontSize: '14px', 
              fontWeight: '500', 
              color: '#FFFFFF', 
              lineHeight: '22px', 
              letterSpacing: '0%'
            }}>
              John Smith
            </span>
            <span style={{ 
              fontFamily: 'DM Sans', 
              fontSize: '10px', 
              fontWeight: '500', 
              color: '#808191', 
              lineHeight: '22px', 
              letterSpacing: '0%'
            }}>
              @alphatrader
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

const actionButtonStyle = {
  backgroundColor: '#1A1D1F',
  border: '1px solid #23262F',
  borderRadius: '8px',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: 0
};

const badgeStyle = {
  position: 'absolute',
  top: '-8px',
  right: '-2px',
  width: '20px',
  height: '20px',
  backgroundColor: '#3772FF',
  borderRadius: '50%',
  color: 'white',
  fontSize: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #101010',
  fontWeight: 'bold'
};

const statusDotStyle = {
  position: 'absolute',
  top: '0',
  right: '0',
  width: '8px',
  height: '8px',
  backgroundColor: '#22D606',
  borderRadius: '50%',
  border: '1.5px solid #101010'
};

export default Header;