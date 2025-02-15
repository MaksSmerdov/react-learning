import { useFetchData } from './Hooks/useFetchData';
import Table from './Table/Table';
import Slider from './Slider/Slider';

export default function MpaSection({ id, title }) {
  const { loading, data } = useFetchData(id);
  const sliderLabels = [{ title: 'Температуры' }, { title: 'Давления' }];

  if (loading) return <p>Loader...</p>;

  return (
    <Slider sliderTitle={title} sliderLabels={sliderLabels}>
      {[
        <Table key="temp" sensorData={data.temperatures} unit="°C" title="Температуры" />,
        <Table key="press" sensorData={data.pressures} unit="кгс/м2" title="Давления" />,
      ]}
    </Slider>
  );
}
