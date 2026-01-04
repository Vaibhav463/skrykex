import React from 'react';
import FeaturedCard from './FeaturedCard';
import trophyIcon from '../../assets/icons/trophy.svg';
import infoIcon from '../../assets/icons/info.svg';
import algoLogo from '../../assets/icons/trophy.svg'; 

const FeaturedAlgosSection = () => {
  const featuredData = [
    {
      type: 'highest-win',
      title: 'Midcap Nifty Option Scalper CE',
      author: 'Stockwiz Tech. LLP',
      statLabel: 'Win Rate',
      statValue: '+80.89%',
      logo: algoLogo
    },
    {
      type: 'most-deployed',
      title: 'Midcap Nifty Option Scalper CE',
      author: 'Stockwiz Tech. LLP',
      statLabel: 'Most Deployed',
      statValue: '2,480 Users',
      logo: algoLogo
    },
    {
      type: 'most-profitable',
      title: 'Midcap Nifty Option Scalper CE',
      author: 'Stockwiz Tech. LLP',
      statLabel: 'Most Profitable',
      statValue: '+₹2,480',
      logo: algoLogo
    }
  ];

  return (
    <div style={{
      background: '#101010',
      borderRadius: '12px',
      border: '1px solid #303030',
      padding: '20px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <img src={trophyIcon} alt="trophy" style={{ width: '22px' }} />
        <h2 style={{
          color: '#FFFFFF',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '600',
          margin: 0
        }}>
          Featured Algos 🔥
        </h2>
        <img src={infoIcon} alt="info" style={{ width: '16px', opacity: 0.6, cursor: 'pointer' }} />
      </div>

      <div style={{ display: 'flex', gap: '16px' }}>
        {featuredData.map((data, index) => (
          <FeaturedCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedAlgosSection;