#pragma strict


function ClickYesButton()
{
    if(ShapeGameSysV2.IsStarted)
    {
        ShapeGameSysV2.PlayerChoice=1;
        ShapeGameSysV2.IsClicked=true;
    }
}

function ClickNoButton()
{
    if(ShapeGameSysV2.IsStarted)
    {
        ShapeGameSysV2.PlayerChoice=2;
        ShapeGameSysV2.IsClicked=true;
    }
}