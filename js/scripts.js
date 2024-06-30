document.addEventListener("DOMContentLoaded", function() {
    const scrollToElement = (element) => {
        element.scrollIntoView({ behavior: "smooth" });
    };

    const attachClickListener = (links, targetElement) => {
        links.forEach(function(link) {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                scrollToElement(targetElement);
            });
        });
    };

    const linksAbout = document.querySelectorAll(".about-link");
    const linksProjects = document.querySelectorAll(".projects-link");
    const linksServices = document.querySelectorAll(".services-link");

    const aboutElement = document.querySelector(".header");
    const projectsElement = document.querySelector(".projects-title");
    const servicesElement = document.querySelector(".services");

    attachClickListener(linksAbout, aboutElement);
    attachClickListener(linksProjects, projectsElement);
    attachClickListener(linksServices, servicesElement);
});
