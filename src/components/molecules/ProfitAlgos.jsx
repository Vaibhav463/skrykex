import React, { useState } from 'react';
import virtualIcon from '../../assets/icons/virtual.svg';
import liveIcon from '../../assets/icons/live.svg';
import lightIcon from '../../assets/icons/light.svg';
import algoLogo1 from '../../assets/icons/algologo1.svg';
import algoLogo2 from '../../assets/icons/algologo2.svg';
import algoLogo3 from '../../assets/icons/algologo3.svg';
import algoLogo4 from '../../assets/icons/algologo1.svg';
import algoLogo5 from '../../assets/icons/algologo2.svg';

import deployedIcon1 from '../../assets/icons/deployedicon1.svg';
import deployedIcon2 from '../../assets/icons/deployedicon2.svg';
import deployedIcon3 from '../../assets/icons/deployedicon1.svg'; 
import deployedIcon4 from '../../assets/icons/deployedicon2.svg';

const StatBox = ({ label, value, valueColor = '#FFFFFF' }) => (
  <div style={{
    background: '#000000',
    border: '1px solid #474747',
    borderRadius: '4px',
    padding: '0 10px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    height: '34px',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
  }}>
    <span style={{ 
      fontFamily: 'DM Sans', fontWeight: '500', fontSize: '14px', 
      lineHeight: '100%', color: '#C7C7C7' 
    }}>{label}</span>
    <span style={{ 
      fontFamily: 'Inter', fontWeight: '700', fontSize: '14px', 
      lineHeight: '100%', color: valueColor 
    }}>{value}</span>
  </div>
);

const ProfitAlgos = () => {
  const [activeTab, setActiveTab] = useState('live');
  const [rightFilter, setRightFilter] = useState('All');

  const algoRows = [
    { name: 'Momentum Surge', multiplier: '2X', pl: '+₹1,50,000', logo: algoLogo1, action: 'square-off' },
    { name: 'Momentum Surge', multiplier: '2X', pl: '+₹1,50,000', logo: algoLogo2, action: 'view-details' },
    { name: 'Momentum Surge', multiplier: '2X', pl: '+₹1,50,000', logo: algoLogo3, action: 'square-off' },
    { name: 'Momentum Surge', multiplier: '2X', pl: '+₹1,50,000', logo: algoLogo4, action: 'square-off' },
    { name: 'Momentum Surge', multiplier: '2X', pl: '+₹1,50,000', logo: algoLogo5, action: 'square-off' },
    { name: 'Momentum Surge', multiplier: '2X', pl: '+₹1,50,000', logo: algoLogo1, action: 'square-off' },
    { name: 'Momentum Surge', multiplier: '2X', pl: '+₹1,50,000', logo: algoLogo2, action: 'square-off' },
    { name: 'Momentum Surge', multiplier: '2X', pl: '+₹1,50,000', logo: algoLogo3, action: 'square-off' },
  ];

  const deployedAlgos = [
    { name: 'Momentum AlgoFolio', date: '20th Nov 25 | 12:00 PM', status: 'Live', type: 'Live', pl: '+₹11,50,000', icon: deployedIcon1 },
    { name: 'Trend Individual Algo', date: '20th Nov 25 | 12:00 PM', status: 'Live', type: 'Live', pl: '+₹1,50,000', icon: deployedIcon3 },
    { name: 'SMC AlgoFolio', date: '20th Nov 25 | 12:00 PM', status: 'Waiting', type: 'Virtual', pl: '+₹1,50,000', icon: deployedIcon2 },
    { name: 'Trend Individual Algo', date: '20th Nov 25 | 12:00 PM', status: 'Stopped', type: 'Live', pl: '+₹1,50,000', icon: deployedIcon3 },
    { name: 'SMC AlgoFolio', date: '20th Nov 25 | 12:00 PM', status: 'Waiting', type: 'Virtual', pl: '+₹1,50,000', icon: deployedIcon2 },
    { name: 'Momentum AlgoFolio', date: '20th Nov 25 | 12:00 PM', status: 'Live', type: 'Live', pl: '+₹11,50,000', icon: deployedIcon1 },
    { name: 'SMC AlgoFolio', date: '20th Nov 25 | 12:00 PM', status: 'Waiting', type: 'Virtual', pl: '+₹1,50,000', icon: deployedIcon2 },
    { name: 'Trend Individual Algo', date: '20th Nov 25 | 12:00 PM', status: 'Live', type: 'Live', pl: '+₹1,50,000', icon: deployedIcon3 },
    { name: 'SMC AlgoFolio', date: '20th Nov 25 | 12:00 PM', status: 'Waiting', type: 'Virtual', pl: '+₹1,50,000', icon: deployedIcon2 },
    { name: 'SMC AlgoFolio', date: '20th Nov 25 | 12:00 PM', status: 'Waiting', type: 'Virtual', pl: '+₹1,50,000', icon: deployedIcon4 },
    { name: 'Trend Individual Algo', date: '20th Nov 25 | 12:00 PM', status: 'Live', type: 'Live', pl: '+₹1,50,000', icon: deployedIcon3 },
  ];

  const renderStatusBadge = (status) => {
    let bg = '#E01212';
    let dotColor = '#FFFFFF';
    let label = 'Live';

    if (status === 'Waiting') {
      bg = '#3A2D00';
      dotColor = '#FFD700';
      label = 'Waiting for next Signal';
    } else if (status === 'Stopped') {
      bg = '#3C0101';
      dotColor = '#E01212';
      label = 'Stopped';
    }

    return (
      <div style={{
        background: bg,
        padding: '2px 8px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        height: '18px'
      }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: dotColor }} />
        <span style={{ color: '#FFFFFF', fontSize: '10px', fontWeight: '600', whiteSpace: 'nowrap' }}>{label}</span>
      </div>
    );
  };

  return (
    <div style={{
      background: '#101010', 
      borderRadius: '12px',
      border: '1px solid #282828',
      padding: '10px',
      display: 'flex',
      gap: '16px',
      width: '100%',
      boxSizing: 'border-box',
      marginTop: '20px'
    }}>
      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #474747; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #555555; }
      `}</style>
      
      <div style={{
        borderRadius: '12px',
        padding: '12px',
        background: 'radial-gradient(84.16% 60.29% at 50% 50%, #000A26 0%, #000000 100%)',
        border: '1px solid',
        borderImageSource: 'radial-gradient(583.81% 645.5% at 50% 46.8%, rgba(255, 255, 255, 0.61) 0%, rgba(153, 153, 153, 0) 100%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '599px'
      }}>
        <div style={{
          width: '575px', height: '164px', background: '#FFFFFF12', borderRadius: '8px', padding: '16px 12px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3 style={{ margin: 0, fontFamily: 'DM Sans', fontWeight: '600', fontSize: '20px', color: '#FFFFFF' }}>Overall Profit/Loss</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: '#FFFFFF' }}>
                   <span style={{ fontSize: '14px' }}>ⓘ</span>
                   <span style={{ fontSize: '12px', fontWeight: '500' }}>View More</span>
                </div>
              </div>
              <div style={{ marginTop: '10px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontFamily: 'Inter', fontWeight: '700', fontSize: '24px', color: '#22D606' }}>+₹1,50,000.84</span>
                <span style={{ fontSize: '14px', fontWeight: '400', color: '#FFFFFF', textDecoration: 'underline', cursor: 'pointer' }}>in 5 transactions</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ display: 'flex', background: '#2B2B2B', padding: '4px', borderRadius: '6px', gap: '4px', height: '36px', boxSizing: 'border-box' }}>
                <button onClick={() => setActiveTab('live')} style={{ background: activeTab === 'live' ? '#FFFFFF' : 'transparent', color: activeTab === 'live' ? '#000' : '#808191', border: 'none', padding: '0 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Live <img src={liveIcon} alt="live" width="14" style={{ filter: activeTab === 'live' ? 'none' : 'invert(1)' }} />
                </button>
                <button onClick={() => setActiveTab('virtual')} style={{ background: activeTab === 'virtual' ? '#FFFFFF' : 'transparent', color: activeTab === 'virtual' ? '#000' : '#808191', border: 'none', padding: '0 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Virtual <img src={virtualIcon} alt="virtual" width="14" style={{ filter: activeTab === 'virtual' ? 'invert(1)' : 'none' }} />
                </button>
              </div>
              <div style={{ width: '100%', height: '100%', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
                <img src={lightIcon} alt="lightning" style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
          </div>
          <div style={{ color: '#FFFFFF', fontSize: '11px', fontFamily: 'Inter', opacity: 0.9 }}>
            Last Updated: <span style={{ fontWeight: '600' }}>25th Oct 2025 | 11:53 PM</span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <StatBox label="Booked P&L" value="+₹1,50,000.84" valueColor="#22D606" />
            <StatBox label="Cap Deployed" value="₹1,50,000.84" valueColor="#FFFFFF" />
            <StatBox label="Active Algos" value="4" valueColor="#FFFFFF" />
          </div>
        </div>

        <div style={{ width: '575px', background: '#12182D', borderRadius: '8px', padding: '16px 12px', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', paddingBottom: '12px', paddingRight: '6px' }}>
            <span style={{ flex: '2', color: '#C7C7C7', fontSize: '14px', fontWeight: '500' }}>Algo Name</span>
            <span style={{ flex: '0.8', color: '#C7C7C7', fontSize: '14px', textAlign: 'center', fontWeight: '500' }}>Multiplier</span>
            <span style={{ flex: '1.2', color: '#C7C7C7', fontSize: '14px', textAlign: 'center', fontWeight: '500' }}>P&L</span>
            <span style={{ flex: '1', minWidth: '95px' }}></span>
          </div>
          <div className="custom-scroll" style={{ height: '240px', overflowY: 'auto', paddingRight: '4px' }}>
            {algoRows.map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '12px 0', borderTop: '1px solid rgba(255,255,255,0.08)', whiteSpace: 'nowrap' }}>
                <div style={{ flex: '2', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={row.logo} alt="algo" style={{ width: '24px', height: '24px' }} />
                  <span style={{ color: '#FFFFFF', fontSize: '14px', fontFamily: 'DM Sans', fontWeight: '500' }}>{row.name}</span>
                </div>
                <div style={{ flex: '0.8', textAlign: 'center' }}>
                    <span style={{ color: '#FFFFFF', fontSize: '14px', fontFamily: 'Inter', fontWeight: '500' }}>{row.multiplier}</span>
                </div>
                <div style={{ flex: '1.2', textAlign: 'center' }}>
                   <span style={{ color: '#22D606', fontWeight: '700', fontSize: '14px', fontFamily: 'Inter' }}>{row.pl}</span>
                </div>
                <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', minWidth: '95px' }}>
                  {row.action === 'view-details' ? (
                    <span style={{ color: '#FFFFFF', fontSize: '12px', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Inter' }}>View Details</span>
                  ) : (
                    <button style={{ background: 'rgba(224, 18, 18, 0.1)', border: '1px solid #E01212', color: '#E01212', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ fontSize: '14px' }}>⎆</span> Square Off
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ 
        flex: 1, 
        background: '#000000', 
        borderRadius: '12px', 
        border: '1px solid #474747', 
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{  width: '30px', height: '30px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={lightIcon} alt="deploy" style={{ width: '100%' }} />
            </div>
            <h3 style={{ margin: 0, fontFamily: 'DM Sans', fontWeight: '600', fontSize: '18px', color: '#FFFFFF' }}>Deployed Algos</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: '#FFFFFF', opacity: 0.7 }}>
               <span style={{ fontSize: '12px' }}>ⓘ View More</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '6px' }}>
            {['All', 'Active', 'Paused', 'Stopped'].map((filter) => (
              <button 
                key={filter}
                onClick={() => setRightFilter(filter)}
                style={{
                  background: rightFilter === filter ? '#FFFFFF' : 'transparent',
                  color: rightFilter === filter ? '#000000' : '#FFFFFF',
                  border: rightFilter === filter ? 'none' : '1px solid #474747',
                  borderRadius: '20px',
                  padding: '4px 12px',
                  fontSize: '11px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="custom-scroll" style={{ height: '420px', overflowY: 'auto', paddingRight: '4px' }}>
          {deployedAlgos.map((algo, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 0',
              borderBottom: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={algo.icon} alt="algo" style={{ width: '36px', height: '36px' }} />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '600', fontFamily: 'DM Sans' }}>{algo.name}</span>
                    {renderStatusBadge(algo.status)}
                  </div>
                  <div style={{ color: '#808191', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <img src={lightIcon} style={{ width: '10px', opacity: 0.6 }} /> Deployed on: <span style={{ color: '#FFFFFF' }}>{algo.date}</span>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right', display: 'flex', gap: '20px' }}>
                <div>
                  <div style={{ color: '#C7C7C7', fontSize: '11px', marginBottom: '4px' }}>Deployment Type</div>
                  <div style={{ 
                    background: algo.type === 'Virtual' ? '#612A00' : 'rgba(53, 93, 239, 0.1)', 
                    color: algo.type === 'Virtual' ? '#FFD700' : '#355DEF', 
                    fontSize: '10px', 
                    padding: '2px 8px', 
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    justifyContent: 'center',
                    border: algo.type === 'Virtual' ? '1px solid #FFD700' : '1px solid #355DEF'
                  }}>
                    <img src={algo.type === 'Live' ? liveIcon : virtualIcon} style={{ 
                        width: '10px', 
                        filter: algo.type === 'Virtual' ? 'none' : 'invert(27%) sepia(85%) saturate(2344%) hue-rotate(221deg) brightness(98%) contrast(93%)' 
                    }} /> {algo.type}
                  </div>
                </div>
                <div style={{ minWidth: '80px' }}>
                  <div style={{ color: '#C7C7C7', fontSize: '11px', marginBottom: '4px' }}>Total P&L</div>
                  <div style={{ color: '#22D606', fontWeight: '700', fontSize: '14px' }}>{algo.pl}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfitAlgos;