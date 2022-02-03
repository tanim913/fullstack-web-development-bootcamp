var randomDice1 =  Math.floor(Math.random()*6 + 1);

var randomDice2 =  Math.floor(Math.random()*6 + 1);

var imageSouce1 = "images/dice" + randomDice1 + ".png";

var imageSouce2 = "images/dice" + randomDice2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",imageSouce1);

document.querySelectorAll("img")[1].setAttribute("src",imageSouce2);

if(randomDice1>randomDice2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!🔥";
}
else if (randomDice2>randomDice1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!🔥";
}
else if (randomDice2 === randomDice1)
{
    document.querySelector("h1").innerHTML = "It's a draw! 🌹";
}
else
{
    document.querySelector("h1").innerHTML = "Error 404!💢 ";
}