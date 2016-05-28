#pragma strict
var StartButton: GameObject;
var StopButton: GameObject;


function Update()
{
    if (Score.Score<-50)
    {GameEnd();
       
    }

    if (Timer.NinetySeconds==0)
    {
        GameEnd();
    }
 
}



function GameEnd()
{
    GameSystemLostFish.IsGameStarted=false;
    StartButton.SetActive(true);
    StopButton.SetActive(false);
    Timer.IsStarted=false;
}

function GameStart()

{   Timer.IsStarted=true;
    GameSystemLostFish.IsGameStarted=true;
    StopButton.SetActive(true);
    StartButton.SetActive(false);
    Timer.NinetySeconds=90;
    Score.Score=0;

}