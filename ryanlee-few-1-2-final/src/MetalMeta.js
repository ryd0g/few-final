import data from './metal.json';
import './MetalMeta.css';
import React, { useState } from 'react';

function MetalMeta() {
  const [query, setQuery] = useState('');
  return (
    <div className='MetalMeta'>
      <p>Metal Bands 🤘</p>
      <p>Bands: 50</p>{' '}
      <form>
        <input
          value={query}
          placeholder='search'
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
export default MetalMeta;
