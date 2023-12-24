import React, { useEffect } from 'react';

const AdUnit = ({ adSlot }) => {
  useEffect(() => {
    // Ensure AdSense script is loaded before rendering ads
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-8500560174661446" // Replace with your AdSense client ID
      data-ad-slot={adSlot}
      data-ad-format="auto"
    ></ins>
  );
};

export default AdUnit;
