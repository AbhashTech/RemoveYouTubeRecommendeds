// ==UserScript==
// @name        RemoveYouTubeRecommendeds
// @namespace   https://github.com/rayquaza01
// @description Removes the recommended videos from YouTube's sidebar 
// @include     /https?:\/\/www.youtube.com\/watch.*/
// @version     2
// @grant       none
// ==/UserScript==
elements = document.getElementsByClassName('view-count');
for (i = 0; i < elements.length; i++) {
    if (!elements[i].innerHTML.match(/[\d]/)) {
        elements[i].parentNode.style.display = 'none';
    }
}
