import React, { useState, useEffect } from 'react';
import { getLocationById } from '../../modules/LocationManager';
import './LocationDetail.css';
import { useParams, useNavigate } from "react-router-dom"

export const LocationDetail = () => {
  const [location, setlocation] = useState({ name: "", address: "" });
  //empty object

  const {locationId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setlocation(location);
      });
  }, [locationId]);

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="location__location">Location Name: {location.location?.name}</div>
      <div className="location__owner">Address: {location.customer?.address}</div>
    </section>
  );
}

