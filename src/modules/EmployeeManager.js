const remoteURL = "http://localhost:8088"

export const getEmployeelById = (employeeId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/employees/${employeeId}?_expand=location`)
  .then(res => res.json())
}

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees?_expand=location`)
  .then(res => res.json())
}
export const deleteEmployee = id => {
  return fetch(`${remoteURL}/employees/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}
export const addEmployee = newAEmployee => {
  return fetch(`${remoteURL}/employees`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newAEmployee)
  }).then(response => response.json())
}
