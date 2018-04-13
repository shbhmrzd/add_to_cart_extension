
function isEmpty(str) {
    return (!str || 0 === str.length);
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if(request.message === "get_selection"){
            console.log("Inside content.js now, just entered")
            var text = window.getSelection().toString();
            var url  = window.location.href;
            console.log("text => "+text);
            console.log("url => "+url);

            if(isEmpty(text)){
                console.log("text is empty");
                chrome.runtime.sendMessage({message:"send_url",address:url});
            }else{
                console.log("text is present");
                chrome.runtime.sendMessage({message:"send_selection",selection:text});
            }

        }
    }
);