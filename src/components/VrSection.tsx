import { useFetchData } from './Hooks/useFetchData';
import Table from './Table/Table';
import Slider from './Slider/Slider';

interface SensorData {
  [key: string]: string | number;
}

interface FetchData {
  temperatures: SensorData;
  pressures: SensorData;
  vacuums: SensorData;
}

interface VrSectionType {
  id: string;
  title: string;
}

export default function VrSection({ id, title }: VrSectionType) {
  const { loading, data } = useFetchData<FetchData>(id);
  const sliderLabels = [{ title: 'Температуры' }, { title: 'Давления' }, { title: 'Разрежения' }];

  if (loading) return <p>Loader...</p>;

  return (
    <Slider sliderTitle={title} sliderLabels={sliderLabels}>
      {[
        <Table key="temp" sensorData={data.temperatures} unit="°C" title="Температуры" />,
        <Table key="press" sensorData={data.pressures} unit="кгс/м2" title="Давления" />,
        <Table key="vac" sensorData={data.vacuums} unit="мм" title="Разрежения" />,
      ]}
    </Slider>
  );
}
