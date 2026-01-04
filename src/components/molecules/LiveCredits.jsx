import React from 'react';
import creditIcon from '../../assets/icons/credits-icon.svg';

const LiveCredits = () => {
  return (
    <div style={{
      margin: '0 12px 10px 12px',
      padding: '8px',
      backgroundColor: '#2B2B2B',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
        //   background: '#F0F2FF', 
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src={creditIcon} alt="" style={{ width: '20px', height: '20px' }} />
        </div>
        <span style={{ 
          fontSize: '14px', 
          fontWeight: '600', 
          color: '#FFFFFF', 
          fontFamily: 'DM Sans' 
        }}>
          Live Credits
        </span>
      </div>

      <div style={{ 
        backgroundColor: '#FFFFFF14', 
        padding: '4px 8px', 
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'baseline'
      }}>
        <span style={{ 
          fontFamily: 'Inter',
          fontWeight: '600',
          fontSize: '20px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#FFFFFF'
        }}>
          2
        </span>
        <span style={{ 
          fontFamily: 'Inter',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: 'rgba(255, 255, 255, 0.4)'
        }}>
          /4
        </span>
      </div>
    </div>
  );
};

export default LiveCredits;