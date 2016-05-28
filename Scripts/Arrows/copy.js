#pragma strict

var uparrow: boolean;     // choosing the arrow up or down
var rightarrow:boolean;   // choosing the arrow right or left
var downarrow: boolean;
var leftarrow:boolean;
var positivex: boolean;  // choosing the moving Direction right or left
var positivey: boolean; // choosing the moving direction up or down
var negativex: boolean;
var negativey: boolean;

 var fp: Vector2; // first finer position 
 var lp: Vector2; // last finger position

var IsScoreAdd: boolean;
static var Again:boolean;


var ArrowUp: GameObject;
var ArrowDown: GameObject;
var ArrowLeft: GameObject;
var ArrowRight: GameObject; 

var dice1:int;             // randoms the arrow         
var dice2:int;             // randoms the direction

var Points:int;

static var Speed:float;

  
function Start() {

uparrow=false;               // default settings, non choosen
rightarrow=false;
leftarrow=false;
downarrow=false;         
positivex=false;
positivey=false;
negativex=false;
negativey=false;

IsScoreAdd=false;

Again=false;

Points=0;

Speed=1;

}

function Update () {

dice1=GameSystem.random_dice1;           // getting values from GameSystem.js
dice2=GameSystem.random_dice2;

if(Again)
{
Points=0;               // Scores gets 0 when player wants to play again
Speed=1;
}


if (!GameSystem.IsGameEnd)                 // If game doesnt end,, 
{

Choose();
Select();
Move();
Player();
InsideFrame();

Score.Score=Points;
}
}

function Choose()        // Choosing the arrow and direction according to dice (randomizing) values
{

if (dice1==1)
{
uparrow=true;
downarrow=false;
leftarrow=false;
rightarrow=false;
}
if (dice1==2)
{
uparrow=false;
downarrow=true;
leftarrow=false;
rightarrow=false;
}
if (dice1==3)
{
uparrow=false;
downarrow=false;
leftarrow=true;
rightarrow=false;
}
if (dice1==4)
{
uparrow=false;
downarrow=false;
leftarrow=false;
rightarrow=true;
}
if (dice2==1)
{
positivex=true;
negativex=false;
positivey=false;
negativey=false;
}
if (dice2==2)
{
positivex=false;
negativex=false;
positivey=true;
negativey=false;
}
if (dice2==3)
{
positivex=false;
negativex=true;
positivey=false;
negativey=false;
}
if (dice2==4)
{
positivex=false;
negativex=false;
positivey=false;
negativey=true;
}

}

function Select ()      // Chosen type of arrows appear on the screen 
{
if (uparrow)
{
ArrowUp.SetActive(true);
ArrowDown.SetActive(false);
ArrowRight.SetActive(false);
ArrowLeft.SetActive(false);
}
if (downarrow)
{
ArrowUp.SetActive(false);
ArrowDown.SetActive(true);
ArrowRight.SetActive(false);
ArrowLeft.SetActive(false);
}
if (rightarrow)
{
ArrowUp.SetActive(false);
ArrowDown.SetActive(false);
ArrowRight.SetActive(true);
ArrowLeft.SetActive(false);
}
if (leftarrow)
{
ArrowUp.SetActive(false);
ArrowDown.SetActive(false);
ArrowRight.SetActive(false);
ArrowLeft.SetActive(true);
}

}

function Move()                  // Moving the arrows on the screen
{
if (positivex)
{
ArrowUp.transform.position.x+=Speed;
ArrowDown.transform.position.x+=Speed;
ArrowRight.transform.position.x+=Speed;
ArrowLeft.transform.position.x+=Speed;
}
if (positivey)
{
ArrowUp.transform.position.y+=Speed;
ArrowDown.transform.position.y+=Speed;
ArrowRight.transform.position.y+=Speed;
ArrowLeft.transform.position.y+=Speed;
}
if (negativex)
{
ArrowUp.transform.position.x-=Speed;
ArrowDown.transform.position.x-=Speed;
ArrowRight.transform.position.x-=Speed;
ArrowLeft.transform.position.x-=Speed;
}
if (negativey)
{
ArrowUp.transform.position.y-=Speed;
ArrowDown.transform.position.y-=Speed;
ArrowRight.transform.position.y-=Speed;
ArrowLeft.transform.position.y-=Speed;
}

}

function Player()               // Game control buttons
{
for (var touch: Touch in Input.touches)
{

if ( touch.phase == TouchPhase.Began)
{
fp= touch.position;
lp= touch.position;
}
if (touch.phase == TouchPhase.Moved)
{
lp=touch.position;
}


if(Input.GetKeyDown (KeyCode.UpArrow) && uparrow)
{
Points+=5;
GameSystem.IsChanged=true;
IsScoreAdd=true;
} 
if(Input.GetKeyDown (KeyCode.DownArrow) && downarrow)
{
Points+=5;
GameSystem.IsChanged=true;
IsScoreAdd=true;
}  
if(Input.GetKeyDown (KeyCode.RightArrow) && rightarrow)
{
Points+=5;
GameSystem.IsChanged=true;
IsScoreAdd=true;
}  
if(Input.GetKeyDown (KeyCode.LeftArrow) && leftarrow)
{
Points+=5;
GameSystem.IsChanged=true;
IsScoreAdd=true;
}   
if (Input.GetKeyDown (KeyCode.LeftArrow) || Input.GetKeyDown (KeyCode.RightArrow) || Input.GetKeyDown (KeyCode.UpArrow) || Input.GetKeyDown (KeyCode.DownArrow))
{
AddScore();

}

}
}






function AddScore()         // Wrong button gives 20 points punishment
{

if(!IsScoreAdd)
{
Points-=20;
}

IsScoreAdd=false;
}

function InsideFrame()                // Arrows stays in the screen, when they go out to the right, 
{                                       // they appear again from left
if ( ArrowUp.transform.position.x > Screen.width )
{
ArrowUp.transform.position.x=0;
}
if ( ArrowDown.transform.position.x > Screen.width )
{
ArrowDown.transform.position.x=0;
}
if ( ArrowLeft.transform.position.x > Screen.width )
{
ArrowLeft.transform.position.x=0;
}
if ( ArrowRight.transform.position.x > Screen.width )
{
ArrowRight.transform.position.x=0;
}

if (ArrowUp.transform.position.x < 0)
{
ArrowUp.transform.position.x=Screen.width;
}

if (ArrowDown.transform.position.x < 0)
{
ArrowDown.transform.position.x=Screen.width;
}

if (ArrowLeft.transform.position.x < 0)
{
ArrowLeft.transform.position.x=Screen.width;
}

if (ArrowRight.transform.position.x < 0)
{
ArrowRight.transform.position.x=Screen.width;
}

if (ArrowUp.transform.position.y > Screen.height)
{
ArrowUp.transform.position.y=0;
}
if (ArrowDown.transform.position.y > Screen.height)
{
ArrowDown.transform.position.y=0;
}
if (ArrowRight.transform.position.y > Screen.height)
{
ArrowRight.transform.position.y=0;
}
if (ArrowLeft.transform.position.y > Screen.height)
{
ArrowLeft.transform.position.y=0;
}

if (ArrowUp.transform.position.y < 0)
{
ArrowUp.transform.position.y=Screen.height;
}
if (ArrowDown.transform.position.y < 0)
{
ArrowDown.transform.position.y=Screen.height;
}
if (ArrowLeft.transform.position.y < 0)
{
ArrowLeft.transform.position.y=Screen.height;
}
if (ArrowRight.transform.position.y < 0)
{
ArrowRight.transform.position.y=Screen.height;
}


}



















