import searchIcon from '../../assets/icons/search-icon.svg';

const SearchInput = () => {
  return (
    <div style={{
      margin: '0 16px 12px 16px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }}>
      <input
        type="text"
        placeholder="Search"
        style={{
          width: '100%',
          backgroundColor: '#2B2B2B',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 34px 8px 10px',
          color: 'white',
          outline: 'none',
          fontSize: '13px',
          fontWeight: '400',
          lineHeight: '18px',
          letterSpacing: '0%',
          fontFamily: 'inherit'
        }}
      />

      <img
        src={searchIcon}
        alt="search"
        style={{
          position: 'absolute',
          right: '10px',
          width: '14px',
          height: '14px',
          cursor: 'pointer'
        }}
      />

      <style dangerouslySetInnerHTML={{__html: "input::placeholder { color: #C7C7C7; opacity: 1; }"}} />
    </div>
  );
};

export default SearchInput;