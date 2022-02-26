var attempt = 3;
function email(){
    document.getElementById('email').value = '';
}
function validate(){
    var email = document.getElementById('email').value;
    if(attempt == 0){
        alert("Please try again later!");
        var email = document.getElementById('email').disabled = true;
        document.getElementById('email').value = "";
        document.getElementById('email').style.border = 'transparent';
    }
    var num = /[0-9]/;
    var lowerCase = /[a-z]/;
    var upperCase = /[A-Z]/;
    if(email.includes("@") && email.includes("gmail") || email.includes("hotmail") || email.includes("yahoo")){
        if(email.includes(".com") || email.includes(".net")){
            document.getElementById('email').style.border = 'solid 1px green';
            alert('We recived the message!');
            document.getElementById('email').value = '';
            document.getElementById('email').style.border = 'transparent';
            document.getElementById('describtionInput').value = '';
        }
        else{
            document.getElementById('email').value = 'Email is not valid!';
            document.getElementById('email').style.border = 'solid 1px red';
            attempt--;
            return;
        }
    }
    else{
        document.getElementById('email').value = 'Email is not valid!';
        document.getElementById('email').style.border = 'solid 1px red';
        attempt--;
        return;
    }
}