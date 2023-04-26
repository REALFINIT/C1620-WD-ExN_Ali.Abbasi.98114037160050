//a seprate script for examples of mathematical code
function Mdivon()
{   //using *getelement* for changing Math div dorder style
    document.getElementById("Mdiv").style.border = "thick solid #48134d"; 
}
function sum()
{   //making variables to do math
    var a = 11 , b = 2 , c = a * b ;
    alert(c);
    document.getElementById("plus").innerHTML = "11*2=22"; 
}
function equal()
{   //Boolean type result
    alert("33>50");
    document.getElementById("equ").innerHTML = "No! 33 isn't grater than 50.";
}
function equal2()
{
    alert("33>50");
    document.getElementById("equ").innerHTML = "Exactly , it's less than 50."
}
function salary()
{
    var H , P , Res;
    H = prompt("how many hours did you work?");
    P = prompt("put payment of one hour:");
    Res = H * P ;
    alert (Res);
    document.getElementById("sala").innerHTML = "You earned :" + Res;
}
function bmi()
{
    var height , Weight , bm ;
    height = prompt("please put your height:");
    Weight = prompt("please enter your weight:");
    bm = Weight / (height * height);
    alert (bm);
    
}
if ( bm <= "18.5") {
    document.getElementById("bmical").innerHTML = bm + "Your bmi is too low my friend :(";
}