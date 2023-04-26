import React, { useEffect, useRef } from 'react';

const Game = ({ onGameLoad }) => {
  const emulateKeyPressRef = useRef(null);
  const emulateKeyReleaseRef = useRef(null);

  useEffect(() => {
    const scriptFiles = [
      'spacehugger/engine.all.js',
      'spacehugger/gameObjects.js',
      'spacehugger/gameEffects.js',
      'spacehugger/gameLevel.js',
      'spacehugger/gamePlayer.js',
      'spacehugger/game.js',
    ];

    const loadScripts = () => {
      scriptFiles.forEach((src) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false; // To preserve the loading order of the scripts
        script.onload = () => {
          if (src === 'spacehugger/game.js') {
            // The game script has been loaded, initialize the refs with the actual functions
            emulateKeyPressRef.current = window.emulateKeyPress;
            emulateKeyReleaseRef.current = window.emulateKeyRelease;

            // Call the onGameLoad callback with the function refs
            if (typeof onGameLoad === 'function') {
              onGameLoad(emulateKeyPressRef, emulateKeyReleaseRef);
            }
          }
        };
        document.body.appendChild(script);
      });
    };

    loadScripts();

    // Remove the scripts when the component is unmounted
    return () => {
      document.querySelectorAll('script[src^="/spacehugger/engine/"], script[src^="/spacehugger/app"]').forEach((script) => {
          script.remove();
        });
    };
  }, [onGameLoad]);

  const gameContainerStyle = {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <div style={gameContainerStyle}>
      {/* Add any specific HTML elements for your game if necessary */}
    </div>
  );
};

export default Game;
