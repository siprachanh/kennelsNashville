import React, {useState, useEffect} from 'react';
import { CustomerCard} from "./CustomerCard";
import {getAllCustomers, getCustomerById, deleteCustomer} from "../../modules/CustomerManager";

export const CustomerList = () => {
    //the initial state is an empty array
    const [customers, setCustomers] = useState([]);
    const getCustomers = () => {
        return getAllCustomers()
        .then(customersFromAPI => {
            setCustomers(customersFromAPI)
        });
    };
//After the data comes back from the API, we
//use the setCustomers fn to update state
//the fn useEffect tells React to call the get getCust() function (that will fetch data from our API).
//The empty array argument tells React to call the fn on the first render of the component.
const handleDeleteCustomer = id => {
    deleteCustomer(id)
    .then(() => getAllCustomers().then(setCustomers));
};
//invoke setAni in AniList with automatic return
//const handleDeleteAnimal lives in AniList 
//similar to lines 9-11

useEffect(() => {
    getCustomers();
}, []);
// Finally we use .map to "loop over" the animals array to show a list of animal cards
  
 
  
 return (
        <div className="container-cards">
       {customers.map(customer=> 
       <CustomerCard 
       key={customer.id} 
       customer={customer}
       handleDeleteCustomer= {handleDeleteCustomer} />
       )}
        </div>
    );
};
