import React, {useState, useEffect} from 'react';
import { LocationCard} from "./LocationCard";
import {getAllLocations, getLocationById} from "../../modules/LocationManager";

export const LocationList = () => {
    //the initial state is an empty array
    const [locations, setLocations] = useState([]);
    const getLocations = () => {
        return getAllLocations()
        .then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    };
//After the data comes back from the API, we
//use the setLocations fn to update state
//the fn useEffect tells React to call the get getLoc() function (that will fetch data from our API).
//The empty array argument tells React to call the fn on the first render of the component.
   
useEffect(() => {
        getLocations();
    }, []);

    // Finally we use .map to "loop over" the locations array to show a list of location cards
  
 return (
        <div className="container-cards">
       {locations.map(location=> 
       <LocationCard key={location.id} oneLocation={location} />
       )}
        </div>
    );
};
