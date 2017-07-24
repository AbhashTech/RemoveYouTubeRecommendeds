// ==UserScript==
// @name        RemoveYouTubeRecommendeds
// @namespace   https://github.com/rayquaza01
// @description Removes the recommended videos from YouTube's sidebar 
// @match       *://www.youtube.com/*
// @license     MIT License
// @version     4.4.1
// @grant       GM_registerMenuCommand
// @icon        https://raw.githubusercontent.com/Rayquaza01/RemoveYouTubeRecommendeds/master/extension/icons/icon-96.png
// ==/UserScript==
function hide(display) {
    var ele = document.getElementsByClassName("view-count");
    for (var item of ele) {
        if (!item.innerText.match(/\d/)) {
            item.parentNode.parentNode.parentNode.parentNode.style.display = display;
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
