function signUp() {
  var successMessageElement = document.getElementById("thank-you-message");
  var signUpButton = document.getElementById("signup-btn");
  signUpButton.disabled = true;
  successMessageElement.style.display = "inline-block";
  setTimeout(function () {
    signUpButton.disabled = false;
    successMessageElement.style.display = "none";
  }, 2000);
}
