import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Mouse2Stick = () => {
  const [joystick, setJoystick] = useState({ x: 0, y: 0 });
  const sensitivity = 0.001;
  const smoothingFactor = 0.1;

  useEffect(() => {
    let movementTimer;

    const onMouseMove = (event) => {
      const deltaX = event.movementX;
      const deltaY = event.movementY;

      if (deltaX !== 0 || deltaY !== 0) {
        const rawJoystickX = ((deltaX / (window.innerWidth * sensitivity)) * 2) - 1;
        const rawJoystickY = ((deltaY / (window.innerHeight * sensitivity)) * 2) - 1;

        const newJoystickX = smoothingFactor * rawJoystickX + (1 - smoothingFactor) * joystick.x;
        const newJoystickY = smoothingFactor * rawJoystickY + (1 - smoothingFactor) * joystick.y;

        setJoystick({ x: newJoystickX, y: newJoystickY });

        clearTimeout(movementTimer);
        movementTimer = setTimeout(() => {
          setJoystick({ x: 0, y: 0 });
        }, 200);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [joystick]);

  return (
    <div>
      <p>Joystick X: {joystick.x.toFixed(2)}</p>
      <p>Joystick Y: {joystick.y.toFixed(2)}</p>
    </div>
  );
};

Mouse2Stick.propTypes = {
  joystick: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

export default Mouse2Stick;
