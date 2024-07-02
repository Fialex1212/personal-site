const openMenu = (button) => {
    const ul = document.querySelector(".header__list");
    ul.classList.toggle('active');
    button.classList.toggle('active');
};
