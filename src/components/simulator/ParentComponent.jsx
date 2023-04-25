import React, { useCallback, useEffect } from 'react';
import Game from '@/components/simulator/game'

const ParentComponent = () => {
  const handleGameLoad = useCallback(() => {
    // Access the emulateKeyPress and emulateKeyRelease functions
    // and use them as needed
    setInterval(() => {
      window.emulateKeyPress(90); // Emulate pressing the 'A' key
      window.emulateKeyRelease(90); // Emulate releasing the 'A' key
      console.log("key pressed")
    }, 5000); // Repeat every 1 second (1000 milliseconds)
  }, []);

  return (
    <div>
      <Game onGameLoad={handleGameLoad} />
    </div>
  );
};

export default ParentComponent;
