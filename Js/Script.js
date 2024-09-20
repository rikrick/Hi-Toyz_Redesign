function validateregis() {
  const email = document.getElementById("registeremail");
  const username = document.getElementById("registername");
  const password = document.getElementById("registerpass");
  const number = document.getElementById("registernumber");

  const error = document.getElementById("errormess");

  let valid = true;

  // Clear previous errors
  error.textContent = "";

  // Username validation
  if (username.value.length < 5) {
    error.textContent = "Error! Username must be at least 5 characters.";
    valid = false;
  } else if (password.value.length < 8) {
    error.textContent = "Error! Password must be at least 8 characters.";
    valid = false;
  } else if (!email.value.endsWith("@gmail.com")) {
    error.textContent = "Error! Email must end with @gmail.com.";
    valid = false;
  } else if (number.value.length < 6) {
    error.textContent = "Error! Please enter your valid number.";
    valid = false;
  }

  return valid;
}

function validatesignin() {
  const username = document.getElementById("loginname");
  const password = document.getElementById("loginpass");

  const error = document.getElementById("errormess");

  let valid = true;

  // Clear previous errors
  error.textContent = "";

  // Username validation
  if (username.value.length < 5) {
    error.textContent = "Error! Username must be at least 5 characters.";
    valid = false;
  } else if (password.value.length < 8) {
    error.textContent = "Error! Password must be at least 8 characters.";
    valid = false;
  }

  return valid;
}
