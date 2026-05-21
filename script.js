if(
  sessionStorage.getItem("loggedIn")
  !== "true"
){

  window.location.href = "login.html";

}


const contentArea = document.getElementById("contentArea");


// ================= LOCAL STORAGE =================

let employees = JSON.parse(
  localStorage.getItem("employees")
) || [

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

function saveEmployees() {

  localStorage.setItem(
    "employees",
    JSON.stringify(employees)
  );

}


// ================= DASHBOARD =================

function showDashboard() {

  contentArea.innerHTML = `

    <div class="header">

      <div>
        <h1>Dashboard</h1>
        <p>Welcome Back Admin</p>
      </div>

      <input
        type="text"
        placeholder="Search Employee">

    </div>

    <div class="cards">

      <div class="card">
        <h3>Total Employees</h3>
        <h1>${employees.length}</h1>
      </div>

      <div class="card">
        <h3>Monthly Payroll</h3>
        <h1>₹12.5L</h1>
      </div>

      <div class="card">
        <h3>Attendance</h3>
        <h1>92%</h1>
      </div>

      <div class="card">
        <h3>Pending Salary</h3>
        <h1>08</h1>
      </div>

    </div>

  `;

}

showDashboard();


// ================= EMPLOYEES =================

function showEmployees() {

  contentArea.innerHTML = `

    <div class="table-section">

      <div class="table-header">

        <h2>Employees</h2>

        <div>

          <input
            type="text"
            id="searchInput"
            placeholder="Search Employee"
            class="settings-input"
            onkeyup="searchEmployee()">

          <button onclick="addEmployee()">
            Add Employee
          </button>

        </div>

      </div>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody id="employeeTable">

        </tbody>

      </table>

    </div>

  `;

  displayEmployees(employees);

}


// ================= DISPLAY EMPLOYEES =================

function displayEmployees(data) {

  const table = document.getElementById("employeeTable");

  table.innerHTML = "";

  data.forEach((employee, index) => {

    table.innerHTML += `

      <tr>

        <td>${employee.id}</td>

        <td>${employee.name}</td>

        <td>${employee.department}</td>

        <td>${employee.salary}</td>

        <td>

          <span class="
            status
            ${employee.status.toLowerCase()}
          ">

            ${employee.status}

          </span>

        </td>

        <td>

          <button
            class="edit-btn"
            onclick="editEmployee(${index})">

            Edit

          </button>

          <button
            class="delete-btn"
            onclick="deleteEmployee(${index})">

            Delete

          </button>

        </td>

      </tr>

    `;

  });

}


// ================= ADD EMPLOYEE =================

function addEmployee() {

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

  saveEmployees();

  showEmployees();

}


// ================= DELETE EMPLOYEE =================

function deleteEmployee(index) {

  employees.splice(index, 1);

  saveEmployees();

  showEmployees();

}


// ================= EDIT EMPLOYEE =================

function editEmployee(index) {

  const employee = employees[index];

  const newName = prompt(
    "Edit Name",
    employee.name
  );

  if (!newName) return;

  const newDepartment = prompt(
    "Edit Department",
    employee.department
  );

  if (!newDepartment) return;

  const newSalary = prompt(
    "Edit Salary",
    employee.salary
  );

  if (!newSalary) return;

  employees[index] = {

    ...employee,

    name: newName,

    department: newDepartment,

    salary: newSalary

  };

  saveEmployees();

  showEmployees();

}


// ================= SEARCH EMPLOYEE =================

function searchEmployee() {

  const searchValue =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

  const filteredEmployees =
    employees.filter(employee =>

      employee.name
      .toLowerCase()
      .includes(searchValue)

    );

  displayEmployees(filteredEmployees);

}


// ================= PAYROLL =================

function showPayroll() {

  contentArea.innerHTML = `

    <h1 style="margin-bottom:20px;">
      Payroll Management
    </h1>

    <div class="cards">

      <div class="card">
        <h3>Total Salary</h3>
        <h1>₹15L</h1>
      </div>

      <div class="card">
        <h3>Bonuses</h3>
        <h1>₹2L</h1>
      </div>

      <div class="card">
        <h3>Deductions</h3>
        <h1>₹50K</h1>
      </div>

    </div>

  `;

}


// ================= ATTENDANCE =================

function showAttendance() {

  contentArea.innerHTML = `

    <h1 style="margin-bottom:20px;">
      Attendance Module
    </h1>

    <div class="cards">

      <div class="card">
        <h3>Present</h3>
        <h1>108</h1>
      </div>

      <div class="card">
        <h3>Absent</h3>
        <h1>12</h1>
      </div>

      <div class="card">
        <h3>Leave</h3>
        <h1>05</h1>
      </div>

    </div>

  `;

}


// ================= LEAVES =================

function showLeaves() {

  contentArea.innerHTML = `

    <h1 style="margin-bottom:20px;">
      Leave Management
    </h1>

    <div class="table-section">

      <table>

        <thead>

          <tr>

            <th>Name</th>
            <th>Leave Type</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          <tr>
            <td>Rahul Sharma</td>
            <td>Sick Leave</td>
            <td>Approved</td>
          </tr>

          <tr>
            <td>Sneha Patil</td>
            <td>Casual Leave</td>
            <td>Pending</td>
          </tr>

        </tbody>

      </table>

    </div>

  `;

}


// ================= REPORTS =================

function showReports() {

  contentArea.innerHTML = `

    <h1 style="margin-bottom:20px;">
      Reports
    </h1>

    <div class="cards">

      <div class="card">
        <h3>Monthly Report</h3>
        <h1>Available</h1>
      </div>

      <div class="card">
        <h3>Payroll Report</h3>
        <h1>Generated</h1>
      </div>

    </div>

  `;

}


// ================= SETTINGS =================

function showSettings() {

  contentArea.innerHTML = `

    <h1 style="margin-bottom:20px;">
      Settings
    </h1>

    <div class="table-section">

      <h3>Admin Settings</h3>

      <br>

      <label>Company Name</label>

      <br><br>

      <input
        type="text"
        value="PayManage Pvt Ltd"
        class="settings-input">

      <br><br>

      <button style="
        background:#4338ca;
        color:white;
        border:none;
        padding:12px 20px;
        border-radius:10px;
        cursor:pointer;
      ">

        Save Settings

      </button>

    </div>

  `;

}
