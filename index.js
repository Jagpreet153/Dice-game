var n1=Math.floor(Math.random()*6)+1;
var img1="dice"+n1+".png";
var imgsrc1="images/"+img1;
var dice1=document.querySelectorAll("img")[0];
dice1.setAttribute("src",imgsrc1);



var n2=Math.floor(Math.random()*6)+1;
var img2="dice"+n2+".png";
var imgsrc2="images/"+img2;
var dice2=document.querySelectorAll("img")[1];
dice2.setAttribute("src",imgsrc2);


if(n1>n2)
{
    document.querySelector("h1").innerHTML="Player 1 wins ! 🚩";
}

else if(n2>n1)
{
    document.querySelector("h1").innerHTML="Player 2 wins ! 🚩";
}

else
{
    document.querySelector("h1").innerHTML="Draw ! ";
}