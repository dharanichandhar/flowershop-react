import React, {useEffect}from 'react'
//import Carousel from 'better-react-carousel'; // if not already imported globally
import './Gallery.css'
import { useNavigate } from 'react-router-dom';


const Gallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('name');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <div className="gallery_container">
        <Carousel cols={3} rows={2} gap={15} loop autoplay={3000}>
        <Carousel.Item>
          <img src="https://thumbs.dreamstime.com/b/vibrant-white-easter-lily-blooming-sunny-garden-symbolizing-purity-generated-ai-vibrant-white-easter-lily-blooming-sunny-362779667.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://scentlodgeedit.com/wp-content/uploads/2023/08/dave-news-lead-image.png" height="400px" width="400px" alt=""  />
        </Carousel.Item>

         <Carousel.Item>
          <img src="https://imgcdn.floweraura.com/DSC_1227_1.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

          <Carousel.Item>
          <img src="https://irishomefragrances.com/cdn/shop/files/IAPT0764US-1.webp?v=1723962691" height="400px" width="400px" alt=""  />
        </Carousel.Item>

           <Carousel.Item>
          <img src="https://hips.hearstapps.com/hmg-prod/images/morning-glories-65bd6dcc15366.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://www.birdsandblooms.com/wp-content/uploads/2021/03/253800744_1_Ashley__Harbison__BNB_BYPC2020.jpg?fit=680%2C995" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://hips.hearstapps.com/hmg-prod/images/assortment-of-pink-shaded-zinnias-in-a-flower-patch-royalty-free-image-155285202-1554737403.jpg?crop=0.668xw:1.00xh;0.175xw,0&resize=980:*" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://plantskingdom.in/cdn/shop/products/WhatsAppImage2022-07-28at4.38.17PM_3.jpg?v=1659536998&width=533" height="400px" width="400px" alt=""  />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://thumbs.dreamstime.com/b/vibrant-white-easter-lily-blooming-sunny-garden-symbolizing-purity-generated-ai-vibrant-white-easter-lily-blooming-sunny-362779667.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://scentlodgeedit.com/wp-content/uploads/2023/08/dave-news-lead-image.png" height="400px" width="400px" alt=""  />
        </Carousel.Item>

         <Carousel.Item>
          <img src="https://imgcdn.floweraura.com/DSC_1227_1.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

          <Carousel.Item>
          <img src="https://irishomefragrances.com/cdn/shop/files/IAPT0764US-1.webp?v=1723962691" height="400px" width="400px" alt=""  />
        </Carousel.Item>

           <Carousel.Item>
          <img src="https://hips.hearstapps.com/hmg-prod/images/morning-glories-65bd6dcc15366.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://www.birdsandblooms.com/wp-content/uploads/2021/03/253800744_1_Ashley__Harbison__BNB_BYPC2020.jpg?fit=680%2C995" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://hips.hearstapps.com/hmg-prod/images/assortment-of-pink-shaded-zinnias-in-a-flower-patch-royalty-free-image-155285202-1554737403.jpg?crop=0.668xw:1.00xh;0.175xw,0&resize=980:*" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://plantskingdom.in/cdn/shop/products/WhatsAppImage2022-07-28at4.38.17PM_3.jpg?v=1659536998&width=533" height="400px" width="400px" alt=""  />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://thumbs.dreamstime.com/b/vibrant-white-easter-lily-blooming-sunny-garden-symbolizing-purity-generated-ai-vibrant-white-easter-lily-blooming-sunny-362779667.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://scentlodgeedit.com/wp-content/uploads/2023/08/dave-news-lead-image.png" height="400px" width="400px" alt=""  />
        </Carousel.Item>

         <Carousel.Item>
          <img src="https://imgcdn.floweraura.com/DSC_1227_1.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

          <Carousel.Item>
          <img src="https://irishomefragrances.com/cdn/shop/files/IAPT0764US-1.webp?v=1723962691" height="400px" width="400px" alt=""  />
        </Carousel.Item>

           <Carousel.Item>
          <img src="https://hips.hearstapps.com/hmg-prod/images/morning-glories-65bd6dcc15366.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://www.birdsandblooms.com/wp-content/uploads/2021/03/253800744_1_Ashley__Harbison__BNB_BYPC2020.jpg?fit=680%2C995" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://hips.hearstapps.com/hmg-prod/images/assortment-of-pink-shaded-zinnias-in-a-flower-patch-royalty-free-image-155285202-1554737403.jpg?crop=0.668xw:1.00xh;0.175xw,0&resize=980:*" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://plantskingdom.in/cdn/shop/products/WhatsAppImage2022-07-28at4.38.17PM_3.jpg?v=1659536998&width=533" height="400px" width="400px" alt=""  />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://thumbs.dreamstime.com/b/vibrant-white-easter-lily-blooming-sunny-garden-symbolizing-purity-generated-ai-vibrant-white-easter-lily-blooming-sunny-362779667.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://scentlodgeedit.com/wp-content/uploads/2023/08/dave-news-lead-image.png" height="400px" width="400px" alt=""  />
        </Carousel.Item>

         <Carousel.Item>
          <img src="https://imgcdn.floweraura.com/DSC_1227_1.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

          <Carousel.Item>
          <img src="https://irishomefragrances.com/cdn/shop/files/IAPT0764US-1.webp?v=1723962691" height="400px" width="400px" alt=""  />
        </Carousel.Item>

           <Carousel.Item>
          <img src="https://hips.hearstapps.com/hmg-prod/images/morning-glories-65bd6dcc15366.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://www.birdsandblooms.com/wp-content/uploads/2021/03/253800744_1_Ashley__Harbison__BNB_BYPC2020.jpg?fit=680%2C995" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://hips.hearstapps.com/hmg-prod/images/assortment-of-pink-shaded-zinnias-in-a-flower-patch-royalty-free-image-155285202-1554737403.jpg?crop=0.668xw:1.00xh;0.175xw,0&resize=980:*" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://plantskingdom.in/cdn/shop/products/WhatsAppImage2022-07-28at4.38.17PM_3.jpg?v=1659536998&width=533" height="400px" width="400px" alt=""  />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://thumbs.dreamstime.com/b/vibrant-white-easter-lily-blooming-sunny-garden-symbolizing-purity-generated-ai-vibrant-white-easter-lily-blooming-sunny-362779667.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://scentlodgeedit.com/wp-content/uploads/2023/08/dave-news-lead-image.png" height="400px" width="400px" alt=""  />
        </Carousel.Item>

         <Carousel.Item>
          <img src="https://imgcdn.floweraura.com/DSC_1227_1.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

          <Carousel.Item>
          <img src="https://irishomefragrances.com/cdn/shop/files/IAPT0764US-1.webp?v=1723962691" height="400px" width="400px" alt=""  />
        </Carousel.Item>

           <Carousel.Item>
          <img src="https://hips.hearstapps.com/hmg-prod/images/morning-glories-65bd6dcc15366.jpg" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://www.birdsandblooms.com/wp-content/uploads/2021/03/253800744_1_Ashley__Harbison__BNB_BYPC2020.jpg?fit=680%2C995" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://hips.hearstapps.com/hmg-prod/images/assortment-of-pink-shaded-zinnias-in-a-flower-patch-royalty-free-image-155285202-1554737403.jpg?crop=0.668xw:1.00xh;0.175xw,0&resize=980:*" height="400px" width="400px" alt=""  />
        </Carousel.Item>

            <Carousel.Item>
          <img src="https://plantskingdom.in/cdn/shop/products/WhatsAppImage2022-07-28at4.38.17PM_3.jpg?v=1659536998&width=533" height="400px" width="400px" alt=""  />
        </Carousel.Item>




      </Carousel>
      </div>
    </>
  )
}

export default Gallery
