const radio=document.querySelectorAll(".amount");
console.log(radio)
const label=document.querySelectorAll(".progress_bar__radio");
console.log(label)


// radio.forEach(element=>{
//     element.addEventListener('change', function(e) {
//         if (this.checked) {
//           console.log("radio is checked..");
//           for (let index = 0; index < element.length; index++) {
//             const lbl = element[index];
//             // if(lbl=="checked")
//             lbl.style.color="green";
//           }
//         } else {
//           console.log("radio is not checked..");
//         }
//       });
// })

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
    footerEl.classList.remove("active");
})
})
closeBtn.addEventListener("click",openClose)

function openClose(){
    navEl.classList.toggle("active");
    designerEl.classList.toggle("active");
    mainEl.classList.toggle("active");
    closeBtn.classList.toggle("active");
    footerEl.classList.toggle("active");
}

// Amount functionality
const barEl=document.getElementsByClassName("amount");
const amountEl=document.querySelector(".number-input")
Array.from(barEl).forEach(element => {
    element.addEventListener("change",(e)=>{
       let value=e.target.value;
  amountEl.value=amountEl.textContent=value;
    })
});

amountEl.addEventListener("input",(e)=>{
    Array.from(barEl).forEach(element => {
        element.addEventListener("change",(e)=>{
           let value=e.target.value;
      amountEl.value=amountEl.textContent=value;

    if(amountEl.value===value){
       console.log("super")
    }
})})
  })
