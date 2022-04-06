import {Heroes} from '../data/heroes' 

 export const getHeroByName = (newName = '') =>{

  let h = []
  h = Heroes()
    if(newName.length !== 0){
      newName = newName.toLowerCase();
      
      return h.filter(hero => hero.name.toLowerCase().includes(newName));
    }
    return [];
 }