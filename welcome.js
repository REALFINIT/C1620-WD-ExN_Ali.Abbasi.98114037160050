//using a seprated script for welcome the user and a theme change action
alert("welcome");                                           
var personname = prompt("what's your name?");
    if (personname != null) {
    document.getElementById("name").innerHTML =
    "Hi " + personname + "! wellcome to my site:)";
  }
function themefunc() {
    if (themefunc != null) {
      document.getElementById("themeask").innerHTML =
      "which color do you perfer?";
    }
  
  }
