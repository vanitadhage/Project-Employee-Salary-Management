function login(){

  const username =
    document.getElementById(
      "username"
    ).value;

  const password =
    document.getElementById(
      "password"
    ).value;

  if(
    username === "admin" &&
    password === "admin123"
  ){

    sessionStorage.setItem(
      "loggedIn",
      "true"
    );

    window.location.href =
      "index.html";

  }

  else{

    document.getElementById(
      "errorMsg"
    ).innerText =
      "Invalid Username or Password";

  }

}

function togglePassword(){

  const passwordInput =
    document.getElementById(
      "password"
    );

  if(
    passwordInput.type ===
    "password"
  ){

    passwordInput.type = "text";

  }

  else{

    passwordInput.type = "password";

  }

}
