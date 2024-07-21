import './style.css';

import Character from './types/Character';
import Bowman from './types/Bowman';
import Daemon from './types/Daemon';
import Magician from './types/Magician';
import Swordsman from './types/Swordsman';
import Undead from './types/Undead';
import Zombie from './types/Zombie';

const playerZoro = new Bowman('Zoro', 'Bowman');
playerZoro.levelUp();
playerZoro.levelUp();
console.log(playerZoro);
