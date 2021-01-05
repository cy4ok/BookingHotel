// import Swiper JS
/* import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import './style.css';
/* import '../package/swiper-bundle.min.js'

function GallerySwiper() {
    let galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    let galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
            
        },
    });

    return (
        <div className="h-20 wrap">
            <div className="swiper-container gallery-top h-20">
                <div className="swiper-wrapper">
                    <div className="swiper-slide superior-img1"></div>
                    <div className="swiper-slide superior-img2"></div>
                    <div className="swiper-slide superior-img3"></div>
                    <div className="swiper-slide superior-img4"></div>
                    <div className="swiper-slide superior-img5"></div>
                    <div className="swiper-slide superior-img6"></div>
                </div>
                 Add Arrows 
                <div className="swiper-button-next swiper-button-white"></div>
                <div className="swiper-button-prev swiper-button-white"></div>
            </div>
            <div className="swiper-container gallery-thumbs">
                <div className="swiper-wrapper">
                    <div className="swiper-slide superior-img1 w-1/4 "></div>
                    <div className="swiper-slide superior-img2 w-1/4"></div>
                    <div className="swiper-slide superior-img3 w-1/4"></div>
                    <div className="swiper-slide superior-img4 w-1/4"></div>
                    <div className="swiper-slide superior-img5 w-1/4"></div>
                    <div className="swiper-slide superior-img6 w-1/4"></div>
                </div>
            </div>
        </div>
    ) 
}
*/
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './swiper.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function GallerySwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  const thumbs = [];
  for (let i = 0; i < 5; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <img
          src={`https://picsum.photos/id/${i}/163/100`}
          alt={`Thumbnail ${i}`}
        ></img>
      </SwiperSlide>
    );
  }

 
  return (
    <React.Fragment>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
      >
        {slides}
      </Swiper>

      <Swiper
        id="thumbs"
        spaceBetween={5}
        slidesPerView={3}
        onSwiper={setThumbsSwiper}
      >
        {thumbs}
      </Swiper>

   
    </React.Fragment>
  );
}
export default GallerySwiper;
