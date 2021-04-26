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

    burger.addEventListener("click", () => {
     nav.classList.toggle("nav-active");
    });
}
navSlide();