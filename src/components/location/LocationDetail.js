import React, { useState, useEffect } from 'react';
import { getLocationById, deleteLocation } from '../../modules/LocationManager';
import './LocationDetail.css';
import { useParams, useNavigate } from "react-router-dom"


export const LocationDetail = () => {
  const [location, setlocation] = useState({ name: "", address: "" });
  //empty object
  const [isLoading, setIsLoading] = useState(true);
  //By putting isLoading in the comp's state, we can trigger a re-render by changing its value; details btn is disabled based on the state of isLoading
  const {locationId} = useParams();
  //this is how you access the location number, 1 or 2, inside the componenet 
  // this one path will match any and all of the location details suser wants to view; its part of the routing package (react-router-dom) installed
  const navigate = useNavigate();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setlocation(location);
        // or use deconstruct setLocation({ name: location.name, address: location.address}); setIsLoading(false)
    
      setIsLoading(false);
    }); 
  }, [locationId]);

  const handleDelete = () => {
    //invoke the delete function in LocationManager and re-direct to the location list.
    setIsLoading(true);
    deleteLocation(locationId).then(() =>
      navigate("/locations")
    );
  };
    // once a location has been closed, auto redirect User from locDet to the location list
  return (
    <section className="location">
      <h3 className="location__name">Location Name: {location.name}</h3>
      <div className="location__address">Address: {location.address}</div>
      {/* What's up with the question mark???? It is the Optional chaining operator used to prevent nested values from breaking the code. See below.*/}
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close
        </button>
    </section>
  );
}

