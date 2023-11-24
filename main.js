//header 
document.addEventListener("DOMContentLoaded",function(){
    burger=document.querySelector(".fa-bars");
        burger.onclick=function(){
            navbar=document.querySelector(".nav_middle");
            navbar.classList.toggle("active");
}
})
///////////////////////////////////////////////////////////////////
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	
});
/////////////////////////////////////////////////////////////////

//function for icons heart to red
function red(x){
    x.classList.toggle("fa-solid");
    if(x.classList.contains("fa-solid")){
        x.style.color="#D43A5E";
    }
    else{
        x.style.color="#000";
    }
}
//////////////////////////////////////////////////////////////////

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        if(mybutton){    
            mybutton.style.display = "block";
        }
    } else {
        if(mybutton){    
            mybutton.style.display = "none";
        }
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//////////////////////////////////////////////////////////////////////

//function for validation form for sign up page

var submitbtn=document.getElementById("submitbtn");
if(submitbtn){
    submitbtn.disabled=true;
}
function valid(x){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var emailerror=document.getElementById("emailerror");
    var passworderror=document.getElementById("passworderror");
    var outemail=document.getElementById("email");
    var outpass=document.getElementById("password");
    if(name.length<=0){
        submitbtn.disabled=true;
    }
    if(email.indexOf("@")==-1 || email.length<=0  ||email.indexOf(".com")==-1){
        emailerror.innerHTML=" * Please enter a valid email";
        outemail.style.border="1px solid red";
        submitbtn.disabled=true;
    }else if(email.indexOf("@")>-1 && email.length>0 && email.indexOf(".com")>-1){
        emailerror.innerHTML="";
        outemail.style.border="1px solid #000";
    }
    if(password.length<8 || password.length>60){
        passworderror.innerHTML="* Please enter a valid password";
        outpass.style.border="1px solid red";
        submitbtn.disabled=true;
    }else if(password.length>4 && password.length<60){
        passworderror.innerHTML="";
        outpass.style.border="1px solid #000";
    }
    if(x.checked==false){
        submitbtn.disabled=true;
    }
    if(email.indexOf("@")>-1 && email.indexOf(".com")>-1 && email.length>0 && password.length>8 &&
    password.length<60 && name.length>0 && x.checked==true){
        submitbtn.disabled=false;
    }
}
/////////////////////////////////////////////////////////////////////////////
//function validiation form for login
function validlog(x){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var emailerror=document.getElementById("emailerror");
    var passworderror=document.getElementById("passworderror");
    var outemail=document.getElementById("email");
    var outpass=document.getElementById("password");
    if(email.indexOf("@")==-1 || email.length<=0){
        emailerror.innerHTML=" * Please enter a valid email";
        outemail.style.border="1px solid red";
        submitbtn.disabled=true;
    }else if(email.indexOf("@")>-1 && email.length>0){
        emailerror.innerHTML="";
        outemail.style.border="1px solid #000";
    }
    if(password.length<8 || password.length>60){
        passworderror.innerHTML="* Please enter a valid password";
        outpass.style.border="1px solid red";
        submitbtn.disabled=true;
    }else if(password.length>4 && password.length<60){
        passworderror.innerHTML="";
        outpass.style.border="1px solid #000";
    }
    if(x.checked ){
        submitbtn.disabled=false;
    }else{
        submitbtn.disabled=true;
    }
    if(email.indexOf("@")>-1 && email.length>0 && password.length>8 &&
    password.length<60 && x.checked==true){
        submitbtn.disabled=false;
    }
}
////////////////////////////////////////////////////////////////////////
//function send email for sign up page
function sendmail(){
var nameinput=document.getElementById("name");
var emailinput=document.getElementById("email");
var passwordinput=document.getElementById("password");
var locationinput=document.getElementById("location");
var btn=document.getElementById("submitbtn");

var publickey="Ig3xR1STyH_1bNJnb";
var serviceid="service_x06ggzd";
var templateid="template_e88xbzw";


var inputfields={
        name:nameinput.value,
        email:emailinput.value,
        password:passwordinput.value,
        location:locationinput.value
    }
    // console.log(inputfields);
    emailjs.send(serviceid,templateid,inputfields)
    .then(function(res) {
        btn.innerHTML="ًSent Successfully"
        var name =document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var location =document.getElementById("location").value;
        localStorage.setItem("Name", name);
        localStorage.setItem("Email", email);
        localStorage.setItem("Password", password);
        localStorage.setItem("Location", location);

        // console.log(
        // localStorage.setItem("Name"),
        // localStorage.getItem("Email"),
        // localStorage.getItem("Password"),
        // localStorage.setItem("Location")
        // );
        nameinput.value="";
        emailinput.value="";
        passwordinput.value="";
        locationinput.value="";
        console.log(res);
        swal({
            title: "Congratulations!",
            text: "We're really happy to have you join the Tulip family",
            icon: "images/check_ring_round.png",
            button: "OK",
            })
            .then(function() {
                // Redirect the user
                window.location.href='login.html';
                });
    });
    
}
///////////////////////////////////////////////////////////////////////////////////
//function send email for login page
function sendmail2(){
    var emailinput=document.getElementById("email");
    var passwordinput=document.getElementById("password");
    
    var publickey="Ig3xR1STyH_1bNJnb";
    var serviceid="service_z4zpqxz";
    var templateid="template_o9n0r95";
    
    
    var inputfields={
            email:emailinput.value,
            password:passwordinput.value
        }
        console.log(inputfields);
        emailjs.send(serviceid,templateid,inputfields)
        .then(function(res) {
            emailinput.value="";
            passwordinput.value="";
            console.log(res);   
            window.location.href='profile.html';
        });
}

///////////////////////////////////////////////////////////////////////////

