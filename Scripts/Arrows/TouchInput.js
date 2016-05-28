#pragma strict

var Finger: Transform;
private var fp: Vector2; // first finer position 
private var lp: Vector2; // last finger position

function Start () {


}

function Update ()
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

if (touch.phase == TouchPhase.Ended)
{
if (( fp.x-lp.x)>80) // left swipe
{// sfdsfs
}
else if ((fp.x-lp.x)<-80) // right swipe
{
//adasdas
}
else if((fp.y-lp.y)<-80) // up swipe
{//asdasdsa
}
else if((fp.y-lp.y)>80) // down swipe
{
}
}
}
}



