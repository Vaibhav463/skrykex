import React from 'react';
import Logo from '../atoms/Logo';
import SidebarItem from '../molecules/SidebarItem';
import SearchInput from '../atoms/SearchInput';
import ContactCard from '../molecules/ContactCard';
import LiveCredits from '../molecules/LiveCredits';
import accountIcon from '../../assets/icons/icon-account.svg';
import closeIcon from '../../assets/icons/close-icon.svg';

const Sidebar = () => {
  return (
    <aside 
      style={{
        width: '260px',
        height: '100vh',
        backgroundColor: '#101010',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 100,
        borderRight: '1px solid #23262F',

        overflow: 'visible', 
      }}
    >
      <button style={{
        position: 'absolute',
        right: '-14px', 
        top: '84px',    
        width: '28px',
        height: '28px',
        backgroundColor: '#111315',
        border: '1px solid #23262F',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 101, 
        padding: 0,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
      }}>
        <img 
          src={closeIcon} 
          alt="toggle" 
          style={{ width: '28px', height: '28px' }} 
        />
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div 
          className="hide-scrollbar"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'visible',
            overflowX: 'hidden'
          }}
        >
          <div style={{ flexShrink: 0, paddingBottom: '6px' }}>
            <Logo />
            <SearchInput />
          </div>
          
          <div style={{ flexShrink: 0, paddingTop: '6px' }}>
            <SidebarItem label="Dashboard" iconName="icon-dashboard" active={true} />
            <SidebarItem label="Portfolio" iconName="icon-portfolio" />
            <SidebarItem label="Pre-Built Algos" iconName="icon-portfolio" hasDropdown={true} />
            <SidebarItem label="My Algos" iconName="icon-my-algos" />
            <SidebarItem label="My Account" iconName="icon-my-account" />
          </div>
        </div>

        <div style={{ flexShrink: 0 }}>
          <div style={{ padding: '8px 12px' }}>
            <ContactCard />
          </div>

          <div style={{ padding: '0 12px 8px 12px' }}>
            <LiveCredits />
          </div>

          <div style={{ 
            padding: '12px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img 
                src={accountIcon} 
                alt="John Smith" 
                style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} 
              />
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#FFFFFF', fontFamily: 'DM Sans' }}>
                John Smith
              </span>
            </div>
            
            <button style={{
              width: '34px', height: '34px', backgroundColor: '#2B2B2B', border: 'none', borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9BA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </aside>
  );
};

export default Sidebar;