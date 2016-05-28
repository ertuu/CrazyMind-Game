#pragma strict



var Level1Object: GameObject;
var Level2Object: GameObject;
var Level3Object: GameObject;



function Update () {

    if (FindBoxGameSystem.IsGameStarted)
    { WhichLevel();
    FindBoxGameSystem.Level1IsON=true;
    }
}

function WhichLevel()
{
    if (FindBoxGameSystem.Level1IsON)
    {
        Level1Object.SetActive(true);
        Level2Object.SetActive(false);
        Level3Object.SetActive(false);
    }

    if (FindBoxGameSystem.Level2IsON)
    {
        Level1Object.SetActive(false);
        Level2Object.SetActive(true);
        Level3Object.SetActive(false);
    }

    if (FindBoxGameSystem.Level3IsON)
    {
        Level1Object.SetActive(false);
        Level2Object.SetActive(false);
        Level3Object.SetActive(true);
    }
}