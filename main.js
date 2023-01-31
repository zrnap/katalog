function scrollDown() {
    window.scrollBy(0, window.innerHeight);
}

window.addEventListener("scroll", function () {
    const landingPage = document.querySelector(".landing-page");
    if (window.scrollY > landingPage.offsetTop + landingPage.offsetHeight) {
        landingPage.classList.add("hidden");
    }
});

// window.addEventListener("scroll", function () {
//     const landingPage = document.querySelector(".landing-page");
//     if (window.scrollY > landingPage.offsetHeight) {
//         landingPage.classList.add("hidden");
//     }
// });

10.2. 10: 00
