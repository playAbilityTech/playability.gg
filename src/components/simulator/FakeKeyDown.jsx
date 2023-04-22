import React, { useEffect } from 'react';

const FakeKeyDown = () => {
  const canvasId = 'mainCanvas';

  const triggerKeyDownEvent = (element, keyCode) => {
    const event = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      keyCode: keyCode,
      which: keyCode
    });

    element.dispatchEvent(event);
  };

  const handleClick = () => {
    const keyCode = 65; // The keyCode for the 'A' key
    const canvas = document.getElementById(canvasId);
    if (canvas) {
      triggerKeyDownEvent(canvas, keyCode);
    }
  };

  useEffect(() => {
    const canvas = document.getElementById(canvasId);
    if (canvas) {
      canvas.addEventListener('keydown', (e) => console.log(`Keydown event: ${e.keyCode}`));
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('keydown', (e) => console.log(`Keydown event: ${e.keyCode}`));
      }
    };
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Trigger fake keydown event</button>
    </div>
  );
};

export default FakeKeyDown;
