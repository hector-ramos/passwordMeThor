var passwordEl = document.getElementById('my-password');

function passwordMeter () {
    var password = passwordEl.value;
    var upperCase = /[A-Z]/;
    var lowerCase = /[a-z]/;
    var numbers = /[0-9]/;
    var specialChar = /[!@&)]/;
    var hasUpperCase = false;
    var hasLowerCase = false;
    var hasNumbers = false;
    var hasSpecialChar = false;

    if (password === '' || password === "undefined") {
        return false;
    }

    if (password.search(upperCase) >= 0) {
        hasUpperCase = true;
    }

    if (password.search(lowerCase) >= 0) {
        hasLowerCase = true;
    }

    if (password.search(numbers) >= 0) {
        hasNumbers = true;
    }

    if (password.search(specialChar) >= 0) {
        hasSpecialChar = true;
    }

}

passwordEl.addEventListener("keyup", passwordMeter, false);