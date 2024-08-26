import { GameSavingLoader } from '../js/asyncLoader.js';

GameSavingLoader.load()
  .then((saving) => {
    console.log('Saving loading:', saving)
  })
  .catch((error) => {
    console.log('Error:' + error)
  })