/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * INFO
 * https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript
 * https://github.com/lazarofl/Jquery-Url-Catcher/blob/master/jquery.urlcatcher.js
 */


var URLIFY_URLs = "";
function urlify(text) {
    URLIFY_URLs = "";
    // var urlRegex: /(https?:\/\/)?([\dA-Za-z\._-]+)\.([A-Za-z\.]{2,6})([\/\w\._\-=\?]*)*\/?/,
    var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
//    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
        URLIFY_URLs += '<p><a target="_blank" href="' + url + '">' + url + '</a></p>';
        return '<a target="_blank" href="' + url + '">' + url + '</a>';
    });
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
}

function urlifyToElem(elemID, text) {
    /* TEST */
    var TEST_text = "Find me at http://www.example.com, and also at http://stackoverflow.com.";
    var TEST_html = urlify(TEST_text);
    log.add("*****TEST*****");
    log.add("text = " + TEST_text);
    log.add("html = " + TEST_html);
    log.add("***TEST END***");

    /* YOUR CODE HERE */
    var urls = urlify(text);
    document.getElementById(elemID).innerHTML = urls;
    //log.add(urls);
}

function urlifyReturnOnlyURLsToElem(elemID, text) {
    /* YOUR CODE HERE */
    var urls = urlify(text);
    document.getElementById(elemID).innerHTML = URLIFY_URLs;

}