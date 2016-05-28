#pragma strict

var UINinetySeconds: UI.Text;   // 90 seconds timer
static var NinetySeconds: int; 
static var IsStarted: boolean; // timer started or not

function Start ()    
{

IsStarted=false;  

NinetySeconds=90;

InvokeRepeating("Timer",1.0,1.0);   // Calling the function each second. 

}

function Update () {
UINinetySeconds.text=NinetySeconds.ToString();           // Timer on the GUI

}



function Timer() 
{
if (IsStarted && NinetySeconds>0 && !GameSystem.IsGameEnd) // If game is not stopped and time is not out , go on
NinetySeconds-=1;   // Counting down

/*if (NinetySeconds==2)      // Time is out ! 
{

//NinetySeconds=0;
GameSystem.IsGameEnd=true;
*/
}


