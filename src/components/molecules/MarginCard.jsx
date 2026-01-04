import React from 'react';
import Text from '../atoms/Text';
import marginLogo from '../../assets/icons/margin.svg';

const MarginCard = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(113.31deg, #000000 12.46%, #46B48D 306.21%)',
      border: '1px solid #23262F',
      borderRadius: '12px',
      padding: '10px 14px', 
      gap: '12px',
      minWidth: '370px',
      height: '56px', 
      boxSizing: 'border-box'
    }}>
      <img src={marginLogo} alt="margin-logo" style={{ width: '36px', height: '36px', flexShrink: 0 }} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ 
              fontFamily: 'DM Sans', 
              fontWeight: '600', 
              fontSize: '14px', 
              lineHeight: '100%', 
              color: '#FFFFFF' 
            }}>
              Margin Available
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#808191" strokeWidth="2.5" style={{ cursor: 'pointer' }}>
              <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </div>
          
          <span style={{ 
            fontFamily: 'Inter', 
            fontWeight: '600', 
            fontSize: '14px', 
            lineHeight: '100%', 
            color: '#FFFFFF' 
          }}>
            ₹20,00,764.64
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ 
            fontFamily: 'DM Sans', 
            fontWeight: '400', 
            fontSize: '10px', 
            lineHeight: '100%', 
            color: '#808191' ,
            paddingRight: '10px'
          }}>
            Token Expiry: 30th Dec 25 | 12:22 AM
          </span>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
             <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22D606' }}></div>
             <span style={{ 
               fontFamily: 'DM Sans', 
               fontWeight: '500', 
               fontSize: '10px', 
               lineHeight: '100%', 
               color: '#22D606' 
             }}>
               Connected
             </span>
             <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22D606" strokeWidth="2.5">
               <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
               <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
             </svg>
          </div>
        </div>
      </div>

      <div style={{ cursor: 'pointer', paddingLeft: '4px', display: 'flex', alignItems: 'center' }}>
        <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#808191"/>
            <circle cx="2" cy="8" r="2" fill="#808191"/>
            <circle cx="2" cy="14" r="2" fill="#808191"/>
        </svg>
      </div>
    </div>
  );
};

export default MarginCard;