// Blog Reading Code
var xhttp = new XMLHttpRequest(); 

const urlParams = new URL(window.location.toLocaleString()).searchParams;
const postTXT = urlParams.get('post');

xhttp.onreadystatechange = function() { 
  if (this.readyState == 4 && this.status == 200) { 
    var text = this.responseText; 
    document.getElementById("posttext").innerHTML = text;
    console.log(text)
  } 
}; 

xhttp.open("GET", "./posts/"+ postTXT +".txt", true); 
xhttp.send(); 