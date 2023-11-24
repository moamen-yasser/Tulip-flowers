///////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () =>{
    ///////////////////////////////////////////////////////////////////////////////
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
            searchsuggestions.contains(event.target) && 
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
    
        
    });
/////////////////////////////////////////////////////////////////////////
//var of images and description 
var bigimg=document.getElementById("bigimg");
var s1img=document.getElementById("s1img");
var s2img=document.getElementById("s2img");
var s3img=document.getElementById("s3img");
var s4img=document.getElementById("s4img");
var dess=document.getElementById("dess");
////////////////////////////////////////////////////////////////////////////
// var of links transtion to details page
var block1=document.getElementById("block1");
var block2=document.getElementById("block2");
var block3=document.getElementById("block3");
var block4=document.getElementById("block4");
var block5=document.getElementById("block5");
var block6=document.getElementById("block6");
var block7=document.getElementById("block7");
var block8=document.getElementById("block8");
var block9=document.getElementById("block9");
var block10=document.getElementById("block10");
var block11=document.getElementById("block11");
var block12=document.getElementById("block12");

///////////////////////////////////////////////////////////////////////
const blocksarray=[block1,block2,block3,block4,block5,block6,
    block7,block8,block9,block10,block11,block12];
        fetch('details.json')
        .then(response => {
        return response.json();
        })
        .then(data =>{
            for(let j=0 ;j<blocksarray.length ;j++){
                blocksarray[j].addEventListener("click", (event) => {
                    document.getElementById("text").style.display="none";
                    document.getElementById("header").style.display="block";
                    document.getElementById("sec1").style.display="none";
                    document.getElementById("product-details").style.display="block";
                    for(let i=j ;i<data.length ;i++){
                        bigimg.src=data[j].bigimgurl;
                        s1img.src=data[j].s1url;
                        s2img.src=data[j].s2url;
                        s3img.src=data[j].s3url;
                        s4img.src=data[j].s4url;
                        dess.innerHTML=data[j].des;
                    }
                })
        }
        })
/////////////////////////////////////////////////////////////////////////////
function displayBigImage(element) {
    const smallImageSrc = element.src;
    const bigImage = document.getElementById('bigimg');
    bigImage.src = smallImageSrc;
}