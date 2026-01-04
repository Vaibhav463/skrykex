import React from 'react';
import tickIcon from '../../assets/icons/tick.svg'; 
import cardIcon1 from '../../assets/icons/cardicon1.svg';
import reflectionImg from '../../assets/icons/reflection.png';
import trophyBg from '../../assets/icons/trophybg.png'; 
import deployedBg from '../../assets/icons/deployedbg.png'; 
import profitableBg from '../../assets/icons/profitablebg.png';

import cardTop1 from '../../assets/icons/cardtop1.svg';
import cardTop2 from '../../assets/icons/cardtop2.svg';
import cardTop3 from '../../assets/icons/cardtop3.svg';

const FeaturedCard = ({ type, title, author, statLabel, statValue, logo }) => {
  const isHighestWin = type === 'highest-win';
  const isMostDeployed = type === 'most-deployed';

  const themes = {
    'highest-win': {
      containerStyle: {
        background: 'linear-gradient(#000820, #000820) padding-box, radial-gradient(83.87% 243.21% at 83.87% 21.43%, rgb(89, 184, 255) 0%, rgba(51, 108, 220, 0) 49.49%, rgb(71, 180, 180) 100%) border-box',
        border: '1px solid transparent',
      },
      badgeBg: 'linear-gradient(90deg, #355DEF 0%, #1A3BB2 100%)',
      badgeLabel: 'Highest Win Rate',
      badgeIcon: cardTop1,
      bgDecor: trophyBg,
      statStyle: {
        color: '#22D606',
        textShadow: '0px 0px 25.59px #22D60696'
      },
      statBg: 'linear-gradient(113.73deg, rgba(0, 188, 53, 0.17) 7.25%, rgba(0, 255, 38, 0.17) 173.86%)',
      btnText: 'View Details',
      btnBg: 'transparent',
    },
    'most-deployed': {
      containerStyle: {
        background: 'radial-gradient(100% 100% at 50% 0%, #260A3F 0%, #13051F 100%)',
        border: '1px solid #33145B',
      },
      badgeBg: 'linear-gradient(90deg, #8E35EF 0%, #5B1AB2 100%)',
      badgeLabel: 'Most Deployed',
      badgeIcon: cardTop2,
      bgDecor: deployedBg,
      statStyle: {
        background: 'linear-gradient(102.45deg, #89CDFF 26.65%, #E34DFF 159.96%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block'
      },
      statBg: 'rgba(0, 0, 0, 0.5)',
      btnText: 'Deploy Now',
      btnBg: 'linear-gradient(90deg, #355DEF 0%, #8E35EF 100%)',
    },
    'most-profitable': {
      containerStyle: {
        background: 'radial-gradient(100% 100% at 50% 0%, #0A3F1A 0%, #051F0E 100%)',
        border: '1px solid #145B25',
      },
      badgeBg: 'linear-gradient(90deg, #22D606 0%, #148003 100%)',
      badgeLabel: 'Most Profitable',
      badgeIcon: cardTop3,
      bgDecor: profitableBg,
      statStyle: {
        color: '#22D606'
      },
      statBg: 'rgba(0, 0, 0, 0.5)',
      btnText: 'Deploy Now',
      btnBg: 'linear-gradient(90deg, #22D606 0%, #148003 100%)',
    }
  };

  const theme = themes[type];

  return (
    <div style={{
      flex: 1,
      borderRadius: '12.8px',
      position: 'relative',
      overflow: 'hidden',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      backdropFilter: 'blur(5.91px)',
      boxSizing: 'border-box',
      ...theme.containerStyle
    }}>
      <img 
        src={theme.bgDecor} 
        alt="" 
        style={{ position: 'absolute', right: '-10px', top: '10px', width: '120px', opacity: 0.3, pointerEvents: 'none' }} 
      />
      
      <img 
        src={reflectionImg} 
        alt="" 
        style={{ position: 'absolute', opacity: '0.6' , top: '-55px', left: '-81px', width: '150%', height: '150%', pointerEvents: 'none', zIndex: 1 }} 
      />

      <div style={{
        position: 'absolute', top: 0, right: 0,
        background: theme.badgeBg,
        padding: '4px 12px',
        borderBottomLeftRadius: '10px',
        display: 'flex', alignItems: 'center', gap: '4px',
        zIndex: 3
      }}>
        <img src={theme.badgeIcon} alt="" style={{ width: '14px' }} />
        <span style={{ color: '#FFF', fontSize: '10px', fontWeight: '700' }}>{theme.badgeLabel}</span>
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <img src={cardIcon1} alt="icon" style={{ width: '32px', marginBottom: '12px' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* <img src={logo} alt="algo" style={{ width: '44px', height: '44px', borderRadius: '50%' }} /> */}
          <div>
            <h4 style={{ color: '#FFF', margin: 0, fontSize: '16px', fontWeight: '600', fontFamily: 'DM Sans' }}>{title}</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#C7C7C7', fontSize: '12px' }}>By {author}</span>
              <img src={tickIcon} alt="tick" style={{ width: '12px' }} />
            </div>
          </div>
        </div>

        <div style={{
          background: theme.statBg,
          borderRadius: '8px',
          padding: '12px 16px',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <span style={{ color: '#FFF', fontSize: '14px', fontWeight: '500' }}>{statLabel}:</span>
          <span style={{ 
            fontSize: '18px', 
            fontWeight: '700',
            ...theme.statStyle
          }}>
            {statValue}
          </span>
        </div>

        <button style={{
          marginTop: '16px',
          width: '100%',
          padding: '12px',
          borderRadius: '8px',
          border: theme.btnBg === 'transparent' ? '1px solid #FFFFFF33' : 'none',
          background: theme.btnBg,
          color: '#FFF',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          {theme.btnText}
        </button>
      </div>
    </div>
  );
};

export default FeaturedCard;