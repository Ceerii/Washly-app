// login form auth

document.querySelector('.form').addEventListener("submit", logged);
document.querySelector('.form').addEventListener("submit", changeLayout);

    var submits = document.querySelector('.loginform');
    var loginemail = document.querySelector('#loginemail');
    var loginpass = document.querySelector('#loginpass');
    var NavContent =  document.querySelector(".navContent");
    var secondNavContent =  document.querySelector(".secondnavContent");

    
     
    function logged (event) {
        event.preventDefault();
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
                window.location.assign("/modal.html");
                //    changeLayout();
                localStorage.setItem('status', 'loggedIn');
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
    };
    

    function changeLayout(event){
        event.preventDefault();
        if(localStorage.getItem('status') != null){
           secondNavContent.style.display = "block";
           NavContent.style.display = "none";
              console.log("hola")
        }else{
            secondNavContent.style.display = "none";
            NavContent.querySelector(".navContent").style.display = "block";
            console.log("yeah no")
        }
    }
    



  