//declaring variables
var numSq=6;
var squares=document.querySelectorAll(".square");
var colors=generateRandomColors(numSq);
var correctColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var displayMessage=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");
var hardbtn=document.getElementById("hardbtn");
var easybtn=document.getElementById("easybtn");


hardbtn.addEventListener("click",function(){
hardbtn.classList.add("selected");
easybtn.classList.remove("selected");
numSq=6;
colors=generateRandomColors(numSq);
correctColor=pickColor();
colorDisplay.textContent = correctColor;
for(i=0;i<squares.length;i++)
{
  squares[i].style.background = colors[i];
  squares[i].style.display="block";
}

});
easybtn.addEventListener("click",function(){
  hardbtn.classList.remove("selected");
  easybtn.classList.add("selected");
  numSq=3;
  colors=generateRandomColors(numSq);
  correctColor=pickColor();
  colorDisplay.textContent = correctColor;
  for(i=0;i<squares.length;i++)
  {
    if(colors[i])
    {
    squares[i].style.background = colors[i];
    }
    else{
      squares[i].style.display="none" ;
    }
  }

});
resetButton.addEventListener("click",function(){


  //on clicking on new colors button
  colors=generateRandomColors(numSq);
  //picking up a random color
  correctColor=pickColor();
  colorDisplay.textContent = correctColor;
  //generating squares of new color
  for(i=0;i<squares.length;i++)
  {
    squares[i].style.background = colors[i];
  }
   h1.style.background="steelblue" ;
});
colorDisplay.textContent = correctColor;

for(var i=0; i<squares.length; i++)
{
  //giving background
  squares[i].style.background = colors[i];
  //adding eventlistener
  squares[i].addEventListener("click",function(){
    var selectedColor = this.style.background;
    if(selectedColor===correctColor)
      {
        displayMessage.textContent="correct";
        resetButton.textContent="play again"
        for(i=0;i<squares.length;i++)
        {
        squares[i].style.background=correctColor;
      }
      h1.style.background=correctColor;

      }
    else
    {
     this.style.background = "#232323";
     displayMessage.textContent="try again";
    }
});
}
function pickColor()
{
  var i=Math.floor(Math.random()*colors.length) ;
  return colors[i];
}
function generateRandomColors(num)
{
  var arr = [];
  for(var i=0;i<num;i++)
  {
    arr.push(randomColor());
  }
  return arr;
}
function randomColor()
{
    var r=Math.floor(Math.random()*256) ;
    var g=Math.floor(Math.random()*256) ;
    var b=Math.floor(Math.random()*256) ;
    return "rgb(" + r + ","+ " " + g + "," + " " + b + ")" ;
}
