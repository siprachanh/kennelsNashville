import React, {useState, useEffect} from 'react';
import { AnimalCard} from "./AnimalCard";
import {getAllAnimals, getAnimalById, deleteAnimal} from "../../modules/AnimalManager";
import { useNavigate } from 'react-router-dom';

export const AnimalList = () => {
    //the initial state is an empty array
    const [animals, setAnimals] = useState([]);
    const navigate = useNavigate();
    const getAnimals = () => {
         getAllAnimals()
        .then(animalsFromAPI => {
            setAnimals(animalsFromAPI)
        });
    };
//After the data comes back from the API, we
//use the setAnimals fn to update state
//the fn useEffect tells React to call the get getAnimals() function (that will fetch data from our API).
//UseEffect has 2 components: 1) fn and 2) dependency array (to run useEffect for app)
//The empty array argument tells React to call the fn on the first render of the component.
   
const handleDeleteAnimal = id => {
    deleteAnimal(id)
    .then(() => getAllAnimals().then(setAnimals));
};
//invoke setAni in AniList with automatic return
//const handleDeleteAnimal lives in AniList 
//similar to lines 9-11

useEffect(() => {
        getAnimals();
    }, []);

// Finally we use .map to "loop over" the animals array to show a list of animal cards
  
 return (
     //add this button above your display of animal cards
     <>
        <section className="section-content">
            <button type="button"
            className="btn"
            onClick={() => {navigate("/animals/create")}}>
      Admit Animal
        </button>
    </section>
        <div className="container-cards">
            {animals.map(animal => <AnimalCard 
            key={animal.id} 
            animal={animal}
            handleDeleteAnimal= {handleDeleteAnimal}/> )}
        </div>
        </>

    );
};
//useNav allows us to navigate to url then it will look at route to determine
//which component to display; can invoke a fn or import helpers to help the navigate fn
//key prop is unique to each child in a list. this is how Reach keeps track of re-rendering only the things that have changed.
//handleDelete is invoked in ln 38 and then passed in to ln 21 setAnimals

//when component loads, it sees ALL the const to initialize ; 
//then it sees the return 
//then (after the return) it sees the useEffect (it's a built in fn in React; goes in the order written)
//Rule of javascript: its the return that's last 
