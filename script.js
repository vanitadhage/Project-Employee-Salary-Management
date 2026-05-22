if (
  sessionStorage.getItem("loggedIn")
  !== "true"
) {

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

      <div class="top-actions">

        <input
          type="text"
          placeholder="Search Employee">

      <div style="display:flex; gap:10px;">

  <button
    class="theme-btn"
    onclick="toggleTheme()">

    Theme

  </button>

  <button
    class="logout-btn"
    onclick="logout()">

    Logout

  </button>

</div>

      </div>

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

    <div class="charts-container">

      <div class="chart-card">

        <h2>Employee Growth</h2>

        <canvas id="employeeChart"></canvas>

      </div>

      <div class="chart-card">

        <h2>Payroll Analytics</h2>

        <canvas id="salaryChart"></canvas>

      </div>

    </div>

  `;

  loadCharts();

}
function loadCharts() {

  const employeeCanvas =
    document.getElementById("employeeChart");

  const salaryCanvas =
    document.getElementById("salaryChart");

  if (!employeeCanvas || !salaryCanvas) {
    return;
  }

  new Chart(employeeCanvas, {

    type: "bar",

    data: {

      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun"
      ],

      datasets: [{

        label: "Employees",

        data: [
          40,
          55,
          70,
          90,
          110,
          120
        ],

        backgroundColor: "#4338ca"

      }]

    },

    options: {

      responsive: true,

      maintainAspectRatio: false

    }

  });

  new Chart(salaryCanvas, {

    type: "doughnut",

    data: {

      labels: [
        "Salary",
        "Bonus",
        "Deductions"
      ],

      datasets: [{

        data: [
          75,
          15,
          10
        ],

        backgroundColor: [
          "#4338ca",
          "#22c55e",
          "#ef4444"
        ]

      }]

    },

    options: {

      responsive: true,

      maintainAspectRatio: false

    }

  });

}
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

    <div class="table-section">

      <h1 style="margin-bottom:20px;">
        Salary Calculator
      </h1>

      <div style="
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:20px;
      ">

        <div>

          <label>Employee Name</label>

          <br><br>

          <input
            type="text"
            id="empName"
            class="settings-input"
            placeholder="Enter Employee Name">

          <br><br>

          <label>Basic Salary</label>

          <br><br>

          <input
            type="number"
            id="basicSalary"
            class="settings-input"
            placeholder="Enter Basic Salary">

          <br><br>

          <label>Bonus</label>

          <br><br>

          <input
            type="number"
            id="bonus"
            class="settings-input"
            placeholder="Enter Bonus">

          <br><br>

          <label>Deductions</label>

          <br><br>

          <input
            type="number"
            id="deduction"
            class="settings-input"
            placeholder="Enter Deduction">

          <br><br>

          <button
            onclick="generatePayslip()"
            style="
              background:#4338ca;
              color:white;
              border:none;
              padding:12px 20px;
              border-radius:10px;
              cursor:pointer;
            ">

            Generate Payslip

          </button>

        </div>

        <div id="payslipResult">

        </div>

      </div>

    </div>

  `;

}
function generatePayslip() {

  const name =
    document.getElementById("empName").value;

  const basicSalary =
    Number(
      document.getElementById("basicSalary").value
    );

  const bonus =
    Number(
      document.getElementById("bonus").value
    );

  const deduction =
    Number(
      document.getElementById("deduction").value
    );

  if(
    !name ||
    !basicSalary
  ){

    alert("Please fill all details");

    return;

  }

  const hra = basicSalary * 0.20;

  const netSalary =
    basicSalary +
    hra +
    bonus -
    deduction;

  document.getElementById("payslipResult")
  .innerHTML = `

    <div class="card">

      <h2 style="
        margin-bottom:20px;
        color:#4338ca;
      ">

        Employee Payslip

      </h2>

      <p>
        <strong>Name:</strong>
        ${name}
      </p>

      <br>

      <p>
        <strong>Basic Salary:</strong>
        ₹${basicSalary}
      </p>

      <br>

      <p>
        <strong>HRA (20%):</strong>
        ₹${hra}
      </p>

      <br>

      <p>
        <strong>Bonus:</strong>
        ₹${bonus}
      </p>

      <br>

      <p>
        <strong>Deductions:</strong>
        ₹${deduction}
      </p>

      <hr style="margin:20px 0;">

      <h2>
  Net Salary:
  ₹${netSalary}
</h2>

<br>

<button
  onclick="
    downloadPDF(
      '${name}',
      '${basicSalary}',
      '${hra}',
      '${bonus}',
      '${deduction}',
      '${netSalary}'
    )
  "
  style="
    background:#4338ca;
    color:white;
    border:none;
    padding:12px 20px;
    border-radius:10px;
    cursor:pointer;
  ">

  Download PDF

</button>

    </div>

  `;

}
function downloadPDF(
  name,
  basicSalary,
  hra,
  bonus,
  deduction,
  netSalary
){

  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();

  doc.setFontSize(22);

  doc.text(
    "Employee Payslip",
    20,
    20
  );

  doc.setFontSize(14);

  doc.text(
    `Employee Name: ${name}`,
    20,
    40
  );

  doc.text(
    `Basic Salary: ₹${basicSalary}`,
    20,
    55
  );

  doc.text(
    `HRA (20%): ₹${hra}`,
    20,
    70
  );

  doc.text(
    `Bonus: ₹${bonus}`,
    20,
    85
  );

  doc.text(
    `Deduction: ₹${deduction}`,
    20,
    100
  );

  doc.setFontSize(18);

  doc.text(
    `Net Salary: ₹${netSalary}`,
    20,
    125
  );

  doc.save(
    `${name}_Payslip.pdf`
  );

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
function logout(){

  sessionStorage.removeItem("loggedIn");

  window.location.href = "login.html";

}
function toggleTheme(){

  document.body.classList.toggle("dark-mode");

  if(
    document.body.classList.contains(
      "dark-mode"
    )
  ){

    localStorage.setItem(
      "theme",
      "dark"
    );

  }

  else{

    localStorage.setItem(
      "theme",
      "light"
    );

  }

}


/* Load Saved Theme */

if(
  localStorage.getItem("theme")
  === "dark"
){

  document.body.classList.add(
    "dark-mode"
  );

}
function toggleTheme(){

  document.body.classList.toggle(
    "dark-mode"
  );

}
