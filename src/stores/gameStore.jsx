import { makeAutoObservable } from 'mobx';

class GameStore {
  keyStates = {
    38: false, // Up arrow
    40: false, // Down arrow
    37: false, // Left arrow
    39: false, // Right arrow
    67: false, // C
    88: false, // X
    90: false, // Z
  };

  constructor() {
    makeAutoObservable(this);
  }

  setKeyState(keyCode, isPressed) {
    if (this.keyStates.hasOwnProperty(keyCode)) {
      this.keyStates[keyCode] = isPressed;
    //   console.log(`key ${keyCode} ${isPressed ? 'pressed' : 'released'}`);
    }
    
  }
}

const gameStore = new GameStore();
export default gameStore;
