import { makeAutoObservable } from 'mobx';

class GameStore {
  keyStates = {
    87: false, // W
    83: false, // S
    65: false, // A
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
