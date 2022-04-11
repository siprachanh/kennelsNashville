import React from "react"
import { Routes, Route, Navigate  } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from './animal/AnimalList.js'
import { LocationList } from './location/LocationList.js'
import { CustomerList } from './customer/CustomerList.js'
import { EmployeeList } from './employee/EmployeeList.js'
import { AnimalDetail } from "./animal/AnimalDetail.js"
import { AnimalForm } from './animal/AnimalForm'
import { LocationDetail } from "./location/LocationDetail.js"
import { Login } from "./auth/Login.js"
import { Register } from "./auth/Register.js"
import { EmployeeForm } from "./employee/EmployeeForm"
import { CustomerForm } from "./customer/CustomerForm"
import { AnimalEditForm } from "./animal/AnimalEditForm"
import { MadLib } from "./madLib/MadLib.js"



//pass in the state value of isAuth and method setisAuth as props
//add conditional logic to check value of isAuth
//if not a U in session storage, U's should be redirected to login
//fn is PrivateRoute and passing children, ie AnimalList is child ln 48
//wrap fn arround a component accepting all compenents that live within

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
    
    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }
    
    return (
        <>
            <Routes>
               
                {/* {Render the login and register} */}
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />

                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={<AnimalList />} />
                <Route exact path="/animals" element={
                 <PrivateRoute>
                    <AnimalList />
                </PrivateRoute>
                } />
               <Route path="/animals/:animalId/edit" element={
                 <PrivateRoute>
                 <AnimalEditForm />
                </PrivateRoute>
                } />
               
                <Route path="/animals/create" element={<AnimalForm />} />

                <Route path="/animals/:animalId" element={
                 <PrivateRoute>
                 <AnimalDetail />
               </PrivateRoute>} />
                
                {/* Render the location list when http://localhost:3000/location */}
                <Route exact path="/locations" element={
                <PrivateRoute>
                    <LocationList/>
                 </PrivateRoute> 
                } />

                <Route path="locations/:locationId" element={<LocationDetail />} />

                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers" element={
                <PrivateRoute>
                <CustomerList />
                </PrivateRoute>
                } />

                <Route path="/customers/create" element={<CustomerForm/>} />
                
                {/* Render the employee list when http://localhost:3000/employees */}
                <Route path="/employees" element={
                 <PrivateRoute>
                 <EmployeeList />
                </PrivateRoute>
                } />

                <Route path="/employees/create" element={<EmployeeForm/>} />

                <Route path="/madLib" element={<MadLib/>} />

            </Routes>
        </>
    )
}

// manages all different Routes
// the value x captured by React Router and stored in an animalId property of a specific namespace - props.match.params.animalId
