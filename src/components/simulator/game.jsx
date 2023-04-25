import React, { useEffect } from 'react';


const Game = () => {
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
        document.body.appendChild(script);
      });
    };

    loadScripts();

    // Supprime les scripts lors du démontage du composant
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
      {/* Ajoutez ici les éléments HTML spécifiques à votre jeu si nécessaire */}
    </div>
  );
};



export default Game;
