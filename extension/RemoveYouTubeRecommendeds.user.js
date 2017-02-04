// ==UserScript==
// @name        RemoveYouTubeRecommendeds
// @namespace   https://github.com/rayquaza01
// @description Removes the recommended videos from YouTube's sidebar 
// @match       *://www.youtube.com/*
// @license     MIT License
// @version     4
// @grant       GM_registerMenuCommand
// ==/UserScript==
function hide(display) {
    let elements = document.getElementsByClassName('view-count');
    for (let i = 0; i < elements.length; i++) {
        if (!elements[i].innerHTML.match(/\d/)) {
            elements[i].parentNode.style.display = display;
        }
    }
}
hide('none');
let element = document.getElementById('body');
element.addEventListener('transitionend', function(event) {
    if (event.target.id != 'progress') return false;
    hide('none');
}, false);
GM_registerMenuCommand('Hide Recommendeds', function() { hide('none'); });
GM_registerMenuCommand('Show Recommendeds', function() { hide('block'); });
