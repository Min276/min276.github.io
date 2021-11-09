    $(document).ready(function(){
        $('input').focus(function(){
            $(this).css('background-color', 'black');
            $(this).css('color', 'white');
        });
        $('input').blur(function(){
            $(this).css('background-color', 'green');
            $(this).css('color', 'white');
        });
    });

function doCheck() {
    try{
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    // var usernameError = document.getElementById("invalidName");
    // var passwordError = document.getElementById("invalidPassword");
     
     if (username == "MinKhantKyaw"
       && password == "Min30075ttu" ){

        alert( "Login Succeed!" );
        // window.location.href= "/todolist.html";
        return true;
    }else if (username == "" && password == ""){
        alert( "Please enter both Username & Password!");
        return false;
    }else if (username == ""){
        alert( "Please enter Username!");
        return false;
    }else if (password == ""){
        alert("Please enter Password!");
        return false;
    }else if (username != "MinKhantKyaw" && password != "Min30075ttu"){
        alert("Invalid Username & Password!");
        return false;
    } else if (username != "MinKhantKyaw"){
        alert("Invalid Username!");
        return false;
    }else if (password != "Min30075ttu"){
        alert("Invalid Password!");
        return false;
    }
    else {
        // window.location.href = "/userfriendlytodolist.html";
        // document.getElementById('username').innerHTML = '<i class="fa fa-list"></i> ' + username;
        // console.log('username');
        alert("Login Failed!")
        // window.location.href="login.html"
        return false;
    }
    
}
catch(e) {
        return false;
    }
    return false;
}
function doValidate() {
    try{
    var username = document.getElementById("nameSet").value;
    var password = document.getElementById("passwordSet").value;
    // var usernameError = document.getElementById("invalidName");
    // var passwordError = document.getElementById("invalidPassword");
    password.trim();
    var passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(username == "" && password == ""){
        alert("Please set both your username & password!");
        return false;
    }else if (username == ""){
        alert("Please set your username!");
        return false;
    }else if (password == ""){
        alert("Please set your password!");
        return false;
    }else if (!passCheck.test(password)) {
        alert("Error! Password must contain Upper Case, Lower Case, Numbers and between 8 to 20 characters.");
        return false;
    } else {
        alert('Sign Up Succeed!')
        // window.location.href="/userfriendlytodolist.html";
        return true;
    }
}
catch(e) {
        return false;
    }
    return false;
}

