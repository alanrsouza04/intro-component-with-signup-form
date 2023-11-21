const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener('submit', (e) => {
    e.preventDefault()
    check()
});

function check() {
    const firstValue = firstName.value;
    const lastValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if (firstValue === '') {
        checkError(firstName, "First Name cannot be empty");
    } else {
        checkSus(firstName)
    }

    if (lastValue === '') {
        checkError(lastName, "Last Name cannot be empty");
    }else {
        checkSus(lastName)
    }

    if (emailValue === '') {
        checkError(email, "Email Address cannot be empty");
    } else if (!checkEmail(emailValue)) {
        checkError(email, "Looks Like this is ot an email");
    }else {
        checkSus(email)
    }

    if (passwordValue === '') {
        checkError(password, 'Password cannot be empty');
    }else {
        checkSus(password)
    }

}

function checkError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    formControl.className = 'form-control error'
    small.innerText = message;
}
function checkSus(input) {
    const formControl = input.parentElement;

    formControl.classList.remove("error")
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
  