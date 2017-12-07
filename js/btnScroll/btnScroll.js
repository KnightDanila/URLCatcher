/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function btnScroll(elemID){
    var elem = document.getElementById(elemID);
    if(!elem.classList.contains("hover")){
        elem.classList.add("hover");
    } else {
        elem.classList.remove("hover");
    }
}