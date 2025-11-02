# YouTube Shorts to Watch Redirect

A user script that automatically redirects YouTube Shorts videos to the standard "watch" video player.

## How it Works

This script monitors the URL of the page you are on. If it detects that you are viewing a YouTube Short (i.e., the URL contains "/shorts/"), it will automatically redirect you to the standard video player by replacing "/shorts/" with "/watch?v=". This allows you to watch the video with the standard YouTube interface, including the progress bar, comments, and other features not available in the Shorts player.

The script is designed to be lightweight and efficient, checking the URL every 100 milliseconds to ensure a quick and seamless redirection.

## Installation

To use this script, you need a user script manager like [Tampermonkey](http://www.tampermonkey.net/).

1.  Install the Tampermonkey browser extension for your browser.
2.  Click [here](<raw_link_to_the_script_will_go_here>) to install the script.
3.  Tampermonkey will open a new tab. Click the "Install" button to add the script to your browser.

## Usage

Once installed, the script will run automatically in the background. Simply navigate to a YouTube Shorts video, and you will be redirected to the standard video player.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
