// ==UserScript==
// @name        RemoveYouTubeRecommendeds
// @namespace   https://github.com/rayquaza01
// @description Removes the recommended videos from YouTube's sidebar 
// @match       *://www.youtube.com/*
// @license     MIT License
// @version     3.1
// @grant       none
// ==/UserScript==
function hide() {
    let elements = document.getElementsByClassName('view-count');
    for (let i = 0; i < elements.length; i++) {
        if (!elements[i].innerHTML.match(/\d/)) {
            elements[i].parentNode.style.display = 'none';
        }
    }
}
function youtubePageChange() {
    hide();
    let element = document.getElementById("body");
    element.addEventListener("transitionend", function(event) {
        if (event.target.id != 'progress') return false;
        hide();
    }, false);
}
window.onload = youtubePageChange();
