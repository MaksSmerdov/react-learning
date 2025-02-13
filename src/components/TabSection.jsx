import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ display:'flex', gap:'5px', justifyContent: 'center' }}>
      <Button isActive={active === 'vr'} onClick={() => onChange('vr')}>
        Печи Карбонизации
      </Button>
      <Button isActive={active === 'sushilka'} onClick={() => onChange('sushilka')}>
        Сушилки
      </Button>
      <Button isActive={active === 'mpa'} onClick={() => onChange('mpa')}>
        МПА
      </Button>
    </section>
  );
}