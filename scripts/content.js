//alert("hi");
//alert("Start of content.js  Shubham!!");

function sayHello() {
    console.log("Hello from sayHello");

}

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if( request.message === "clicked_browser_action" ) {
//             var url      = window.location.href;
//             var ingredients_url = "https://source-to-cart.herokuapp.com/parse?url="+url
//             var grocery_url = "https://grocery.walmart.com/"
//
//
//             var xmlHttp = new XMLHttpRequest();
//             xmlHttp.onreadystatechange = function() {
//                 if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//                     chrome.runtime.sendMessage({"message": "open_new_tab", "url": grocery_url});
//                 else
//                 {
//                     var alerted = localStorage.getItem('alerted') || '';
//                     if (alerted != 'yes') {
//                         //alert("My alert.");
//                         localStorage.setItem('alerted','yes');
//                     }
//                 }
//             }
//
//             xmlHttp.open("GET", ingredients_url, true); // true for asynchronous
//             xmlHttp.send(null);
//             console.log(ingredients_url)
//
//         }
//     }
// );
//

function showIcon() {
    document.getElementById('loading').style.display ='block';
}

function hideIcon() {
    document.getElementById('loading').style.display ='none';
}




var url = window.location.href;
//var ingredients_url = "https://source-to-cart.herokuapp.com/"//parse?url="+url;
var ingredients_url = "https://www.w3schools.com/tags/ref_httpmethods.asp";
var grocery_url = "https://grocery.walmart.com/";

showIcon();

$.ajax({url: ingredients_url,
    success: function(result){
        //alert(JSON.stringify(result));
        hideIcon();
        chrome.runtime.sendMessage({"message": "open_new_tab", "url": grocery_url});
        //alert("new tab opened grocery");

    },
    error : function(errorText) {
        //alert(JSON.stringify(errorText))
        chrome.runtime.sendMessage({"message": "open_new_tab", "url": "https://www.google.com"});
        hideIcon();
    }

}

);

// var xmlHttp = new XMLHttpRequest();
//
// xmlHttp.onreadystatechange = function() {
//     if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
//         alert("request success state changed");
//         hideIcon();
//         chrome.runtime.sendMessage({"message": "open_new_tab", "url": grocery_url});
//         alert("new tab opened grocery");
//     }
//     else
//         {   alert("request failed");
//             console.log(xmlHttp);
//             alert(xmlHttp.responseText);
//             alert(JSON.stringify(xmlHttp));
//             var alerted = localStorage.getItem('alerted') || '';
//             if (alerted != 'yes') {
//                 //alert("My alert.");
//                 localStorage.setItem('alerted','yes');
//                 hideIcon();
//                 }
//         }
// }
//
// //alert("Entry point for extension on click\n");
// xmlHttp.open("GET", ingredients_url, true); // true for asynchronous
// //alert("request prepared \n");
// xmlHttp.send(null);
// //alert("call sent");
// showIcon();
// //alert(ingredients_url);
