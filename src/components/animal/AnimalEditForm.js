import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import "./AnimalForm.css"
import { getAllLocations } from '../../modules/LocationManager';
import { getAllCustomers } from '../../modules/CustomerManager';



export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "", locationId: 0, customerId: 0 });
  //define animal
  const [isLoading, setIsLoading] = useState(false);
    //set isLoading
  const [locations, setLocations] = useState([]);
	const [customers, setCustomers] = useState([]);

  const {animalId} = useParams();
  const navigate = useNavigate();


	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state. the input fields, are controlled by what's in state, represent what's in state*/
		const newAnimal = { ...animal }
		let selectedVal = event.target.value
        //... is spread operator, create a copy 
        //this becomes the field of the value we're editing
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newAnimal[event.target.id] = selectedVal
        //key is that the input and ids match the properties on ln 11-14
        //so that I can connect them together
		// update state
		setAnimal(newAnimal)
	}

  //load location data and setState	
  useEffect(() => {
		getAllLocations().then((data) => setLocations(data))
	}, []);

//load customer data and setState
     useEffect(() => {
		getAllCustomers().then((data) => setCustomers(data))
	}, []);


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
	    locationId: animal.locationId.name,
	    customerId: animal.customerId.name
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

        
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>

        <div className="form-group">
					<label htmlFor="customerId">Customer/Owner: </label>
					<select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a customer/owner</option>
						{customers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}                             
							</option>
						))}
					</select>
				</div>
			
         
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Save Changes</button>
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