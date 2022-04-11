import React, {useState, useEffect} from 'react';
import { EmployeeCard} from "./EmployeeCard";
import {getAllEmployees, getEmployeelById, deleteEmployee } from "../../modules/EmployeeManager";
import { useNavigate } from 'react-router-dom';

export const EmployeeList = () => {
    //the initial state is an empty array
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    const getEmployees = () => {
        return getAllEmployees()
        .then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        });
    };
//After the data comes back from the API, we
//use the setEmps fn to update state
//the fn useEffect tells React to call the get getEmployees() function (that will fetch data from our API).
//The empty array argument tells React to call the fn on the first render of the component.
const handleDeleteEmployee = id => {
    deleteEmployee(id)
    .then(() => getAllEmployees().then(setEmployees));
};

useEffect(() => {
        getEmployees();
    }, []);

    // Finally we use .map to "loop over" the emps array to show a list of emp cards
  
 return (
       //add this button above your display of animal cards
    <>
    <section className="section-content">
        <button type="button"
        className="btn"
        onClick={() => {navigate("/employees/create")}}>
  Add a New Employee
    </button>
</section>
        <div className="container-cards">
       {employees.map(employee => 
       <EmployeeCard key={employee.id}
        employee={employee}
       handleDeleteEmployee= {handleDeleteEmployee} />
       )}
        </div>
        </>
    );
};
