import React, { useState } from 'react';

const SidebarItem = ({ label, active, iconName, hasDropdown }) => {
  const [isHovered, setIsHovered] = useState(false);
const iconPath = `/icons/${iconName}.svg`;
  const isShown = active || isHovered;

  return (
    <div 
      style={{ position: 'relative', width: '100%' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {active && (
        <div style={{
          position: 'absolute',
          left: '0px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '6px',
          height: '35px',
          backgroundColor: '#407AFF',
          borderTopRightRadius: '11px',
          borderBottomRightRadius: '12px',
          boxShadow: '0px 0px 15px rgba(64, 122, 250, 0.8)',
          zIndex: 20
        }} />
      )}

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px',
        margin: '6px 8px 2px 12px',
        cursor: 'pointer',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.22s ease',
        backgroundColor: isShown ? '#00172D' : 'transparent',
        border: '1px solid transparent',
        backgroundImage: isShown 
          ? 'linear-gradient(#00172D, #00172D), radial-gradient(40% 160% at 72% 0.8%, #407AFF 0%, rgba(255, 255, 255, 0) 100%)' 
          : 'none',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}>
        
        {isShown && (
          <div style={{
            position: 'absolute',
            top: '-48px',      
            right: '6px',     
            width: '70px',    
            height: '80px',   
            background: '#407AFF',
            borderRadius: '50%',
            filter: 'blur(28px)', 
            opacity: '0.5',    
            transform: 'rotate(-5deg)', 
            pointerEvents: 'none',
            zIndex: 0
          }} />
        )}

        <img 
          src={iconPath} 
          alt={label} 
          style={{ 
            width: '18px', 
            height: '18px', 
            zIndex: 2,
            filter: isShown ? 'none' : 'brightness(0) invert(0.6)' 
          }} 
        />
        
        <span style={{
          fontFamily: 'DM Sans',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '100%',
          color: isShown ? '#FFFFFF' : '#9BA3AF',
          zIndex: 2,
          flex: 1
        }}>
          {label}
        </span>

        {hasDropdown && (
          <svg 
            width="10" 
            height="6" 
            viewBox="0 0 10 6" 
            fill="none" 
            style={{ zIndex: 2, transition: '0.3s' }}
          >
            <path 
              d="M1 1L5 5L9 1" 
              stroke={isShown ? "#FFFFFF" : "rgb(155, 163, 175)"} 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default SidebarItem;