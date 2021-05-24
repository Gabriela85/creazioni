//logo animation
const logo = document.querySelectorAll("#logo path");
for(let i = 0; i<logo.length; i++){
    console.log(`letter ${i} is ${logo [i].getTotalLength()}`);
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

//cookies alert

