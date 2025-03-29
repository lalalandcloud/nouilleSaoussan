const navEl = document.querySelector(".navB");
const burgerEl = document.querySelector(".burger")

burgerEl.addEventListener('click' , () => {
    navEl.classList.toggle('navB--open');
})