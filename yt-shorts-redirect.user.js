// ==UserScript==
// @name         YouTube Shorts to Watch Redirect
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Redirects YouTube Shorts videos to the standard "watch" video player.
// JULES: Remember to increment the version number for each new release.
// @author       j4ck0lantern
// @match        *://www.youtube.com/*
// @downloadURL  https://raw.githubusercontent.com/j4ck0lantern/yt-shorts-redirect/main/yt-shorts-redirect.user.js
// @updateURL    https://raw.githubusercontent.com/j4ck0lantern/yt-shorts-redirect/main/yt-shorts-redirect.user.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    let isRedirecting = false;

    // This function checks the URL and performs the redirect if necessary
    function checkAndRedirect() {
        if (isRedirecting) {
            return;
        }

        const currentUrl = window.location.href;

        // Check if the URL is a YouTube Short
        if (currentUrl.includes('/shorts/')) {
            // Set the flag to prevent multiple redirects
            isRedirecting = true;

            // Replace '/shorts/' with '/watch?v=' to get the standard video URL
            const newUrl = currentUrl.replace('/shorts/', '/watch?v=');

            // Use window.location.replace() to redirect.
            // This is better than setting window.location.href
            // because it doesn't create an entry in the browser's history,
            // so the "back" button will work as expected.
            window.location.replace(newUrl);
        } else {
            isRedirecting = false;
        }
    }

    // Since YouTube is a Single Page Application (SPA), the URL can
    // change without a full page reload. We use setInterval to
    // periodically check the URL for navigation to a "shorts" page.
    // A 100ms interval is frequent enough to be responsive
    // without causing performance issues.
    setInterval(checkAndRedirect, 100);

})();
