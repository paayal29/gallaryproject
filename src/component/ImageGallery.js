import React, { useState } from 'react';
import images from '../images';
import "./ImageGallery.css";

const ImageGallery = () => {
  const [filter, setFilter] = useState('all');

  const filterImages = (category) => {
    setFilter(category);
  };

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div>
      <div className='filter-buttons'>
        <button onClick={() => filterImages('all')}>All</button>
        <button onClick={() => filterImages('nature')}>Nature</button>
        <button onClick={() => filterImages('animal')}>Animal</button>
        <button onClick={() => filterImages('architecture')}>Architecture</button>
        
      </div>
      <div className="image-gallery">
        {filteredImages.map(img => (
          <img  src={img.url}  alt="" />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;