// ==UserScript==
// @name        RemoveYouTubeRecommendeds
// @namespace   https://github.com/rayquaza01
// @description Removes the recommended videos from YouTube's sidebar 
// @match       *://www.youtube.com/*
// @license     MIT License
// @version     4.3
// @grant       GM_registerMenuCommand
// ==/UserScript==
function hide(display) {
    var ele = document.getElementsByClassName('view-count');
    for (var i = 0; i < ele.length; i++) {
        if (!ele[i].innerText.match(/\d/)) {
            ele[i].parentNode.parentNode.parentNode.parentNode.style.display = display;
        }
    }
}
hide('none');
var element = document.getElementById('body');
element.addEventListener('transitionend', (event) => {
    if (event.target.id !== 'progress') {
        return false;
    }
    hide('none');
}, false);
GM_registerMenuCommand('Hide Recommendeds', function() { hide('none'); });
GM_registerMenuCommand('Show Recommendeds', function() { hide('block'); });
