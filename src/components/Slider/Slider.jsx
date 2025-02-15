import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import styles from './Slider.module.scss';

export default function Slider({ sliderTitle, sliderLabels, children }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.slider_container}>
      {sliderTitle && (
        <div style={{ textAlign: 'center', fontSize: '24px', fontWeight: '800', color: 'green' }}>{sliderTitle}</div>
      )}

      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper2}
      >
        {children && children.map((child, index) => <SwiperSlide key={index}>{child}</SwiperSlide>)}
      </Swiper>

      {sliderLabels && (
        <div className={styles.slider_bottom}>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.mySwiper}
          >
            {sliderLabels.map((item, index) => (
              <SwiperSlide key={index}>
                <div>{item.title}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
