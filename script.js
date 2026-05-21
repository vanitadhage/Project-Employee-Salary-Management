const employees = [

  {
    id: "EMP001",
    name: "Rahul Sharma",
    department: "IT",
    salary: "₹55,000",
    status: "Active"
  },

  {
    id: "EMP002",
    name: "Sneha Patil",
    department: "HR",
    salary: "₹60,000",
    status: "Pending"
  }

];

const table = document.getElementById("employeeTable");


// Display Employees

function displayEmployees() {

  table.innerHTML = "";

  employees.forEach((employee, index) => {

    const row = document.createElement("tr");

    row.innerHTML = `

      <td>${employee.id}</td>

      <td>${employee.name}</td>

      <td>${employee.department}</td>

      <td>${employee.salary}</td>

      <td>
        <span class="${employee.status === 'Active' ? 'active' : 'pending'} status">
          ${employee.status}
        </span>
      </td>

      <td>
        <button class="delete-btn" onclick="deleteEmployee(${index})">
          Delete
        </button>
      </td>

    `;

    table.appendChild(row);

  });

}

displayEmployees();


// Add Employee

const addBtn = document.getElementById("addEmployeeBtn");

addBtn.addEventListener("click", () => {

  const name = prompt("Enter Employee Name");

  if (!name) return;

  const department = prompt("Enter Department");

  if (!department) return;

  const salary = prompt("Enter Salary");

  if (!salary) return;

  employees.push({

    id: "EMP00" + (employees.length + 1),

    name: name,

    department: department,

    salary: salary,

    status: "Active"

  });

  displayEmployees();

});


// Delete Employee

function deleteEmployee(index) {

  employees.splice(index, 1);

  displayEmployees();

}
