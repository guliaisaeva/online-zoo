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

//  Buger Menu
const burgerMenu=document.querySelector("#burger-menu");
const navEl=document.querySelector(".nav__menu");
const designerEl=document.querySelector(".nav__designer");
const mainEl=document.querySelector("main");
const closeBtn=document.querySelector(".close-icon");
const footerEl=document.querySelector("footer");

burgerMenu.addEventListener("click",()=>{
    openClose();
    mainEl.addEventListener("click",()=>{
        navEl.classList.remove("active");
        designerEl.classList.remove("active");
        mainEl.classList.remove("active");
        closeBtn.classList.remove("active")
        footerEl.classList.remove("active")
    })
    })
    closeBtn.addEventListener("click",openClose)

    function openClose(){
        navEl.classList.toggle("active");
        designerEl.classList.toggle("active");
        mainEl.classList.toggle("active");
        closeBtn.classList.toggle("active");
        footerEl.classList.toggle("active")
    }

    //Carousel in a block Pets

    // let sliderMain=document.querySelector(".animal-cards__slider");
    // console.log(sliderMain)
    // let item=sliderMain.getElementsByClassName("animal-cards__content");
    // console.log(item)
    // function next(){
    //   console.log("works")
    //  sliderMain.appendChild(item[0])
    // }
    // next();

    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("animal-cards__card");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "block";
  }

  slides[slideIndex-1].style.display = "none";

}

// Popup testimonials
const testimonialsCards=document.querySelector(".testimonials__cards");
const card=document.querySelectorAll(".testimonials__card");
Array.from(card).forEach(element=>{
  element.addEventListener("click",()=>{
    createPopup();

  })
})



// testimonialsCards.addEventListener("click",createPopup)
function createPopup(){
  //  const popup=document.createElement("div");
  //  popup.setAttribute("class",
  //  "popup");
  //  const popupCard= document.createElement("div");
  //  popupCard.classList.add("popup-card","testimonials__card")
  //  popup.appendChild(popupCard);
  const modalEl=document.getElementsByClassName("modal");
   Array.from(modalEl).forEach(element=>{
    element.innerHTML=`
    <div class="testimonials__card popup">
    <figure class="testimonials__header">
      <img src="../../assets/icons/testimon-footer/user_icon.svg" alt="user icon">
        <figcaption>
         <p class="user_name">Michael John</p>
         <div class="user_info">
             <p class="user_data">Local Austria</p>
             <p class="user_data"> &middot; Today</p>
         </div>
       </figcaption>
      </figure>
    <div class="testimonials__teastimonial">
     <p>The best online zoo I’ve met. My son delighted very much
         ljves to watch gouillas. Online zoo is one jf the ways to
         instill a love for animals.The best online zoo I’ve met. My
         son delighted very much ljves to watch gouillas. Online zoo
         is one jf the ways to instill a love for animals.</p>
     <p class="lastp">The best online zoo I’ve met. My son delighted very much ljves to
         watch
         gouillas.
         Online zoo is one jf the ways to instill a love for animals.The best online zoo
         I’ve
         met. My son delighted very much ljves to watch gouillas. Online zoo is one jf
         the
         ways to instill a love for </p>
       </div>
       </div>`

    element.classList.toggle("active");
    const mask=document.querySelector(".page-mask");
    mask.classList.toggle("active");
    mask.addEventListener("click",()=>{
      mask.classList.remove("active");
      element.classList.remove("active");
    })
    const xIcon=document.createElement("i");
    xIcon.classList.add("fa-solid","fa-xmark","popup-xmark");
    element.appendChild(xIcon);
        xIcon.addEventListener("click",()=>{
          element.classList.remove("active");
          mask.classList.remove("active");
        })
      });
   }
