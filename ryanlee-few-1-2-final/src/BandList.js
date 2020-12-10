import React from 'react';
import Band from './Band';
import data from './metal.json';
import './BandList.css';

function BandList() {
  const space = data.map(({ band_name, formed, origin, fans }) => {
    return (
      <div className='BandList'>
        <div className='ListItems'>
          <Band
            band_name={band_name}
            formed={formed}
            origin={origin}
            fans={fans}
          />
        </div>
      </div>
    );
  });
  return <div className='BandList'>{space}</div>;
}
export default BandList;
