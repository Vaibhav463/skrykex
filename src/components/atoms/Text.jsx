const Text = ({ children, size = '14px', color = 'var(--text-main)', weight = '500' }) => {
  return (
    <span style={{ fontSize: size, color: color, fontWeight: weight }}>
      {children}
    </span>
  );
};

export default Text;