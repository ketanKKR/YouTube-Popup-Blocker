/*(function () {
    window.debug = true;
    if (debug) console.log("started");
    setInterval(() => {
    if (!!popupFind()) {
    if (debug) console.log("remove popup");
    const popup = popupFind()
    console.log(popup)
    popup.parentNode.removeChild(popup)
    if (debug) console.log("resume video");
    //pauseFind().click()
    if (debug) console.log("done ");
    }
    }, 1000);
    })();
    function popupFind() {
    return document.querySelector("body > ytd-app > ytd-popup-container");
    }
    function pauseFind(){
    return document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button");
    }*/

    const toggleButton = document.getElementById('btn');
let jsEnabled = true;

toggleButton.addEventListener('click', function() {
  if (jsEnabled) {
    // Disable JavaScript
    jsEnabled = false;
    // You can insert code here to disable JavaScript functionality
    console.log('JavaScript is now disabled');
  } else {
    // Enable JavaScript
    jsEnabled = true;
    // You can insert code here to enable JavaScript functionality
    (function () {
        window.debug = true;
        if (debug) console.log("started");
        setInterval(() => {
        if (!!popupFind()) {
        if (debug) console.log("remove popup");
        const popup = popupFind()
        console.log(popup)
        popup.parentNode.removeChild(popup)
        if (debug) console.log("resume video");
        //pauseFind().click()
        if (debug) console.log("done ");
        }
        }, 1000);
        })();
        function popupFind() {
        return document.querySelector("body > ytd-app > ytd-popup-container");
        }
        function pauseFind(){
        return document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button");
        }
    console.log('JavaScript is now enabled');
  }
});
