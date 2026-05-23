// ================= LOGIN CHECK =================

if (
  sessionStorage.getItem("loggedIn")
  !== "true"
) {

  window.location.href = "login.html";

}

// ================= CONTENT AREA =================

const contentArea =
  document.getElementById(
    "contentArea"
  );

// ================= LOCAL STORAGE =================

let employees = JSON.parse(
  localStorage.getItem("employees")
) || [

  {
    id: "EMP001",
    name: "Rahul Sharma",
    department: "IT",
    salary: "₹55,000",
    status: "Active",
    image: "https://i.pravatar.cc/100?img=1"
  },

  {
    id: "EMP002",
    name: "Sneha Patil",
    department: "HR",
    salary: "₹60,000",
    status: "Pending",
    image: "https://i.pravatar.cc/100?img=2"
  }

];

// ================= SAVE EMPLOYEE =================

function saveEmployees(){

  localStorage.setItem(
    "employees",
    JSON.stringify(employees)
  );

}

// ================= DASHBOARD =================

function showDashboard(){

  contentArea.innerHTML = `

    <div class="header">

      <div>

        <h1 class="dashboard-title">

          Welcome Admin 👋

        </h1>

        <p
          id="liveDateTime"
          class="dashboard-subtitle">
        </p>

      </div>

      <div class="top-actions">

        <input
          type="text"
          placeholder="Search Employee">

        <button class="notification-btn">

          🔔

        </button>

        <div class="profile-box">

          <img
            src="https://i.pravatar.cc/100"
            class="profile-img">

          <div>

            <h4>Admin</h4>

            <small>HR Manager</small>

          </div>

        </div>

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

  updateDateTime();

}

// ================= LIVE TIME =================

function updateDateTime(){

  const now = new Date();

  const dateElement =
    document.getElementById(
      "liveDateTime"
    );

  if(dateElement){

    dateElement.innerHTML =
      now.toLocaleString();

  }

}

setInterval(
  updateDateTime,
  1000
);

// ================= CHARTS =================

function loadCharts(){

  const employeeCanvas =
    document.getElementById(
      "employeeChart"
    );

  const salaryCanvas =
    document.getElementById(
      "salaryChart"
    );

  if(
    !employeeCanvas ||
    !salaryCanvas
  ){
    return;
  }

  new Chart(employeeCanvas, {

    type:"bar",

    data:{

      labels:[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun"
      ],

      datasets:[{

        label:"Employees",

        data:[
          40,
          55,
          70,
          90,
          110,
          120
        ],

        backgroundColor:"#4338ca"

      }]

    },

    options:{

      responsive:true,

      maintainAspectRatio:false

    }

  });

  new Chart(salaryCanvas, {

    type:"doughnut",

    data:{

      labels:[
        "Salary",
        "Bonus",
        "Deductions"
      ],

      datasets:[{

        data:[
          75,
          15,
          10
        ],

        backgroundColor:[
          "#4338ca",
          "#22c55e",
          "#ef4444"
        ]

      }]

    },

    options:{

      responsive:true,

      maintainAspectRatio:false

    }

  });

}

// ================= EMPLOYEES =================

function showEmployees(){

  contentArea.innerHTML = `

    <div class="table-section">

      <div class="table-header">

        <h2>Employees</h2>

        <button
          onclick="openEmployeeModal()">

          Add Employee

        </button>

      </div>

      <table>

        <thead>

          <tr>

            <th>Photo</th>
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

    <div
      id="employeeModal"
      class="modal">

      <div class="modal-content">

        <span
          class="close-btn"
          onclick="closeEmployeeModal()">

          &times;

        </span>

        <h2>Add Employee</h2>

        <br>

        <input
          type="text"
          id="employeeName"
          class="settings-input"
          placeholder="Employee Name">

        <br><br>

        <input
          type="text"
          id="employeeDepartment"
          class="settings-input"
          placeholder="Department">

        <br><br>

        <input
          type="number"
          id="employeeSalary"
          class="settings-input"
          placeholder="Salary">

        <br><br>

        <input
          type="file"
          id="employeeImage"
          accept="image/*">

        <br><br>

        <button
          onclick="saveEmployee()"
          class="save-btn">

          Save Employee

        </button>

      </div>

    </div>

  `;

  displayEmployees();

}

// ================= DISPLAY EMPLOYEE =================

function displayEmployees(
  data = employees
){

  const table =
    document.getElementById(
      "employeeTable"
    );

  table.innerHTML = "";

  data.forEach(
    (employee,index)=>{

      table.innerHTML += `

        <tr>

          <td>

            <img
              src="${employee.image}"
              class="employee-img">

          </td>

          <td>${employee.id}</td>

          <td>${employee.name}</td>

          <td>${employee.department}</td>

          <td>${employee.salary}</td>

          <td>

            <span class="
              status
              ${
                employee.status.toLowerCase()
              }
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

    }
  );

}

// ================= MODAL =================

function openEmployeeModal(){

  document.getElementById(
    "employeeModal"
  ).style.display = "flex";

}

function closeEmployeeModal(){

  document.getElementById(
    "employeeModal"
  ).style.display = "none";

}

// ================= ADD EMPLOYEE =================

function saveEmployee(){

  const name =
    document.getElementById(
      "employeeName"
    ).value;

  const department =
    document.getElementById(
      "employeeDepartment"
    ).value;

  const salary =
    document.getElementById(
      "employeeSalary"
    ).value;

  const imageInput =
    document.getElementById(
      "employeeImage"
    );

  if(
    !name ||
    !department ||
    !salary
  ){

    alert(
      "Please fill all details"
    );

    return;

  }

  const reader =
    new FileReader();

  reader.onload = function(e){

    const employee = {

      id:
        "EMP00" +
        (employees.length + 1),

      name:name,

      department:department,

      salary:"₹" + salary,

      status:"Active",

      image:e.target.result

    };

    employees.push(employee);

    saveEmployees();

    displayEmployees();

    closeEmployeeModal();

  };

  if(
    imageInput.files.length > 0
  ){

    reader.readAsDataURL(
      imageInput.files[0]
    );

  }

  else{

    const employee = {

      id:
        "EMP00" +
        (employees.length + 1),

      name:name,

      department:department,

      salary:"₹" + salary,

      status:"Active",

      image:
        "https://i.pravatar.cc/100"

    };

    employees.push(employee);

    saveEmployees();

    displayEmployees();

    closeEmployeeModal();

  }

}

// ================= DELETE =================

function deleteEmployee(index){

  employees.splice(index,1);

  saveEmployees();

  showEmployees();

}

// ================= EDIT =================

function editEmployee(index){

  const employee =
    employees[index];

  const newName = prompt(
    "Edit Name",
    employee.name
  );

  if(!newName) return;

  const newDepartment = prompt(
    "Edit Department",
    employee.department
  );

  if(!newDepartment) return;

  const newSalary = prompt(
    "Edit Salary",
    employee.salary
  );

  if(!newSalary) return;

  employees[index] = {

    ...employee,

    name:newName,

    department:newDepartment,

    salary:newSalary

  };

  saveEmployees();

  showEmployees();

}

// ================= PAYROLL =================

// ================= PAYROLL =================

function showPayroll() {

  contentArea.innerHTML = `

    <div class="table-section">

      <div class="table-header">

        <div>

          <h2>Payroll Management</h2>

          <p style="color:gray;">
            Generate Employee Payslip
          </p>

        </div>

      </div>

      <div class="payroll-container">

        <div class="payroll-form">

          <label>Employee Name</label>

          <input
            type="text"
            id="empName"
            class="settings-input"
            placeholder="Enter Employee Name">

          <label>Basic Salary</label>

          <input
            type="number"
            id="basicSalary"
            class="settings-input"
            placeholder="Enter Basic Salary">

          <label>Bonus</label>

          <input
            type="number"
            id="bonus"
            class="settings-input"
            placeholder="Enter Bonus">

          <label>Deductions</label>

          <input
            type="number"
            id="deduction"
            class="settings-input"
            placeholder="Enter Deduction">

          <button
            onclick="generatePayslip()"
            class="save-btn">

            Generate Payslip

          </button>

        </div>

        <div
          id="payslipResult"
          class="payroll-result">

          <div class="empty-box">

            <h3>No Payslip Generated</h3>

            <p>
              Fill employee details and click Generate.
            </p>

          </div>

        </div>

      </div>

    </div>

  `;

}

// ================= ATTENDANCE =================

function showAttendance(){

  contentArea.innerHTML = `

    <div class="header">

      <div>

        <h1>
          Attendance Management
        </h1>

        <p>
          Track Employee Attendance
        </p>

      </div>

    </div>

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

        <h3>On Leave</h3>

        <h1>05</h1>

      </div>

      <div class="card">

        <h3>Attendance %</h3>

        <h1>92%</h1>

      </div>

    </div>

    <div class="table-section">

      <div class="table-header">

        <h2>Employee Attendance</h2>

      </div>

      <table>

        <thead>

          <tr>

            <th>Employee</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Rahul Sharma</td>

            <td>
              ${new Date().toLocaleDateString()}
            </td>

            <td>

              <span class="status active">

                Present

              </span>

            </td>

            <td>

              <button class="edit-btn">

                Mark Absent

              </button>

            </td>

          </tr>

          <tr>

            <td>Sneha Patil</td>

            <td>
              ${new Date().toLocaleDateString()}
            </td>

            <td>

              <span class="status pending">

                Absent

              </span>

            </td>

            <td>

              <button class="edit-btn">

                Mark Present

              </button>

            </td>

          </tr>

          <tr>

            <td>Amit Joshi</td>

            <td>
              ${new Date().toLocaleDateString()}
            </td>

            <td>

              <span class="status active">

                Present

              </span>

            </td>

            <td>

              <button class="edit-btn">

                Mark Absent

              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  `;

}

// ================= LEAVES =================

function showLeaves(){

  contentArea.innerHTML = `

    <div class="header">

      <div>

        <h1>
          Leave Management
        </h1>

        <p>
          Manage Employee Leave Requests
        </p>

      </div>

      <button
        class="theme-btn">

        Apply Leave

      </button>

    </div>

    <div class="cards">

      <div class="card">

        <h3>Total Requests</h3>

        <h1>24</h1>

      </div>

      <div class="card">

        <h3>Approved</h3>

        <h1>18</h1>

      </div>

      <div class="card">

        <h3>Pending</h3>

        <h1>04</h1>

      </div>

      <div class="card">

        <h3>Rejected</h3>

        <h1>02</h1>

      </div>

    </div>

    <div class="table-section">

      <div class="table-header">

        <h2>
          Leave Requests
        </h2>

      </div>

      <table>

        <thead>

          <tr>

            <th>Employee</th>
            <th>Leave Type</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Rahul Sharma</td>

            <td>Sick Leave</td>

            <td>24 May</td>

            <td>26 May</td>

            <td>

              <span class="status pending">

                Pending

              </span>

            </td>

            <td>

              <button class="approve-btn">

                Approve

              </button>

              <button class="reject-btn">

                Reject

              </button>

            </td>

          </tr>

          <tr>

            <td>Sneha Patil</td>

            <td>Casual Leave</td>

            <td>28 May</td>

            <td>29 May</td>

            <td>

              <span class="status active">

                Approved

              </span>

            </td>

            <td>

              <button class="approve-btn">

                Approved

              </button>

            </td>

          </tr>

          <tr>

            <td>Amit Joshi</td>

            <td>Emergency Leave</td>

            <td>30 May</td>

            <td>31 May</td>

            <td>

              <span class="status rejected">

                Rejected

              </span>

            </td>

            <td>

              <button class="reject-btn">

                Rejected

              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  `;

}

// ================= REPORTS =================

function showReports(){

  contentArea.innerHTML = `

    <div class="header">

      <div>

        <h1>
          Reports & Analytics
        </h1>

        <p>
          Employee and Payroll Insights
        </p>

      </div>

      <button
        class="theme-btn"
        onclick="downloadReport()">

        Download Report

      </button>

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

        <h3>Attendance Rate</h3>

        <h1>92%</h1>

      </div>

      <div class="card">

        <h3>Leaves Taken</h3>

        <h1>18</h1>

      </div>

    </div>

    <div class="charts-container">

      <div class="chart-card">

        <h2>
          Employee Performance
        </h2>

        <canvas id="reportChart"></canvas>

      </div>

      <div class="chart-card">

        <h2>
          Department Distribution
        </h2>

        <canvas id="departmentChart"></canvas>

      </div>

    </div>

  `;

  loadReportCharts();

}
function loadReportCharts(){

  const reportCanvas =
    document.getElementById(
      "reportChart"
    );

  const departmentCanvas =
    document.getElementById(
      "departmentChart"
    );

  if(
    !reportCanvas ||
    !departmentCanvas
  ){
    return;
  }

  new Chart(reportCanvas, {

    type:"line",

    data:{

      labels:[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun"
      ],

      datasets:[{

        label:"Performance",

        data:[
          65,
          72,
          78,
          81,
          90,
          95
        ],

        borderColor:"#4338ca",

        backgroundColor:
          "rgba(67,56,202,0.2)",

        tension:0.4,

        fill:true

      }]

    },

    options:{

      responsive:true,

      maintainAspectRatio:false

    }

  });

  new Chart(departmentCanvas, {

    type:"pie",

    data:{

      labels:[
        "IT",
        "HR",
        "Finance",
        "Marketing"
      ],

      datasets:[{

        data:[
          40,
          20,
          25,
          15
        ],

        backgroundColor:[
          "#4338ca",
          "#22c55e",
          "#f59e0b",
          "#ef4444"
        ]

      }]

    },

    options:{

      responsive:true,

      maintainAspectRatio:false

    }

  });

}
function downloadReport(){

  alert(
    "Report Download Started"
  );

}
// ================= SETTINGS =================

// ================= SETTINGS =================

function showSettings() {

  contentArea.innerHTML = `

    <div class="table-section">

      <div class="table-header">

        <div>

          <h2>Settings</h2>

          <p style="color:gray;">
            Manage Application Settings
          </p>

        </div>

      </div>

      <div class="settings-grid">

        <div class="card">

          <h3>Company Settings</h3>

          <br>

          <label>Company Name</label>

          <br><br>

          <input
            type="text"
            value="PayManage Pvt Ltd"
            class="settings-input">

          <br><br>

          <label>Admin Email</label>

          <br><br>

          <input
            type="email"
            value="admin@gmail.com"
            class="settings-input">

          <br><br>

          <button class="save-btn">

            Save Settings

          </button>

        </div>

        <div class="card">

          <h3>System Information</h3>

          <br>

          <p><strong>Version:</strong> 1.0.0</p>

          <br>

          <p><strong>Developed By:</strong> Admin</p>

          <br>

          <p><strong>Last Update:</strong> May 2026</p>

          <br>

          <p><strong>Status:</strong> Active</p>

        </div>

      </div>

    </div>

  `;

}
// ================= LOGOUT =================

function logout(){

  sessionStorage.removeItem(
    "loggedIn"
  );

  window.location.href =
    "login.html";

}

// ================= THEME =================

function toggleTheme(){

  document.body.classList.toggle(
    "dark-mode"
  );

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

// ================= LOAD THEME =================

if(
  localStorage.getItem("theme")
  === "dark"
){

  document.body.classList.add(
    "dark-mode"
  );

}

// ================= ACTIVE MENU =================

function setActive(element){

  const items =
    document.querySelectorAll(
      ".sidebar ul li"
    );

  items.forEach(item=>{

    item.classList.remove(
      "active-menu"
    );

  });

  element.classList.add(
    "active-menu"
  );

}

// ================= DEFAULT PAGE =================

showDashboard();
