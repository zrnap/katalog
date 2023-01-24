function loadMain() {
    document.getElementById("main-for-load").style.visibility = "visible";
}

document.addEventListener('click', function () {
    document.getElementById("landing").style.opacity = "0";
});

setTimeout(loadMain, 1000);
