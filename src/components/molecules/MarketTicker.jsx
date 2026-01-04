import React from 'react';
import bullIcon from '../../assets/icons/bull.svg';
import patternImg from '../../assets/pattern.png'; 

const VerticalDivider = () => (
  <div style={{
    width: '1px',
    height: '24px',
    backgroundColor: '#474747',
    alignSelf: 'center',
    flexShrink: 0 
  }} />
);

const TickerItem = ({ title, value, change, isRed }) => (
  <div style={{
    padding: '12px 16px', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '4px',
    flex: 1,
    minWidth: 0, 
  }}>
    <span style={{
      fontFamily: 'DM Sans',
      fontWeight: '500',
      fontSize: '13px',
      lineHeight: '100%',
      color: '#ffff',
      whiteSpace: 'nowrap'
    }}>{title}</span>
    
    <div style={{ 
      display: 'flex', 
      alignItems: 'baseline', 
      gap: '8px',
      whiteSpace: 'nowrap'
    }}>
      <span style={{
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '100%',
        color: '#FFFFFF'
      }}>{value}</span>
      <span style={{
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: '11px',
        lineHeight: '100%',
        color: isRed ? '#E01212' : '#22D606'
      }}>{change}</span>
    </div>
  </div>
);

const MarketTicker = () => {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '16px', 
      marginTop: '24px', 
      width: '100%',
      boxSizing: 'border-box',
      alignItems: 'stretch'
    }}>
      <div style={{
        display: 'flex',
        background: '#101010',
        border: '1px solid #474747',
        borderRadius: '8px',
        flex: 1,
        minWidth: 0,
        overflow: 'hidden'
      }}>
        <TickerItem title="Nifty" value="23,508.40" change="+258.90 (+1.11%)" />
        <VerticalDivider />
        <TickerItem title="Bank Nifty" value="23,508.40" change="+258.90 (+1.11%)" />
        <VerticalDivider />
        <TickerItem title="Midcap Nifty" value="23,508.40" change="-258.90 (-1.11%)" isRed />
        <VerticalDivider />
        <TickerItem title="Nifty500" value="23,508.40" change="+258.90 (+1.11%)" />
        <VerticalDivider />
        <TickerItem title="INDIA VIX" value="13.78" change="+258.90 (+1.11%)" />
      </div>

      <div style={{
        width: '240px', 
        borderRadius: '12px',
        padding: '12px 20px',
        background: 'linear-gradient(162.16deg, #000000 -5.96%, #3CFF49 306.08%)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '1px solid #474747',
        flexShrink: 0,
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${patternImg})`,
          backgroundSize: 'cover',
          opacity: 0.15, 
          zIndex: 1,
          pointerEvents: 'none'
        }}></div>

        <span style={{
          fontFamily: 'DM Sans',
          fontWeight: '500',
          fontSize: '12px',
          color: '#FFFFFF',
          zIndex: 3,
          opacity: 0.7
        }}>Market Sentiment</span>
        <span style={{
          fontFamily: 'DM Sans',
          fontWeight: '700',
          fontSize: '24px', 
          color: '#FFFFFF',
          marginTop: '4px',
          zIndex: 3
        }}>Bullish</span>
        
        <img 
          src={bullIcon} 
          alt="bull" 
          style={{
            position: 'absolute',
            right: '0px',
            bottom: '0px',
            height: '90%', 
            opacity: 0.35,
            zIndex: 2,
            pointerEvents: 'none',
            transform: 'rotate(-5deg)'
          }} 
        />
      </div>
    </div>
  );
};

export default MarketTicker;