import React, { useState } from 'react';

function Busqueda({ onSearch, lastSearch, sections }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      console.log('Search Query:', query);
      onSearch(query, sections);
      setQuery('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <li className="container-1">
      <input
        type="search"
        id="search"
        placeholder={`Buscar ${lastSearch || ''}`}
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Buscar</button>
    </li>
  );
}

export default Busqueda;