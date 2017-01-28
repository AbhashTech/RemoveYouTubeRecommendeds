// ==UserScript==
// @name        RemoveYouTubeRecommendeds
// @namespace   https://github.com/rayquaza01
// @description Removes the recommended videos from YouTube's sidebar 
// @include     /https?:\/\/www.youtube.com\/watch.*/
// @version     1
// @grant       none
// ==/UserScript==
var elements = document.getElementsByClassName('view-count');
for (var i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML.indexOf('Recommended for you') !== -1) {
        elements[i].parentNode.style.display = 'none';
    }
}
