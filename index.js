// This function checks the password validity
function isValidPassword(password, username) {
  // Rule 1: Password must be at least 8 characters
  if (password.length < 8) {
    return false;
  }

    // Rule 2: Password must not contain spaces
    if (password.includes(" ")) {
    return false;
  }

  // Rule 3: Password cannot contain username (case-insensitive)
  const lowerPassword = password.toLowerCase();
  const lowerUsername = username.toLowerCase();

  if (lowerPassword.includes(lowerUsername)) {
    return false;
    }

  // If all rules pass, password is valid
  return true;
}

// This function connects with the HTML input boxes
function checkPassword() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");
  
  if (isValidPassword(password, username)) {
    result.textContent = "✅ Password is valid!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Password is invalid. Try again!";
    result.style.color = "red";
  }
}