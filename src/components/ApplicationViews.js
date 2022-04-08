import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from './animal/AnimalList.js'
import { LocationList } from './location/LocationList.js'
import { CustomerList } from './customer/CustomerList.js'
import { EmployeeList } from './employee/EmployeeList.js'
import { AnimalDetail } from "./animal/AnimalDetail.js"
import { AnimalForm } from './animal/AnimalForm'

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={<AnimalList />} />
                
                <Route path="/animals/create" element={<AnimalForm />} />

                <Route path="/animals/:animalId" element={<AnimalDetail />} />

                {/* Render the location list when http://localhost:3000/location */}
                <Route path="/locations" element={<LocationList />} />

                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers" element={<CustomerList />} />
                
                {/* Render the employee list when http://localhost:3000/employees */}
                <Route path="/employees" element={<EmployeeList/>} />
            </Routes>
        </>
    )
}

// manages all dif Routes