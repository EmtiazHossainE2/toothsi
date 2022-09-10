import React from 'react';

const Footer = () => {
  const currentY = new Date().getFullYear();
  return (
    <div className='text-center pt-5'>
      <p className='text-sm capitalize'>Copyright © {currentY} - All right reserved <a href="https://www.linkedin.com/in/emtiazhossaine2/" className='text-[#2554e1]' target="_blank" rel="noopener noreferrer">Emtiaz</a> </p>
    </div>
  );
};

export default Footer;