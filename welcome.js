//using a seprated script for welcome the user and a theme change action
alert("welcome");                                           
var personname = prompt("what's your name?");
    if (personname != null) {
    document.getElementById("name").innerHTML =
    "Hi " + personname + "! wellcome to my site:)";
  }
  function red() {
    document.getElementsByClassName("htyle").innerHTML
  }
function themefunc() {
    if (themefunc != null) {
      document.getElementById("themeask").innerHTML =
      "which color do you perfer?";
      document.getElementById("tmbox").innerHTML = <button onclick ="red()">RED</button>
    }
  
  }
