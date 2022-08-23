import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroeCard } from './HeroeCard';
import 'animate.css';

export const HeroeList = ({publisher}) => {


    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) ;


    return (
      <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
        {heroes.map((heroe) => (
          <HeroeCard key={heroe.id} heroe={heroe}></HeroeCard>
        ))}
      </div>
    );
}
