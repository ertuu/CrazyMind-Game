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

var uparrow:boolean;
var downarrow:boolean;
var leftarrow:boolean;
var rightarrow:boolean;

var FishPos: int;
var FishPosPrev: int;

function Start () {
Timer.IsStarted=true;

FishPos=Random.Range(1,7);

Pos1.SetActive(false);
Pos2.SetActive(false);
Pos3.SetActive(false);
Pos4.SetActive(false);
Pos5.SetActive(false);
Pos6.SetActive(false);

uparrow=false;
downarrow=false;
leftarrow=false;
rightarrow=false;

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

rightarrow=true;
leftarrow=false;
downarrow=false;
uparrow=false;

}

if (FishPos==2)
{
Pos1.SetActive(false);
Pos2.SetActive(true);
Pos3.SetActive(false);
Pos4.SetActive(false);
Pos5.SetActive(false);
Pos6.SetActive(false);

rightarrow=false;
leftarrow=false;
downarrow=false;
uparrow=true;

}
if (FishPos==3)
{
Pos1.SetActive(false);
Pos2.SetActive(false);
Pos3.SetActive(true);
Pos4.SetActive(false);
Pos5.SetActive(false);
Pos6.SetActive(false);

rightarrow=false;
leftarrow=false;
downarrow=true;
uparrow=false;
}
if (FishPos==4)
{
Pos1.SetActive(false);
Pos2.SetActive(false);
Pos3.SetActive(false);
Pos4.SetActive(true);
Pos5.SetActive(false);
Pos6.SetActive(false);

rightarrow=true;
leftarrow=false;
downarrow=false;
uparrow=false;
}
if (FishPos==5)
{
Pos1.SetActive(false);
Pos2.SetActive(false);
Pos3.SetActive(false);
Pos4.SetActive(false);
Pos5.SetActive(true);
Pos6.SetActive(false);

rightarrow=false;
leftarrow=true;
downarrow=false;
uparrow=false;
}
if (FishPos==6)
{
Pos1.SetActive(false);
Pos2.SetActive(false);
Pos3.SetActive(false);
Pos4.SetActive(false);
Pos5.SetActive(false);
Pos6.SetActive(true);

rightarrow=false;
leftarrow=true;
downarrow=false;
uparrow=false;

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
if (touch.phase == TouchPhase.Ended)
{
lp=touch.position;

}


if((fp.y-lp.y)<-40 && uparrow)
{
Score.Score+=5;
ChangePos();

} 
if((fp.y-lp.y)>40 && downarrow)
{
Score.Score+=5;
ChangePos();
}  
if((fp.x-lp.x)<-40 && rightarrow)
{
Score.Score+=5;
ChangePos();
}  
if(( fp.x-lp.x)>40 && leftarrow)
{
Score.Score+=5;
ChangePos();
}   
//if (( fp.x-lp.x)>40 || (fp.x-lp.x)<-40 || (fp.y-lp.y)<-40  || (fp.y-lp.y)>40)
/* {
Score.Score-=20;
}*/

}
}






function Update () {
    FishPositions();
    
    if (IsGameStarted)
    {
        

        Player();

        if(Input.GetKeyDown (KeyCode.Q))
        {
            ChangePos();
            Score.Score+=20;
        } 




    }}