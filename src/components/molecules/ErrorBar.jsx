import React from 'react';
import errorIcon from '../../assets/icons/error-icon.svg';

const ErrorBar = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      background: '#3C0101', 
      padding: '12px 20px',
      borderRadius: '12px',
      marginBottom: '24px',
      width: '100%',
      boxSizing: 'border-box',
      border: '1px solid rgba(255, 0, 0, 0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Error Icon from Assets */}
        <img 
          src={errorIcon} 
          alt="error" 
          style={{ width: '20px', height: '20px' }} 
        />
        
        <p style={{
          fontFamily: 'DM Sans',
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#C7C7C7',
          margin: 0
        }}>
          <strong style={{ fontWeight: '700' , color: '#FFFFFF'}}>Order failed</strong> Order failed in 3 strategies have failed orders
        </p>
      </div>

      <button style={{
        backgroundColor: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        padding: '6px 14px',
        fontFamily: 'DM Sans',
        fontWeight: '600',
        fontSize: '14px',
        color: '#000000',
        cursor: 'pointer',
        marginLeft: '20px' 
      }}>
        View All
      </button>
    </div>
  );
};

export default ErrorBar;