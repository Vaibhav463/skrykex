const Button = ({ children, variant = 'primary', style }) => {
  const isWhite = variant === 'white';

  return (
    <button style={{
      width: '100%',
      padding: '12px',
      borderRadius: '24px', // High border radius as seen in Figma
      border: 'none',
      backgroundColor: isWhite ? '#FFFFFF' : '#00172D',
      color: isWhite ? '#00172D' : '#FFFFFF',
      fontFamily: 'DM Sans',
      fontWeight: '600',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'transform 0.1s active',
      ...style
    }}>
      {children}
    </button>
  );
};

export default Button;