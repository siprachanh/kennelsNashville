import React from "react"
import "./Kennel.css"
import { AnimalCard } from "./animal/AnimalCard"
import { PropsAndState } from "./PropsAndState"
import { LocationCard } from "./location/LocationCard"
import { CustomerCard } from "./customer/CustomerCard"
import { EmployeeCard } from "./employee/EmployeeCard"

export const Kennel = () => {
    const someVars ={
        name: "Happy",
        address: "401 State Street",
        zip: 47657
    }

   return ( 
    //implicit return, only can return 1 element
    //if using a return statement with multiple lines, need to use curly braces
    <>
        <PropsAndState yourName="Sippy" mycohort="55"someVars={someVars} />

        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
        </article>

        <h2>Locations</h2>
        <article className="locations">
        <LocationCard />
        <LocationCard  />
        </article>

        <h2>Customers</h2>
        <article className="customers">
        <CustomerCard />
        <CustomerCard  />
        <CustomerCard  />
        <CustomerCard  />
        </article>

        <h2>Employees</h2>
        <article className="employees">
        <EmployeeCard />
        <EmployeeCard  />
        <EmployeeCard  />
        </article>
    </>
)
}