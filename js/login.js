var attempt = 3;
function pass(){
    var pass = document.getElementById('pass').type = 'password';
    document.getElementById('pass').value = '';
}
function email(){
    document.getElementById('email').value = '';
}
function validate(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    if(attempt == 0){
        alert("Please try again later!");
        var email = document.getElementById('email').disabled = true;
        document.getElementById('email').value = "";
        document.getElementById('email').style.border = 'transparent';
        var pass = document.getElementById('pass').disabled = true;
        document.getElementById('pass').value = "";
        document.getElementById('pass').style.border = 'transparent';
    }

    if(email.includes("@") && email.includes("gmail") || email.includes("hotmail") || email.includes("yahoo")){
        if(email.includes(".com") || email.includes(".net")){
            document.getElementById('email').style.border = 'solid 1px green';
        }
        else{
            document.getElementById('email').value = 'Email is not valid!';
            document.getElementById('email').style.border = 'solid 1px red';
            attempt--;
            return;
        }
        //window.location = "index.html";
    }
    else{
        document.getElementById('email').value = 'Email is not valid!';
        document.getElementById('email').style.border = 'solid 1px red';
        attempt--;
        return;
    }
    /*var passw=  /^[A-Za-z0-9]/;
    if(pass.length >= 8 && pass.match(passw)){
        alert("asd");
    }*/
    var num = /[0-9]/;
    var lowerCase = /[a-z]/;
    var upperCase = /[A-Z]/;
    if(pass.length < 8){
        document.getElementById('pass').type = 'text';
        document.getElementById('pass').value = 'Password must have at least 8 characters!';
        document.getElementById('pass').style.border = 'solid 1px red';
        attempt--;
    }
    else if(!pass.match(num)){
        document.getElementById('pass').type = 'text';
        document.getElementById('pass').value = 'Password must contain at least one number!';
        document.getElementById('pass').style.border = 'solid 1px red';
        attempt--;
    }
    else if(!pass.match(lowerCase)){
        document.getElementById('pass').type = 'text';
        document.getElementById('pass').value = 'Password must contain at least one lowerCase!';
        document.getElementById('pass').style.border = 'solid 1px red';
        attempt--;
    }
    else if(!pass.match(upperCase)){
        document.getElementById('pass').type = 'text';
        document.getElementById('pass').value = 'Password must contain at least one upperCase!';
        document.getElementById('pass').style.border = 'solid 1px red';
        attempt--;
    }
    else{
        document.getElementById('pass').style.border = 'solid 1px green';
        window.location = "index.html";
    }
}