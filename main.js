// Check if the landing-page element exists
const landingPage = document.querySelector(".landing-page");
if (landingPage && window.scrollY === 0) {
    // Disable scrolling
    document.body.style.overflow = "hidden";
}

function scrollDown() {
    // Enable scrolling
    document.body.style.overflow = "auto";
    // Remove the landing-page element
    landingPage.remove();
}
