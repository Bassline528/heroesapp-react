import { heroes } from "../data/heroes";


export const getHeroesByName = (name = '') => {
    
    const superhero = name.toLowerCase().trim();

    if (superhero.lengt === 0) return [];

    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(superhero) )
    

}