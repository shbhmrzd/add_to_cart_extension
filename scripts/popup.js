
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


//listen to message from contentcontent.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if(request.message === "send_selection"){
            console.log("in poupup.js , send_selection");
            req_url = base_url+request.selection;
            console.log(" req arg url ->"+req_url)
            dest_url = walmart_url;
            console.log("walmart cart url -> " + dest_url)

            $.ajax({url: req_url, type: 'GET',
                    success: function(result){
                        console.log("success in get call");
                        document.getElementById("loading").style.width = "50px";
                        document.getElementById("loading").style.height = "30px";
                        document.getElementById("loading").style.background = "#FFFF00";
                        var parent = document.getElementById("loading");
                        var child = document.getElementById("loader");
                        parent.removeChild(child);
                        child = document.getElementById("text-loader");
                        parent.removeChild(child)
                        $('#loading').append("<a color=#0000A0 font-weight=\"bold\" href=\""+dest_url+"\" target=\"_blank\"> Cart</a>");
                    },
                    error : function(errorText) {
                        console.log("failure in get call");
                        document.getElementById("loading").style.width = "100px";
                        document.getElementById("loading").style.height = "70px";
                        document.getElementById("loading").style.background = "#FFFF00";
                        $('#loading').html("Sorry, this service is not available now");
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

            $.ajax({url: req_url, type: 'GET',
                    success: function(result){
                        console.log("success in get call");
                        document.getElementById("loading").style.width = "50px";
                        document.getElementById("loading").style.height = "30px";
                        document.getElementById("loading").style.background = "#FFFF00";
                        var parent = document.getElementById("loading");
                        var child = document.getElementById("loader");
                        parent.removeChild(child);
                        child = document.getElementById("text-loader");
                        parent.removeChild(child)
                        $('#loading').append("<a color=#0000A0 font-weight=\"bold\" href=\""+dest_url+"\" target=\"_blank\"> Cart</a>");
                    },
                    error : function(errorText) {
                        console.log("failure in get call");
                        document.getElementById("loading").style.width = "100px";
                        document.getElementById("loading").style.height = "70px";
                        document.getElementById("loading").style.background = "#FFFF00";
                        $('#loading').html("Sorry, this service is not available now");
                    }
                }
            );
        }
    }
);


