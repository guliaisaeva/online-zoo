//about interactivity

const aboutLink=document.getElementById("about");
const navLink=document.querySelectorAll(".nav__link");
console.log(navLink)

navLink.forEach(element => {
    element.addEventListener("click",(e)=>{
      aboutLink.classList.remove("active");
    })
});
// for footer
const footerAboutLink=document.getElementById("footer-about");
const footerNavLink=document.querySelectorAll(".footer-nav-link");

footerNavLink.forEach(element => {
    element.addEventListener("click",()=>{
      footerAboutLink.classList.remove("active");
    })
});

// button interactivity

const heroBtn=document.querySelector(".hero__btn");
console.log(heroBtn)
heroBtn.addEventListener("click",(e)=>{
    console.log("it works")
    heroBtn.style.background='#E47209';
})

//validation

const email=document.querySelector("#email");
const  btn=document.querySelector("#btn");

btn.addEventListener("click",function(){
    if(email.value==" "){
        btn.style.border="1px solid black"
    }
})