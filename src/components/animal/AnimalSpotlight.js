import React, { useState, useEffect } from "react";
import { getAnimalById } from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";

export const AnimalSpotlight = ({animalId}) => {
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    getAnimalById(animalId).then(animal => {
      setAnimal(animal);
    });
  }, [animalId]);
//tell React to watch the animalId prop but adding it in the useEvfect()array argument above
//when the animalId prop changes at "reload" the useEffect() runs again to retrieve a new animal
  return (
    <div className="animal-spotlight">
      {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
        <p>{animal.customer?.name}</p>
      </div>
    </div>
  );
};
//grabbing something from next level needs a ? 
