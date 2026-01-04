import logoSvg from '../../assets/logo.svg';

const Logo = () => {
  return (
    <div style={{ 
      padding: '24px 20px', 
      display: 'flex', 
      alignItems: 'center'
    }}>
      <img 
        src={logoSvg} 
        alt="StrykeX Logo" 
        style={{ width: 'auto', height: '32px' }} 
      />
    </div>
  );
};

export default Logo;