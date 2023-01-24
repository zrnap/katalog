function loadMain() {
    var landing = document.getElementById("landing");
    if (landing) {
        landing.remove();
        document.getElementById("main-for-load").style.visibility = "visible";
    }
}

document.addEventListener('click', function () {
    loadMain();
});

var landing = document.getElementById("landing");
if (landing) {
    var landingHeight = landing.clientHeight;
    window.addEventListener('scroll', function () {
        if (window.scrollY > landingHeight) {
            loadMain();
        }
    });
}
