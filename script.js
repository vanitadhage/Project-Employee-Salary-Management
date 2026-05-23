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

function showPayroll(){

  contentArea.innerHTML = `

    <div class="table-section">

      <h1>Payroll Module</h1>

      <br>

      <p>
        Payroll Management Working Successfully
      </p>

    </div>

  `;

}

// ================= ATTENDANCE =================

function showAttendance(){

  contentArea.innerHTML = `

    <div class="table-section">

      <h1>Attendance Module</h1>

    </div>

  `;

}

// ================= LEAVES =================

function showLeaves(){

  contentArea.innerHTML = `

    <div class="table-section">

      <h1>Leave Management</h1>

    </div>

  `;

}

// ================= REPORTS =================

function showReports(){

  contentArea.innerHTML = `

    <div class="table-section">

      <h1>Reports</h1>

    </div>

  `;

}

// ================= SETTINGS =================

function showSettings(){

  contentArea.innerHTML = `

    <div class="table-section">

      <h1>Settings</h1>

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
