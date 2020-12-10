import React from 'react';
import './Band.css';

function Band(props) {
  const { band_name, formed, origin, fans, style } = props;
  return (
    <div className='Band'>
      <div className='head'>
        <h1>{band_name}</h1>
      </div>
      <p>Formed: {formed}</p>
      <p>{origin}</p>
      <p>Style: {style}</p>
      <p>Fans: {fans}</p>
    </div>
  );
}
export default Band;
