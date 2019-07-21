// login form auth

var loginemail = document.querySelector('#loginemail');
var loginpass = document.querySelector('#loginpass');
var submit = document.querySelector('form.loginform');





submit.addEventListener('submit', function (e) {

    e.preventDefault();


    if (loginemail.value !== "" && loginpass.value !== "") {
        console.log("It holds values")
        var user = {    
            loginemail: loginemail.value,
            loginpass: loginpass.value
        }
       

        if(localStorage.getItem(user.loginemail) !== null){
            let userInfo = JSON.parse(localStorage.getItem(user.loginemail));
            // document.querySelector("#text").innerHTML = "The Email does not exist. Sign up"
         
           if((user.loginemail === userInfo.email) && (user.loginpass === userInfo.password)){
            window.location.assign("/logged-in.html");
            document.querySelector("#userfirstname").innerHTML = localStorage.getItem(userInfo.name);
        } else {
            document.querySelector("#text").innerHTML = "Password is incorrect."
            
        }
        }else{
            document.querySelector("#text").innerHTML = "Email is incorrect."
        } 
    }else{
        console.log("Awwwn!")
        document.querySelector("#state").innerHTML = "Fill inputs please" 
    }
});