/*      FUNCTION THAT APPENDS TABLE ROW WITH ITEMS ADDED BY INPUT       */


function formTable(selector){
    var wrapper = document.querySelector(selector);
    var form = wrapper.getElementsByTagName("form")[0];
    var table = wrapper.getElementsByTagName("table")[0];
    
    form.onsubmit = function(ev){
        ev = ev || event;
        ev.preventDefault();

    var tr = document.createElement("tr"), td;
    
    for(let i = 0; i < 5; i++){
        td = document.createElement("td");
        td.innerHTML = this.elements[i].value;
        tr.appendChild(td);
    }    
    table.appendChild(tr);    
    }  
}
formTable(".wrapper");


/*      FUNCTION THAT CHANGES INTRO AIRCRAFT IMAGE      */

// var intro = document.getElementByIs("intro_to_change");
// intro.style.backgroundImage = 'url(../Imgs/sunset.png)';

function changeImage(a) {
    document.getElementById("img_to_change").src= a;
}