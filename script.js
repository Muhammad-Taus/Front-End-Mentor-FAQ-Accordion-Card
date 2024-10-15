const accordions = document.querySelectorAll(".accordion h3");


accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        
        const accordionText = accordion.nextElementSibling;
        
        console.log(accordionText);
        accordionText.classList.toggle("active");
        accordion.classList.toggle("active");

    });
});