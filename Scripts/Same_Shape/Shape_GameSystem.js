#pragma strict
private var square: boolean; // code_number: 1 
private var triangle: boolean; //code_number: 2
private var circle: boolean;//code_number: 3
private var up_arrow: boolean;//code_number: 4
private var right_arrow: boolean;//code_number: 5
private var star:boolean;//code_number: 6
 var Shape:int; // active shape
 var PrevShape:int; //previous shape
 static var PlayerChoice:int; // 0 -> Nothing choosen 'yet' 1-> Yes 2-> No
 
var BlipSound:AudioClip;

  
 var Probability:int; // 33% chance  1-> same 2-> different 3->different    

var SquareObject: GameObject;
var TriangleObject: GameObject;
var CircleObject: GameObject;
var UpArrowObject: GameObject;
var RightArrowObject: GameObject;
var StarObject: GameObject;

var SquareObject2: GameObject;
var TriangleObject2: GameObject;
var CircleObject2: GameObject;
var UpArrowObject2: GameObject;
var RightArrowObject2: GameObject;
var StarObject2: GameObject;


function Start () {

   
square=true;
triangle=false;
circle=false;
up_arrow=false;
right_arrow=false;
star=false;

Probability=0;
PlayerChoice=0;
Shape=Random.Range(1,6);
PrevShape=Shape;
yield WaitForSeconds(2);
Shape=Random.Range(1,6);


}

function Update () {
    Timer.IsStarted=true;

if (Input.GetKeyDown (KeyCode.Q))
PlayerChoice=1;

if (Input.GetKeyDown (KeyCode.W))
PlayerChoice=2;

Show_Shape();
Shape_Check();


}

function Shape_Change()
{


  if (PlayerChoice == 1 || PlayerChoice==2 )
{
PrevShape=Shape;


Shape=Random.Range(1,7);
//GetComponent.<AudioSource>().PlayOneShot(BlipSound);
}


PlayerChoice=0;


}


function Shape_Check()
{
if (PlayerChoice==1)
{
if (PrevShape==Shape)
{
Score.Score+=5;
}

if (PrevShape!=Shape)
{
Score.Score-=20;
}
Shape_Change();
}

if (PlayerChoice==2)
{
if (PrevShape==Shape)
{
Score.Score-=20;
}

if (PrevShape!=Shape)
{
Score.Score+=5;
}
}
Shape_Change();


}


function Show_Shape() {


if (PlayerChoice==0)
{
if (Shape==1)
{
SquareObject.SetActive(true);
TriangleObject.SetActive(false);
CircleObject.SetActive(false);
UpArrowObject.SetActive(false);
RightArrowObject.SetActive(false);
StarObject.SetActive(false);



}
if (Shape==2)
{
SquareObject.SetActive(false);
TriangleObject.SetActive(true);
CircleObject.SetActive(false);
UpArrowObject.SetActive(false);
RightArrowObject.SetActive(false);
StarObject.SetActive(false);

}
if (Shape==3)
{
SquareObject.SetActive(false);
TriangleObject.SetActive(false);
CircleObject.SetActive(true);
UpArrowObject.SetActive(false);
RightArrowObject.SetActive(false);
StarObject.SetActive(false);

}
if (Shape==4)
{SquareObject.SetActive(false);
TriangleObject.SetActive(false);
CircleObject.SetActive(false);
UpArrowObject.SetActive(true);
RightArrowObject.SetActive(false);
StarObject.SetActive(false);
}
if (Shape==5)
{SquareObject.SetActive(false);
TriangleObject.SetActive(false);
CircleObject.SetActive(false);
UpArrowObject.SetActive(false);
RightArrowObject.SetActive(true);
StarObject.SetActive(false);

}
if (Shape==6)
{
SquareObject.SetActive(false);
TriangleObject.SetActive(false);
CircleObject.SetActive(false);
UpArrowObject.SetActive(false);
RightArrowObject.SetActive(false);
StarObject.SetActive(true);
}


}


}






