import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import "./AnimalForm.css"


export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  //define animal
  const [isLoading, setIsLoading] = useState(false);
    //set isLoading
  const {animalId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };
    //[evt.target.id]=== to evaluate ...then set to state to Change
  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // default values for locationId and customerId
    // if you already have these components/modules in place, you will need to include the correct information
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
	    locationId: 1,
	    customerId: 1
    };

  //pass the editedAnimal object to the database
  updateAnimal(editedAnimal)
    .then(() => navigate("/animals")
    )
  }

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
          </div>
          {/* Be sure to include location and customer */}
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

// Component loads - Save button should be disabled since the data is not available yet.
// The function passed to useEffect() calls API to get the animal based on the animalId in the URL.
// Data loads and setAnimal() is invoked with new data (also set isLoading to false)
// The component is rendered to the DOM, displaying animal details and ready for edits.
// Make changes. As changes are made, state is updated.
// Select save.
// The updateExistingAnimal method will call setIsLoading(true) - this ensures the user cannot repeatedly click button while API is being updated.
// Invoke AnimalManger.update() to change the API data.
// Once the API has updated, change the view to display all the animals.