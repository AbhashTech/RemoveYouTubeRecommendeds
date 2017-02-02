// ==UserScript==
// @name        RemoveYouTubeRecommendeds
// @namespace   https://github.com/rayquaza01
// @description Removes the recommended videos from YouTube's sidebar 
// @match       *://www.youtube.com/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @license     MIT License
// @version     3
// @grant       none
// ==/UserScript==
function hide() {
    elements = document.getElementsByClassName('view-count');
    for (i = 0; i < elements.length; i++) {
        if (!elements[i].innerHTML.match(/[\d]/)) {
            elements[i].parentNode.style.display = 'none';
        }
    }
}
// From here: http://stackoverflow.com/questions/21123035/how-to-run-a-script-every-time-a-new-page-is-loaded-on-youtube
function youtubePageChange() {
    hide();
    $('body').on('transitionend', function(event) {
        if (event.target.id != 'progress') return false;
        hide();
    });
}
$(youtubePageChange);
