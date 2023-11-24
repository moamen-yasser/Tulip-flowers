///////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () =>{

    //funcctions for filter secarch 
    const searchinput=document.getElementById("search-input");
        const searchsuggestions=document.getElementById("search-suggestions");
    
        const suggestionsdata=[
        "Is The Perfect Way To Show Your Love",
        "Flowers always make people better"," happier and more helpful","They are sunshine, food and medicine to the soul.",
        "Perfect For your beloved","Voila Forest Cake With Roses Hand","Emma Remal Scarf With White Roses Bouquet",
        "Summer Vibes With Orange Roses","Light Pink Bouquet White Wrap","Al-Moled Bouquet With Purple and White roses",
        "Get Well Soon With Colorful Bouquet","Key L'azurde With White Roses","Felizmoda silver Bracelet With Pink Roses Bouquet",
        "Now you can customize your bouquet","Through the following three steps, you can create your own unique bouquet",
        "Decoration","White Kosha","pink Kosha","Discover Our Chocolate Bouquet Delights","Send a with Video Message with Your Flowers by QR Code",
        "Wedding Flowers Add a Touch of Elegance","We Use Eco-Friendly Flower Paper",
        "Fresh Flowers Delivered in Air-Conditioned Cars","Add a Personal Touch to Your Bouquet"
        ]
    
        function updatesuggestions(query){
        searchsuggestions.innerHTML="";
    
        const filtersuggestions=suggestionsdata.filter((item) =>
            item.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );
    
        filtersuggestions.forEach((suggestion) => {
            const li =document.createElement('li');
            li.textContent=suggestion;
            li.addEventListener('click', () => {
            setsearchinputvalue(suggestion);
            window.location.href='shop.html';
            hidesuggestions();
            });
            searchsuggestions.appendChild(li);
        });
    
        togglesuggestions(filtersuggestions.length > 0);
        }
    
        function setsearchinputvalue(value){
        searchinput.value=value;
        }
    
        function hidesuggestions(show){
        searchsuggestions.style.display= show ? 'block' :'none';
        }
    
        searchinput.addEventListener('input', () =>{
        const query =searchinput.value;
        updatesuggestions(query);
        });
    
        document.addEventListener('click' ,(event) => {
        if (
            !searchsuggestions.contains(event.target) && 
            event.target !== searchinput
        )
        {
            hidesuggestions();
        }
        });
    
        searchinput.addEventListener("keydown" ,(event) =>{
        if(event.key === "Enter"){
            event.preventDefault();
        }
        });
///////////////////////////////////////////////////////////////////// 
//google map   
    let map;

    async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
    center: { lat: 30.06263, lng: 31.24967 },
    zoom: 8,
    
    });
    new google.maps.Marker({
        position: { lat: 30.06263, lng:31.24967 },
        map:map,
        draggable: false,
        animation: google.maps.Animation.DROP,
    });
}

initMap();
});
/////////////////////////////////////////////////////////////////////
//validition form


function validlog(){
    var submitbtn=document.getElementById("submitbtn");
    submitbtn.disabled=true;
    var email=document.getElementById("email").value;
    var name=document.getElementById("name").value;
    var message=document.getElementById("textarea").value;

    var emailerror=document.getElementById("emailerror");
    var nameerror=document.getElementById("nameerror");

    var outemail=document.getElementById("email");
    var outname=document.getElementById("name");
    var outmessage=document.getElementById("textarea");

    if(name.length<=0 ){
        nameerror.innerHTML=" * Please enter a valid user name";
        nameerror.style.display="block";
        outname.style.border="1px solid #D43A5E";
        submitbtn.disabled=true;
    }else if(name.length>=4){
        nameerror.innerHTML=" ";
        outname.style.border="1px solid #15202B";
    }
    if(email.indexOf("@")==-1 || email.length<=0 || email.indexOf(".com")==-1){
        emailerror.innerHTML=" * Please enter a valid email";
        emailerror.style.display="block";
        outemail.style.border="1px solid #D43A5E";
        submitbtn.disabled=true;
    }else if(email.indexOf("@")>-1 && email.length>0 && email.indexOf(".com")>-1){
        emailerror.innerHTML=" ";
        outemail.style.border="1px solid #15202B";
    }
    if(message.length<20){
        outmessage.style.border="1px solid #D43A5E";
        submitbtn.disabled=true;
    }
    else if(message.length>=20){
        outmessage.style.border="1px solid #15202B";
    }
    if(email.indexOf("@")>-1 && email.indexOf(".com")>-1 && email.length>0 
    && name.length>=8 && message.length>=20){
        submitbtn.disabled=false;
    }
}
/////////////////////////////////////////////////////////////////////////////
//send message on emailjs

function sendmail(){
    var nameinput=document.getElementById("name");
    var emailinput=document.getElementById("email");
    var messageinput=document.getElementById("textarea");
    var btn=document.getElementById("submitbtn");
    
    var publickey="Ig3xR1STyH_1bNJnb";
    var serviceid="service_z4zpqxz";
    var templateid="template_o9n0r95";
    
    
    var inputfields={
            name:nameinput.value,
            email:emailinput.value,
            message:messageinput.value,
        }
        // console.log(inputfields);
        emailjs.send(serviceid,templateid,inputfields)
        .then(function(res) {
            btn.innerHTML="ًSent Successfully"
            // var name =document.getElementById("name").value;
            // var email = document.getElementById("email").value;
            // var message = document.getElementById("textarea").value;
            // localStorage.setItem("Name", name);
            // localStorage.setItem("Email", email);
            // localStorage.setItem("Message", message);
    
            // console.log(
            // localStorage.setItem("Name"),
            // localStorage.getItem("Email"),
            // localStorage.getItem("Password"),
            // localStorage.setItem("Location")
            // );
            nameinput.value="";
            emailinput.value="";
            messageinput.value="";
            console.log(res);
            swal({
                title: "Thank You!",
                text: "We're really happy to have you Contact the Tulip Team",
                icon: "images/check_ring_round.png",
                button: "OK",
                })
        });
        
    }