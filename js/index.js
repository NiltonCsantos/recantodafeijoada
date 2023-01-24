
const h3=document.getElementById("title-cover-content");

var text = "JavaScript é muito bom!"
var interval = 200;

function showtext(h3, text, interval) {

  var char = text.split("").reverse();
  
  var typer = setInterval(function() {
  
    if (!char.length) {
        return clearInterval(typer)
    }
    
    var next = char.pop();
    
    el.innerHTML += next;
    
  }, interval);
  
}
showtext(h3, text, interval);