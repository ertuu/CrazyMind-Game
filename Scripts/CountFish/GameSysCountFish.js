#pragma strict

static var IsGameStarted:boolean;

var Pos1: GameObject;
var Pos2: GameObject;
var Pos3: GameObject;
var Pos4: GameObject;
var Pos5: GameObject;
var Pos6: GameObject;

var fp: Vector2; // first finer position 
var lp: Vector2; // last finger position

var number5:boolean;
var number6:boolean;
var number7:boolean;
var number8:boolean;

var FishPos: int;
var FishPosPrev: int;

static var FishCount:int;

function Start () {
   

    FishPos=Random.Range(1,7);

    Pos1.SetActive(false);
    Pos2.SetActive(false);
    Pos3.SetActive(false);
    Pos4.SetActive(false);
    Pos5.SetActive(false);
    Pos6.SetActive(false);

    number5=false;
    number6=false;
    number7=false;
    number8=false;

    
}

function ChangePos()
{
    FishPosPrev=FishPos;

    FishPos=Random.Range(1,7);

    if (FishPosPrev==FishPos)
    {
        FishPos=Random.Range(1,7);

    }

}




function FishPositions()
{
   

    if (FishPos==1)
    {
        Pos1.SetActive(true);
        Pos2.SetActive(false);
        Pos3.SetActive(false);
        Pos4.SetActive(false);
        Pos5.SetActive(false);
        Pos6.SetActive(false);

        number5=true;
        number6=false;
        number7=false;
        number8=false;

    }

    if (FishPos==2)
    {
        Pos1.SetActive(false);
        Pos2.SetActive(true);
        Pos3.SetActive(false);
        Pos4.SetActive(false);
        Pos5.SetActive(false);
        Pos6.SetActive(false);

        number5=true;
        number6=false;
        number7=false;
        number8=false;

    }
    if (FishPos==3)
    {
        Pos1.SetActive(false);
        Pos2.SetActive(false);
        Pos3.SetActive(true);
        Pos4.SetActive(false);
        Pos5.SetActive(false);
        Pos6.SetActive(false);

        number5=false;
        number6=true;
        number7=false;
        number8=false;
    }
    if (FishPos==4)
    {
        Pos1.SetActive(false);
        Pos2.SetActive(false);
        Pos3.SetActive(false);
        Pos4.SetActive(true);
        Pos5.SetActive(false);
        Pos6.SetActive(false);

        number5=false;
        number6=false;
        number7=false;
        number8=true;
    }
    if (FishPos==5)
    {
        Pos1.SetActive(false);
        Pos2.SetActive(false);
        Pos3.SetActive(false);
        Pos4.SetActive(false);
        Pos5.SetActive(true);
        Pos6.SetActive(false);

        number5=false;
        number6=true;
        number7=false;
        number8=false;
    }
    if (FishPos==6)
    {
        Pos1.SetActive(false);
        Pos2.SetActive(false);
        Pos3.SetActive(false);
        Pos4.SetActive(false);
        Pos5.SetActive(false);
        Pos6.SetActive(true);

        number5=false;
        number6=false;
        number7=true;
        number8=false;

    }
    

}


function Player()
{
    if(FishCount==5 && number5)
    {
        Score.Score+=5;
        ChangePos();
        FishCount=0;

    } 

    if( FishCount==5 && number6 )
    {
        Score.Score-=5;
        ChangePos();
        FishCount=0;
    }

    if( FishCount==5 && number7 )
    {
        Score.Score-=5;
        ChangePos();
        FishCount=0;
    }

    if( FishCount==5 && number8 )
    {
        Score.Score-=5;
        ChangePos();
        FishCount=0;
    }

    if(FishCount==6 && number6)
    {
        Score.Score+=5;
        ChangePos();
        FishCount=0;
    }  

    if(FishCount==6 && number7)
    {
        Score.Score-=5;
        ChangePos();
        FishCount=0;
    }  
    if(FishCount==6 && number5)
    {
        Score.Score-=5;
        ChangePos();
        FishCount=0;
    }  

    if(FishCount==6 && number8)
    {
        Score.Score-=5;
        ChangePos();
        FishCount=0;
    }  

    if(FishCount==7 && number7)
    {
        Score.Score+=5;
        ChangePos();
        FishCount=0;
    }  

    if(FishCount==7 && number5)
    {
        Score.Score-=5;
        ChangePos();
        FishCount=0;
    } 

    if(FishCount==7 && number6)
    {
        Score.Score-=5;
        ChangePos();
        FishCount=0;
    } 

    if(FishCount==7 && number8)
    {
        Score.Score-=5;
        ChangePos();
        FishCount=0;
    } 
    if( FishCount==8 && number8)
    {
        Score.Score+=5;
        ChangePos();
        FishCount=0;
    }  

    if( FishCount==8 && number5)
    {
        Score.Score-=5;
        ChangePos();
        FishCount=0;
    }

    if( FishCount==8 && number6)
    {
        Score.Score-=5;
        ChangePos();
        FishCount=0;
    }

    if( FishCount==8 && number7)
    {
        Score.Score-=5;
        ChangePos();
        FishCount=0;
    }
}


/*function Player()               // Game control buttons
{
    for (var touch: Touch in Input.touches)
    {

    if ( touch.phase == TouchPhase.Began)
    {
    fp= touch.position;
    lp= touch.position;
    }
if (touch.phase == TouchPhase.Ended)
{
    lp=touch.position;

}


if((fp.y-lp.y)<-40 && number5)
{
    Score.Score+=5;
    ChangePos();

} 
if((fp.y-lp.y)>40 && number6)
{
    Score.Score+=5;
    ChangePos();
}  
if((fp.x-lp.x)<-40 && number7)
{
    Score.Score+=5;
    ChangePos();
}  
if(( fp.x-lp.x)>40 && number8)
{
    Score.Score+=5;
    ChangePos();
}   
//if (( fp.x-lp.x)>40 || (fp.x-lp.x)<-40 || (fp.y-lp.y)<-40  || (fp.y-lp.y)>40)
/* {
Score.Score-=20;
}*/
/*
}
} 
*/


function Update () {
    FishPositions();
    Timer.IsStarted=true;
    var FishNumberTest:int;
    FishNumberTest=FishCount;
        

        Player();

        if(Input.GetKeyDown (KeyCode.Q))
        {
            ChangePos();
            Score.Score+=20;
        } 




    }