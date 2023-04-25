import React, { useCallback, useEffect } from 'react';
import Game from '@/components/simulator/game';
import gameStore from '@/stores/gameStore';

const ParentComponent = () => {
  const handleGameLoad = useCallback(() => {
    const interval = setInterval(() => {
      // Iterate over keyStates from the gameStore
      for (const keyCode in gameStore.keyStates) {
        if (gameStore.keyStates[keyCode]) {
          window.emulateKeyPress(keyCode);
          console.log(`key ${keyCode} pressed`);

          setTimeout(() => {
            window.emulateKeyRelease(keyCode);
            console.log(`key ${keyCode} released`);
          }, 20); // Release the key after 20ms
        }
      }
    }, 200); // Repeat every 200ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    handleGameLoad();
  }, [handleGameLoad]);

  return (
    <div id="parentComponent">
      <Game onGameLoad={handleGameLoad} />
    </div>
  );
};

export default ParentComponent;
