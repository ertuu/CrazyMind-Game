#pragma strict

static var random_dice1: int;  // choosing the arrow (up, down, right, left)
static var random_dice2: int; // choosing the direction 

static var IsChanged: boolean; // After player press buttons, randomize again. 

static var IsGameEnd:boolean; // When time ends or player gets below -50 score

static var IsGameStarted:boolean;


function Start()
{
IsChanged=true;
IsGameEnd=false;
//Timer.IsStarted=true;





}


function Update ()
{
    if (IsGameStarted)
    {

        if(Timer.NinetySeconds==0)  // Game Ends when times Out ! 
            IsGameEnd=true;


        Faster();      // Depending on the score, arrows move faster, on higher score

        if (IsGameEnd)        // Check points for game end
            GameEnd();

        if (IsChanged && !IsGameEnd)       // Check point for randomizing
            Change();


        if (Input.GetKeyDown (KeyCode.B))      // Start game button
        {

        }


        if(Input.GetKeyDown (KeyCode.A))       // Developer test purpose  .. to come game end
            IsGameEnd=true;  

        if(Input.GetKeyDown (KeyCode.R))       // developer test purpose .. to play again
            Again();

        if(Input.GetKeyDown (KeyCode.F))      // developer test purpose.. to count faster.
            Timer.NinetySeconds-=80;

    }}


function Change() 
{
random_dice1=Random.Range(1,5);      // dice aka randoming number 
random_dice2=Random.Range(1,5);
IsChanged=false;
}


function GameEnd()
{

random_dice1=0;                 // stop 
random_dice2=0;
yield WaitForSeconds(5);
//Application.LoadLevel("main_menu");
}


function Faster()
{


if (Score.Score > 100)             // each 100 score, arrows move faster
Move_arrows.Speed=2;
if (Score.Score > 200)
Move_arrows.Speed=3;
if (Score.Score > 300)
Move_arrows.Speed=4;
if (Score.Score > 400)
Move_arrows.Speed=5;
if (Score.Score > 500)
Move_arrows.Speed=6;
if (Score.Score > 600)
Move_arrows.Speed=6.5;
if (Score.Score > 700)
Move_arrows.Speed=7;
if (Score.Score > 800)
Move_arrows.Speed=7.5;
if (Score.Score > 900)
Move_arrows.Speed=8;
if (Score.Score > 1000)
Move_arrows.Speed=8.5;


}


function Again()              // Play again 
{

Timer.NinetySeconds=90;
Move_arrows.Again=true;
yield WaitForSeconds(1);   // waiting for player gets ready
Move_arrows.Again=false;

IsGameEnd=false;



}






















