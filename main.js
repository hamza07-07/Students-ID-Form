function run() {
    let user = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let confirmaddress = document.getElementById("confirmaddress").value;
    let uploadpicture = document.getElementById("uploadpicture").value;
    let father = document.getElementById("father").value;
    
    document.getElementById("usermsg").innerHTML = "";
    document.getElementById("emailmsg").innerHTML = "";
    document.getElementById("namemsg").innerHTML = "";
    document.getElementById("fathermsg").innerHTML = "";
    document.getElementById("addressmsg").innerHTML = "";
    document.getElementById("confirmaddressmsg").innerHTML = "";
    document.getElementById("uploadmsg").innerHTML = "";
    
    document.getElementById("user").style.border = "";
    document.getElementById("email").style.border = "";
    document.getElementById("name").style.border = "";
    document.getElementById("father").style.border = "";
    document.getElementById("address").style.border = "";
    document.getElementById("confirmaddress").style.border = "";
    document.getElementById("uploadpicture").style.border = "";
    
    let valid = true;
    
    if (user === "") {
        document.getElementById("user").style.border = "1px solid red";
        document.getElementById("usermsg").innerHTML = "This field is empty";
        valid = false;
    }
    
    if (email === "") {
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById("emailmsg").innerHTML = "This field is empty";
        valid = false;
    }
    
    if (name === "") {
        document.getElementById("name").style.border = "1px solid red";
        document.getElementById("namemsg").innerHTML = "This field is empty";
        valid = false;
    }
    
    if (father === "") {
        document.getElementById("father").style.border = "1px solid red";
        document.getElementById("fathermsg").innerHTML = "This field is empty";
        valid = false;
    }
    
    if (address === "") {
        document.getElementById("address").style.border = "1px solid red";
        document.getElementById("addressmsg").innerHTML = "This field is empty";
        valid = false;
    }
    
    if (confirmaddress === "") {
        document.getElementById("confirmaddress").style.border = "1px solid red";
        document.getElementById("confirmaddressmsg").innerHTML = "This field is empty";
        valid = false;
    } else if (confirmaddress !== address) {
        
        document.getElementById("confirm2addressmsg").innerHTML = "Address does not match";
        valid = false;
    }
    
    if (uploadpicture === "") {
        document.getElementById("uploadpicture").style.border = "1px solid red";
        document.getElementById("uploadmsg").innerHTML = "This field is empty";
        valid = false;
    }
    
    let data = {
        myuser: user,
        myname: name,
        myemail: email,
        mfather: father,
        myaddress: address,
        myconfirmaddress: confirmaddress
    };
    
    if (valid) {
        alert("Your form has been submitted successfully");
        document.getElementById("user").value = "";
        document.getElementById("email").value = "";
        document.getElementById("name").value = "";
        document.getElementById("father").value = "";
        document.getElementById("address").value = "";
        document.getElementById("confirmaddress").value = "";
        document.getElementById("uploadpicture").value = "";
        console.log(data);
    }
}
