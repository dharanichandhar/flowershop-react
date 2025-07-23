import React, { useEffect } from 'react';
//import Carousel from 'better-react-carousel';
import './Gallery.css';
import { useNavigate } from 'react-router-dom';

const images = [
  "https://thumbs.dreamstime.com/b/vibrant-white-easter-lily-blooming-sunny-garden-symbolizing-purity-generated-ai-vibrant-white-easter-lily-blooming-sunny-362779667.jpg",
  "https://scentlodgeedit.com/wp-content/uploads/2023/08/dave-news-lead-image.png",
  "https://imgcdn.floweraura.com/DSC_1227_1.jpg",
  "https://irishomefragrances.com/cdn/shop/files/IAPT0764US-1.webp?v=1723962691",
  "https://hips.hearstapps.com/hmg-prod/images/morning-glories-65bd6dcc15366.jpg",
  "https://www.birdsandblooms.com/wp-content/uploads/2021/03/253800744_1_Ashley__Harbison__BNB_BYPC2020.jpg?fit=680%2C995",
  "https://hips.hearstapps.com/hmg-prod/images/assortment-of-pink-shaded-zinnias-in-a-flower-patch-royalty-free-image-155285202-1554737403.jpg?crop=0.668xw:1.00xh;0.175xw,0&resize=980:*",
  "https://plantskingdom.in/cdn/shop/products/WhatsAppImage2022-07-28at4.38.17PM_3.jpg?v=1659536998&width=533",
  // ... repeat if you want to extend or add more
];

const Gallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('name')) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="gallery_container" style={{ padding: '20px' }}>
      <Carousel
        cols={3}
        rows={2}
        gap={15}
        loop
        autoplay={3000}
        showDots={true}
        mobileBreakpoint={640}
      >
        {images.map((src, index) => (
          <Carousel.Item key={index}>
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
