#pragma strict

//using UnityEngine.UI;

var Click: UI.Button;



function ClickYes () 
{
Shape_GameSystem.PlayerChoice=1;
}

function ClickNo () 
{
Shape_GameSystem.PlayerChoice=2;
}

function ClickNum1() 
{
BigNumberGameSystem.ClickNumber1=true;
}

function ClickNum2() 
{
BigNumberGameSystem.ClickNumber2=true;
}

function ClickNum3() 
{
BigNumberGameSystem.ClickNumber3=true;
}