var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("msg-error");
var submitError = document.getElementById("submit-error");

// 
function validateName() {
  var name = document.getElementById("contact-name").value.trim();

  if (name.length === 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

// ✅ Phone validation
function validatePhone() {
  var phone = document.getElementById("contact-phone").value.trim();

  if (phone.length === 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Phone number must be 10 digits";
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

// ✅ Email validation
function validateEmail() {
  var email = document.getElementById("contact-email").value.trim();

  if (email.length === 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/)) {
    emailError.innerHTML = "Enter a valid email";
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}





function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false; 
  }

  messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}



// ✅ Final submit validation
function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = 'block';
    submitError.innerHTML = "Please fix errors before submitting";
    setTimeout(function() {
        submitError.style.display='none';
        
    }, 4000);
    return false;
  }

  submitError.innerHTML = " form submitted succesfully";
  return true;
}
