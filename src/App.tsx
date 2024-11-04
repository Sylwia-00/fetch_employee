import { useState } from "react";
import "./App.css";
import EmployeeCard from "./EmployeeCard";

const sampleEmployee = {
  name: {
    first: "Jorge",

    last: "Nieto",
  },

  email: "jorge.nieto@example.com",

  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    // Send the request
    fetch("http://localhost:3310/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data[0]);
      });
  };

  return (
    <div className="App">
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </div>
  );
}

export default App;
