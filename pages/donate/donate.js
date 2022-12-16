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
burgerMenu.addEventListener("click",()=>{
navEl.classList.toggle("active");
designerEl.classList.toggle("active");
})




