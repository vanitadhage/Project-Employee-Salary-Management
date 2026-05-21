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
  },

  {
    id: "EMP003",
    name: "Amit Verma",
    department: "Finance",
    salary: "₹48,000",
    status: "Active"
  },

  {
    id: "EMP004",
    name: "Priya Singh",
    department: "Marketing",
    salary: "₹52,000",
    status: "Active"
  }
];

const table = document.getElementById("employeeTable");

employees.forEach(employee => {

  const row = document.createElement("tr");

  row.innerHTML = `
  
    <td>${employee.id}</td>
    <td>${employee.name}</td>
    <td>${employee.department}</td>
    <td>${employee.salary}</td>

    <td>
      <span class="status ${employee.status.toLowerCase()}">
        ${employee.status}
      </span>
    </td>
  
  `;

  table.appendChild(row);

});
