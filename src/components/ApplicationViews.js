import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from './animal/AnimalCard.js'
import { LocationCard  } from './location/LocationCard.js'
import { CustomerCard } from './customer/CustomerCard.js'
import { EmployeeCard } from './employee/EmployeeCard.js'

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalCard />} />
                
                {/* Render the location list when http://localhost:3000/location */}
                <Route path="/locations" element={<LocationCard />} />

                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers" element={<CustomerCard />} />
                
                {/* Render the employee list when http://localhost:3000/employees */}
                <Route path="/employees" element={<EmployeeCard />} />
            </Routes>
        </>
    )
}