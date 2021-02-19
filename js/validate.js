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

function doValidate() {
    try{
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    // var usernameError = document.getElementById("invalidName");
    // var passwordError = document.getElementById("invalidPassword");
    username.trim();
    password.trim();
    var expr = /^[a-zA-Z0-9_" "]{6,20}$/;
    var expr2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if ( !expr.test(username)) {
        alert("Username Error: Only Alphabets, Numbers and Underscore and between 6 to 20 characters.");
        return false;
    } else if (!expr2.test(password)) {
        alert("Password Error: A password must contain Upper Case, Lower Case, Numbers and between 8 to 20 characters.");
        return false;
    } else {
        window.location.href = "userfriendlytodolist.html";
        return true;
    }
    
}
catch(e) {
        return false;
    }
    return false;
}
