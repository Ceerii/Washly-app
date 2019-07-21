var fullname = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('pass');

document.querySelector('form.signupform').addEventListener('submit', function (e) {
    //prevent the normal submission of the form
    e.preventDefault();

    if (fullname.value !== "" && email.value !== "" && password.value !== "") {
        var user = {
            name: fullname.value,
            email: email.value,
            password: password.value
        }

        if (localStorage.getItem(user.email) === null) {
            localStorage.setItem(user.email, JSON.stringify(user));
            console.log("Hiii")
            window.location.assign("/sign-in.html");
        } else {
            document.querySelector("#statement").innerHTML = "USER ALREADY EXISTS"
        }
    } else {
        document.querySelector("#statement").innerHTML = "Fill inputs please"
    }

   
});
