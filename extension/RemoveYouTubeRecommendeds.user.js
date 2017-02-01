// ==UserScript==
// @name        RemoveYouTubeRecommendeds
// @namespace   https://github.com/rayquaza01
// @description Removes the recommended videos from YouTube's sidebar 
// @include     /https?:\/\/www.youtube.com\/watch.*/
// @version     2
// @grant       none
// ==/UserScript==
elements = document.getElementsByClassName('view-count');
re = /[\d]/;
for (i = 0; i < elements.length; i++) {
    temp = elements[i].innerHTML;
    if (!temp.match(re)) {
        elements[i].parentNode.style.display = 'none';
    }
}
