import React, { useCallback, useEffect } from 'react';
import Game from '@/components/simulator/game';

const ParentComponent = () => {
  const handleGameLoad = useCallback(() => {
    // Access the emulateKeyPress and emulateKeyRelease functions
    // and use them as needed
    setInterval(() => {
      window.emulateKeyPress(38); // Emulate pressing the 'A' key
      console.log('key pressed');

      setTimeout(() => {
        window.emulateKeyRelease(38); // Emulate releasing the 'A' key
        console.log('key released');
      }, 20); // Release the 'A' key after 200ms
    }, 5000); // Repeat every 5 seconds (5000 milliseconds)
  }, []);

  return (
    <div id="parentComponent">
      <Game onGameLoad={handleGameLoad} />
    </div>
  );
};

export default ParentComponent;
