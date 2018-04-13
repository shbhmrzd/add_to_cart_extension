chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            var url      = window.location.href;
            var ingredients_url = "https://source-to-cart.herokuapp.com/parse?url="+url
            var grocery_url = "https://grocery.walmart.com/"


            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    chrome.runtime.sendMessage({"message": "open_new_tab", "url": grocery_url});
                else
                {
                    var alerted = localStorage.getItem('alerted') || '';
                    if (alerted != 'yes') {
                        alert("My alert.");
                        localStorage.setItem('alerted','yes');
                    }
                }
            }
            xmlHttp.open("GET", ingredients_url, true); // true for asynchronous
            xmlHttp.send(null);
            console.log(ingredients_url)

        }
    }
);

