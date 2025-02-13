import { useRef, useState } from 'react';
import Table from './Table/Table';
import { useFetchData } from './Hooks/useFetchData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

export default function VrSection({ id, title }) {
  const { loading, data } = useFetchData(id);
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const processedLevels = data.levels
    ? Object.entries(data.levels).reduce((acc, [key, { value }]) => {
        acc[key] = value;
        return acc;
      }, {})
    : {};

  return (
    <section>
      {loading && <p style={{ fontSize: '100px' }}>Loading...</p>}

      {!loading && (
        <>
          <div style={{ textAlign: 'center', fontSize: '24px', fontWeight: '800', color: 'green' }}>{title}</div>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={50}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <Table sensorData={data.temperatures} unit="°C" title="Температуры" />
              </SwiperSlide>
              <SwiperSlide>
                <Table sensorData={data.pressures} unit="кгс/м2" title="Давления" />
              </SwiperSlide>
            </Swiper>

            <div style={{ position: 'relative', width: '100%', height: '250px' }}>
              <Swiper
                slidesPerView={1}
                spaceBetween={50}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                modules={[Navigation]}
                style={{ height: '100%' }}
                className="second-swiper"
              >
                <SwiperSlide>
                  <Table sensorData={processedLevels} unit="мм" title="Уровни" />
                </SwiperSlide>
                <SwiperSlide>
                  <Table sensorData={data.vacuums} unit="кгс/см2" title="Разрежения" />
                </SwiperSlide>
              </Swiper>
              <div>
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  disabled={isBeginning}
                  className="icon-button prev-button"
                >
                  <Icon name="arrowLeft" />
                </button>

                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  disabled={isEnd}
                  className="icon-button next-button"
                >
                  <Icon name="arrowRight" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
