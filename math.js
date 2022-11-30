//a seprate script for examples of mathematical code
function Mdivon()
{   //using *getelement* for changing Math div dorder style
    document.getElementById("Mdiv").style.border = "thick solid #0000FF"; 
}
function sum()
{   //making variables to do math
    var a = 11 , b = 2 , c = a * b ;
    alert(c);
    document.getElementById("plus").innerHTML = "11*2=22"; 
}
function equal()
{   //Boolean type result
    var d = 33
    alert((d>50));
    document.getElementById("equ").innerHTML = "No! 33 isn't Higher than 50";
}
