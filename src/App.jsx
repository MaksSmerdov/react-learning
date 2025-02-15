import { useState } from 'react';
import TabsSection from './components/TabSection';
import Header from './components/Header/Header';
import VrSection from './components/VrSection';
import TaskSection from './components/Tasks/TaskSection';
import styles from './App.module.scss';
import MpaSection from './components/MpaSection';

function App() {
  const [tab, setTab] = useState('vr');

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
          {tab === 'sushilka' && <>Контент Сушилок </>}
          {tab === 'mpa' && (
            <>
              <MpaSection id={'mpa2-data'} title={'МПА №2'} />
              <MpaSection id={'mpa3-data'} title={'МПА №3'} />
            </>
          )}
          {tab === 'task' && (
            <>
              <TaskSection />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
