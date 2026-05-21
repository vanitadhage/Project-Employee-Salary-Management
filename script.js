const contentArea = document.getElementById("contentArea");


// ================= DASHBOARD =================

function showDashboard() {

  contentArea.innerHTML = `

    <div class="header">

      <div>
        <h1>Dashboard</h1>
        <p>Welcome Back Admin</p>
      </div>

      <input type="text" placeholder="Search Employee">

    </div>

    <div class="cards">

      <div class="card">
        <h3>Total Employees</h3>
        <h1>120</h1>
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

const employees = [

  {
    id: "EMP001",
    name: "Rahul Sharma",
    department: "IT",
    salary: "₹55,000"
  },

  {
    id: "EMP002",
    name: "Sneha Patil",
    department: "HR",
    salary: "₹60,000"
  }

];

function showEmployees() {

  contentArea.innerHTML = `

    <div class="table-section">

      <div class="table-header">

        <h2>Employees</h2>

        <button onclick="addEmployee()">
          Add Employee
        </button>

      </div>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody id="employeeTable">

        </tbody>

      </table>

    </div>

  `;

  displayEmployees();

}

function displayEmployees() {

  const table = document.getElementById("employeeTable");

  table.innerHTML = "";

  employees.forEach((employee, index) => {

    table.innerHTML += `

      <tr>

        <td>${employee.id}</td>

        <td>${employee.name}</td>

        <td>${employee.department}</td>

        <td>${employee.salary}</td>

        <td>

          <button class="edit-btn"
            onclick="editEmployee(${index})">

            Edit

          </button>

          <button class="delete-btn"
            onclick="deleteEmployee(${index})">

            Delete

          </button>

        </td>

      </tr>

    `;

  });

}

function addEmployee() {

  const name = prompt("Enter Name");

  const department = prompt("Enter Department");

  const salary = prompt("Enter Salary");

  employees.push({

    id: "EMP00" + (employees.length + 1),

    name,
    department,
    salary

  });

  displayEmployees();

}

function deleteEmployee(index) {

  employees.splice(index, 1);

  displayEmployees();

}


// ================= PAYROLL =================

function showPayroll() {

  contentArea.innerHTML = `

    <h1>Payroll Management</h1>

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

    <h1>Attendance Module</h1>

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

    <h1>Leave Management</h1>

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

    <h1>Reports</h1>

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

    <h1>Settings</h1>

    <div class="table-section">

      <h3>Admin Settings</h3>

      <br>

      <label>Company Name</label>
      <br><br>

      <input type="text"
        value="PayManage Pvt Ltd"
        style="padding:10px;width:300px;">

      <br><br>

      <button style="
        background:#4338ca;
        color:white;
        border:none;
        padding:12px 20px;
        border-radius:10px;
      ">
        Save Settings
      </button>

    </div>

  `;

}
