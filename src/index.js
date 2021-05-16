//header in motion//

const text = document.querySelector(".main");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent= "";

for(let i=0; i< splitText.length; i++){
    text.innerHTML += "<em>"+ splitText[i] + "</em>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const em = text.querySelectorAll("em")[char];
    em.classList.add("fade");
    char++
    if(char===splitText.length){
complete ();
return;
    }
}

function complete(){
    clearInterval(timer);
    timer=null;
}

//nav bar//

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".menu");
    const navLinks = document.querySelectorAll(".menu li");

    burger.addEventListener("click", () => {
        //toggle nav

     nav.classList.toggle("nav-active");

    //animation links
    navLinks.forEach((link, index) =>{
if (link.style.animation) {
    link.style.animation = ""
} else{
link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`;

}
    });

    //burger animation
burger.classList.toggle("animate");

        });
}
navSlide();

