var StartButton: GameObject;
var StopButton: GameObject;






function GameEnd()
{
    ShapeGameSysV2.IsStarted=false;
    StartButton.SetActive(true);
    StopButton.SetActive(false);
    Timer.IsStarted=false;
}

function GameStart()
{
  
    
    //Script.GameStart();
    StopButton.SetActive(true);
    StartButton.SetActive(false);
    Timer.NinetySeconds=180;
    Score.Score=0;
    
}

function Update () {

    if (Timer.NinetySeconds==0)
    {
        GameEnd();
    }

}