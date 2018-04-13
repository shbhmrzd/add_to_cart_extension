
var base_url = "https://source-to-cart.herokuapp.com/parse?url=";
var grocery_url = "https://grocery.walmart.com/";
var walmart_url = "https://www.walmart.com/cart";
var req_url;
var dest_url;


console.log("Extension Clicked");
console.log("Extension Pressed");

//When sending message from extension, need to specify which tab(content.js) to send message to
// Each tab gets a seperate run on content.js
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message: "get_selection"});
});


// chrome.runtime.sendMessage({"message":"get_selection"});

//listen to message from contentcontent.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if(request.message === "send_selection"){
            console.log("in poupup.js , send_selection");
            req_url = base_url+request.selection;
            console.log(" req arg url ->"+req_url)
            dest_url = walmart_url;
            console.log("walmart cart url -> " + dest_url)

            $.ajax({url: "https://www.google.com", type: 'GET',
                    success: function(result){
                        console.log("success in get call");
                        //$('#loading').style.width = "200px";
                        $('#loading').html("<a href=\""+dest_url+"\">Go to Cart</a>");
                        //chrome.runtime.sendMessage({"message": "open_new_tab", "url": "https://www.google.com"});
                    },
                    error : function(errorText) {
                        console.log("failure in get call");
                        //$('#loading').style.width = "200px";
                        $('#loading').html("Sorry, this service is not available now");
                        //chrome.runtime.sendMessage({"message": "open_new_tab", "url": "https://www.stackoverflow.com"});
                    }
                }
            );
        }
    }
);

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if(request.message === "send_url"){
            console.log("in poupup.js , send_url");
            req_url = base_url+request.address;
            console.log("req url which is the text -> ",req_url);
            dest_url = grocery_url;
            console.log("dest_url grocery -> ",dest_url);

            $.ajax({url: "https://www.google.com", type: 'GET',
                    success: function(result){
                        console.log("success in get call");
                        //$('#loading').style.width = "200px";
                        $('#loading').html("<a href=\""+dest_url+"\">Go to Cart</a>");
                        //chrome.runtime.sendMessage({"message": "open_new_tab", "url": "https://www.stackoverflow.com"});
                    },
                    error : function(errorText) {
                        console.log("failure in get call");
                        //$('#loading').style.width = "200px";
                        $('#loading').html("Sorry, this service is not available now");
                        //chrome.runtime.sendMessage({"message": "open_new_tab", "url": "https://www.stackoverflow.com"});
                    }
                }
            );
        }
    }
);


