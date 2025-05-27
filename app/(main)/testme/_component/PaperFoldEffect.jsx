"use client";
// PaperFoldEffect.jsx
import React, { useState } from 'react';

const PaperFoldEffect = ({ imageSrc }) => {
  const [unfolded, setUnfolded] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-800">
      <div
        className="relative w-[300px] h-[300px] perspective-[1000px] cursor-pointer"
        onClick={() => setUnfolded(!unfolded)}
      >
        {/* Top Left */}
        <div
          className={`absolute w-1/2 h-1/2 top-0 left-0 bg-white origin-bottom-right transition-transform duration-700 ease-in-out shadow-xl ${unfolded ? '-rotate-x-0 -rotate-y-0' : 'rotate-x-90 rotate-y-90'
            }`}
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: '200% 200%',
            backgroundPosition: 'left top',
          }}
        ></div>

        {/* Top Right */}
        <div
          className={`absolute w-1/2 h-1/2 top-0 right-0 bg-white origin-bottom-left transition-transform duration-700 ease-in-out delay-100 shadow-xl ${unfolded ? '-rotate-x-0 -rotate-y-0' : 'rotate-x-90 -rotate-y-90'
            }`}
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: '200% 200%',
            backgroundPosition: 'right top',
          }}
        ></div>

        {/* Bottom Left */}
        <div
          className={`absolute w-1/2 h-1/2 bottom-0 left-0 bg-white origin-top-right transition-transform duration-700 ease-in-out delay-200 shadow-xl ${unfolded ? '-rotate-x-0 -rotate-y-0' : '-rotate-x-90 rotate-y-90'
            }`}
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: '200% 200%',
            backgroundPosition: 'left bottom',
          }}
        ></div>

        {/* Bottom Right */}
        <div
          className={`absolute w-1/2 h-1/2 bottom-0 right-0 bg-white origin-top-left transition-transform duration-700 ease-in-out delay-300 shadow-xl ${unfolded ? '-rotate-x-0 -rotate-y-0' : '-rotate-x-90 -rotate-y-90'
            }`}
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: '200% 200%',
            backgroundPosition: 'right bottom',
          }}
        ></div>
      </div>
    </div>
  );
};

export default PaperFoldEffect;
