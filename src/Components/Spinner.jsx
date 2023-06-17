import React from 'react';
import loading from './ZZ5H.gif';

export default function Spinner() {
  return (
    <div className='text-center'>
        <img src={loading} alt="Loading" />
    </div>
  );
}
