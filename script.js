const accordion = document.querySelector(".accordion h3");

// for(i=0; i<accordion.length ; i++){
//     accordion[i].addEventListener("click", ()=> {
//         this.classList.toggle("active");
//     })
// }



accordion.addEventListener("click", (e) => {
    alert("accprdion clicked!");
    console.log(accordion);
    this.classList.toggle("active");
})
