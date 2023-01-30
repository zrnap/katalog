function scrollDown() {
    window.scrollBy(0, window.innerHeight);
}

window.addEventListener("scroll", function () {
    const landingPage = document.querySelector(".landing-page");
    if (window.scrollY > landingPage.offsetHeight) {
        landingPage.classList.add("hidden");
    }
});