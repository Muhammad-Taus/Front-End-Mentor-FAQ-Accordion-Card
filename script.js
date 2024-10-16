const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach(accordionTitle => {
    accordionTitle.addEventListener("click", () => {

        const accordionText = accordionTitle.nextElementSibling;

        accordionText.classList.toggle("active");
        accordionTitle.childNodes[3].classList.toggle("active");

        // console.log(accordionTitle.childNodes);
        // console.log(accordionTitle.childNodes[3]);
        // console.log(accordionText);

    });


});
