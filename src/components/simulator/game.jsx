import React, { useEffect } from 'react';


const Game = () => {
  useEffect(() => {
    const scriptFiles = [
      'spacehugger/engine/engineUtil.js',
      'spacehugger/engine/engineDebug.js',
      'spacehugger/engine/engine.js',
      'spacehugger/engine/engineObject.js',
      'spacehugger/engine/engineWebGL.js',
      'spacehugger/engine/engineDraw.js',
      'spacehugger/engine/engineInput.js',
      'spacehugger/engine/engineAudio.js',
      'spacehugger/engine/engineTileLayer.js',
      'spacehugger/engine/engineParticle.js',
      'spacehugger/appObjects.js',
      'spacehugger/appCharacters.js',
      'spacehugger/appEffects.js',
      'spacehugger/appLevel.js',
      'spacehugger/app.js',
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
