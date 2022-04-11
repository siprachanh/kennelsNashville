import React, { useState, useEffect } from "react";
import { AnimalSpotlight } from "../components/animal/AnimalSpotlight"
import { getRandomId } from "../modules/AnimalManager"
// import { PropsAndState } from './PropsAndState'
// import { AnimalCard } from "./animal/AnimalCard"
// import { LocationCard } from "./location/LocationCard"
// import { CustomerCard } from "./customer/CustomerCard"
// import { EmployeeCard } from "./employee/EmployeeCard"

export const Home = () => {
    const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
      console.log("refresh")
    getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
        <address>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <br />
        500 Puppy Way
        </address>
        <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }
 
    </>     
);
};

// {
//     in curly brackets, can write javascript
// ln 33: spotlightId && <AnimalSpotlight ani  <== this is a shortcircuit conditional
//  <AniSpot> will only be rendered if the spotlightId variable is "truthy". The value of 0 is falsy and any other number is truthy
//when hit reload, it invokes the fn; refresh
//when state changes, it gets passed to AnimalSptlight; when Id changes, go out an get the animalId