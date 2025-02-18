import Button from './Button/Button.jsx';

interface TabsType {
  active: string;
  onChange: (value: string) => void;
}

export default function TabsSection({ active, onChange }: TabsType) {
  return (
    <section style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
      <Button isActive={active === 'vr'} onClick={() => onChange('vr')}>
        Печи Карбонизации
      </Button>
      <Button isActive={active === 'sushilka'} onClick={() => onChange('sushilka')}>
        Сушилки
      </Button>
      <Button isActive={active === 'mpa'} onClick={() => onChange('mpa')}>
        МПА
      </Button>
      <Button isActive={active === 'task'} onClick={() => onChange('task')}>
        Задачи
      </Button>
      <Button isActive={active === 'form'} onClick={() => onChange('form')}>
        Форма
      </Button>
    </section>
  );
}
