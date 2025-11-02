// ==UserScript==
// @name         YouTube Shorts to Watch Redirect
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Redirects YouTube Shorts videos to the standard "watch" video player.
// @author       j4ck0lantern
// @match        *://www.youtube.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // This function checks the URL and performs the redirect if necessary
    function checkAndRedirect() {
        const currentUrl = window.location.href;

        // Check if the URL is a YouTube Short
        if (currentUrl.includes('/shorts/')) {
            // Replace '/shorts/' with '/watch?v=' to get the standard video URL
            const newUrl = currentUrl.replace('/shorts/', '/watch?v=');

            // Use window.location.replace() to redirect.
            // This is better than setting window.location.href
            // because it doesn't create an entry in the browser's history,
            // so the "back" button will work as expected.
            window.location.replace(newUrl);
        }
    }

    // Since YouTube is a Single Page Application (SPA), the URL can
    // change without a full page reload. We use setInterval to
    // periodically check the URL for navigation to a "shorts" page.
    // A 100ms interval is frequent enough to be responsive
    // without causing performance issues.
    setInterval(checkAndRedirect, 100);

})();
