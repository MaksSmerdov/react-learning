import { useState } from 'react';
import { useFetchData } from '../Hooks/useFetchData';
import Table from '../Table/Table';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import styles from './SliderSection.module.scss';

export default function SliderSection({ id }) {
  const { loading, data } = useFetchData(id);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sliderLabels = [{ title: 'Температуры' }, { title: 'Давления' }, { title: 'Разрежения' }];

  return (
    <>
      {loading && <p>Loader...</p>}
      {!loading && (
        <>
          <div>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className={styles.mySwiper2}
            >
              <SwiperSlide>
                <Table sensorData={data.temperatures} unit="°C" title="Температуры" />
              </SwiperSlide>
              <SwiperSlide>
                <Table sensorData={data.pressures} unit="кгс/м2" title="Давления" />
              </SwiperSlide>
              <SwiperSlide>
                <Table sensorData={data.vacuums} unit="кгс/см2" title="Разрежения" />
              </SwiperSlide>
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={styles.mySwiper}
            >
              {sliderLabels.map((item, index) => (
                <SwiperSlide key={index} className={styles.thumbSlide}>
                  <div className={styles.label}>{item.title}</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </>
  );
}
