#pragma strict

var ShowScore: UI.Text;      // score on the screen -- gui
static var Score: int;       // score in the script



function Update ()
{
NoUnderZero();  

ShowScore.text=Score.ToString();



}

function NoUnderZero()        // Player cant keep going on minus points
{

if (Score<-50)
GameSystem.IsGameEnd=true;
//BigNumberGameSystem.IsGameEnd=true;

}