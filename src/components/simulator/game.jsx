import React, { useEffect } from 'react';

const Game = ({ onGameLoad }) => {
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
        script.async = false; // Pour conserver l'ordre de chargement des scripts
        script.onload = () => {
          if (src === 'spacehugger/game.js') {
            // The game script has been loaded, call the callback if provided
            if (typeof onGameLoad === 'function') {
              onGameLoad();
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
  }, []);

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
