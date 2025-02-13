import { useState } from 'react';
import TabsSection from './components/TabSection';
import Header from './components/Header/Header';
import VrSection from './components/VrSection';
import TaskSection from './components/Tasks/TaskSection';
import styles from './App.module.scss';
import SliderSection from './components/SliderSection/SliderSection';

function App() {
  const [tab, setTab] = useState('mpa');

  return (
    <>
      <Header />
      <main>
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
        <div className={styles['tab__content']}>
          {tab === 'vr' && (
            <>
              <VrSection id={'vr1-data'} title={'ПК №1'} />
              <VrSection id={'vr2-data'} title={'ПК №2'} />
            </>
          )}
          {tab === 'sushilka' && (
            <>
              <TaskSection />
            </>
          )}
          {tab === 'mpa' && (
            <>
              <SliderSection id={'vr1-data'} />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
