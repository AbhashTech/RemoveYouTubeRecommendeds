function hide(display) {
    var ele = document.getElementsByClassName("style-scope ytd-browse");
    for (var item of ele) {
        if (!item.innerText.match(/\d/)) {
            item.parentNode.style.display = display;
        }
    }
}
hide("none");
document.getElementById("body").addEventListener("transitionend", (event) => {
    if (event.target.id !== "progress") {
        return false;
    }
    hide("none");
});
GM_registerMenuCommand("Hide Recommendeds", () => { hide("none"); });
GM_registerMenuCommand("Show Recommendeds", () => { hide("list-item"); });
