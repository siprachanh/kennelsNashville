import React from "react";
import "./Animal.css";
import {Link } from "react-router-dom"

export const AnimalCard = ({animal, handleDeleteAnimal}) => {
    return (
        <div className="card">
        <div className="card-content">
          <picture>
              <img src={'/images/dog.jpeg'} alt="My Dog" />
              {/* img src={'./images/puppy_${animal.id}.png or jpeg`} alt="My Dog"*/}
            </picture>
          <h3>Name: <span className="card-petname">
            {animal.name}
          </span></h3>
          <p>Breed: {animal.breed}</p>
        </div>
         <Link to={`/animals/${animal.id}`}>
          <button>Details</button>
          </Link>
          <Link to={`/animals/${animal.id}/edit`}>
           <button>Edit</button>
          </Link>
        <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
      </div>
);
}

