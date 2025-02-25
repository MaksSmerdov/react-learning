import {useState } from 'react';

export default function MarketList() {
  const [showDescr, setShowDescr] = useState<boolean>(false);

  function toggleShowDescr() {
    setShowDescr(!showDescr);
  }

  return (
    <div>
      
    </div>
  )
}
