#pragma strict



var up_arrow: GameObject; // shape on the right
var triangle: GameObject;
// star shape taken out.
var arrow:  GameObject;
var circle: GameObject;
var square: GameObject;
var questionmark:GameObject;


var up_arrow2: GameObject; // shape at the middle
var triangle2: GameObject;
// star shape taken out.
var arrow2:  GameObject;
var circle2: GameObject;
var square2: GameObject;
var questionmark2:GameObject;

var up_arrow3: GameObject; // shape on the left
var triangle3: GameObject;
// star shape taken out.
var arrow3:  GameObject;
var circle3: GameObject;
var square3: GameObject;
var questionmark3:GameObject;

var YesButton: GameObject;
var NoButton: GameObject;
var quest:GameObject;

static var IsClicked:boolean;

var Shape: int;            // right
var PrevShape:int;         // mid
var PrevPrevShape:int;     // left

static var IsStarted:boolean;


var IsLevel2:boolean;
//var IsLevel3:boolean;

static var RunOnce: boolean;

static var PlayerChoice:int; // answer 1 = "yes" , 2="no"

function Start()
{   Shape=7; //question mark
    PrevShape=7; //question mark
    PrevPrevShape=7; // question mark
    PlayerChoice=0; // neutral
    //SelectNewShape();
    IsClicked=false;
    IsLevel2=false; // 3rd shape turns to question mark
   // IsLevel3=false; // sliding direction reverts 
    //DirectionChangeOnce=true;
    //GameIsOn=true;

    StartGame();
}

function Update()
{  
    if (IsStarted)
    {Timer.IsStarted=true;


        if(Score.Score>25)
        {
            IsLevel2=true;
        }

 

        if (IsClicked)
        {
                
            if( PlayerChoice == 1 && Shape == PrevPrevShape)
            {
                Score.Score+=5;
            }

            if( PlayerChoice == 2 && Shape != PrevPrevShape)
            {
                Score.Score+=5;
            }

            if( PlayerChoice == 2 && Shape == PrevPrevShape)
            {
                Score.Score-=20;
            }

            if( PlayerChoice == 1 && Shape != PrevPrevShape)
            {
                Score.Score-=20;
            }
        

            SelectNewShape();
            IsClicked=false;

        }
    }
    

}
/*
function DirectionChange()
{ if(DirectionChangeOnce)
{
    Timer.IsStarted=false;
    Timer.NinetySeconds+=20;
    YesButton.SetActive(false);
    NoButton.SetActive(false);
    yield WaitForSeconds(2);
    SelectNewShape();
    yield WaitForSeconds(1);
    SelectNewShape();
    yield WaitForSeconds(1);
    SelectNewShape();

    yield WaitForSeconds(1);

    YesButton.SetActive(true);
    NoButton.SetActive(true);
    Timer.IsStarted=true;
    DirectionChangeOnce=false;

}
}*/

function StartGame()
{ 
   
        YesButton.SetActive(false);
        NoButton.SetActive(false);
        quest.SetActive(false);

        yield WaitForSeconds(1);
        SelectNewShape();
        yield WaitForSeconds(1);
        SelectNewShape();
        yield WaitForSeconds(1);
        SelectNewShape();

        YesButton.SetActive(true);
        NoButton.SetActive(true);
        quest.SetActive(true);

        
        
    }


function SelectNewShape()
{   

   
        PrevPrevShape=PrevShape;
        PrevShape=Shape;
    

   /* if (IsLevel3)
    {   
    Shape=PrevShape;
    PrevShape=PrevPrevShape;
    DirectionChange();
               
    }
    */



   Shape=Random.Range(1,6);

   if (Shape==1)
   {
       up_arrow.SetActive(true);
       triangle.SetActive(false);
       // star shape taken out.
       arrow.SetActive(false);
       circle.SetActive(false);
       square.SetActive(false);
       questionmark.SetActive(false);
   }
   if (Shape==2)
   {
       up_arrow.SetActive(false);
       triangle.SetActive(true);
       // star shape taken out.
       arrow.SetActive(false);
       circle.SetActive(false);
       square.SetActive(false);
       questionmark.SetActive(false);
   }
   if (Shape==3)
   {
       up_arrow.SetActive(false);
       triangle.SetActive(false);
       arrow.SetActive(true);
       circle.SetActive(false);
       square.SetActive(false);
       questionmark.SetActive(false);
   }
   if (Shape==4)
   {
       up_arrow.SetActive(false);
       triangle.SetActive(false);
       // star shape taken out.
       arrow.SetActive(false);
       circle.SetActive(true);
       square.SetActive(false);
       questionmark.SetActive(false);
   }
   if (Shape==5)
   {
       up_arrow.SetActive(false);
       triangle.SetActive(false);
       // star shape taken out.
       arrow.SetActive(false);
       circle.SetActive(false);
       square.SetActive(true);
       questionmark.SetActive(false);
   }
   if (Shape==6)
   {
       up_arrow.SetActive(false);
       triangle.SetActive(false);
       // star shape taken out.
       arrow.SetActive(false);
       circle.SetActive(false);
       square.SetActive(false);
       questionmark.SetActive(true);
   }


// ****************************************************

   if (PrevShape==1)
   {
       up_arrow2.SetActive(true);
       triangle2.SetActive(false);
       // star shape taken out.
       arrow2.SetActive(false);
       circle2.SetActive(false);
       square2.SetActive(false);
       questionmark2.SetActive(false);
   }
   if (PrevShape==2)
   {
       up_arrow2.SetActive(false);
       triangle2.SetActive(true);
       // star shape taken out.
       arrow2.SetActive(false);
       circle2.SetActive(false);
       square2.SetActive(false);
       questionmark2.SetActive(false);
   }
   if (PrevShape==3)
   {
       up_arrow2.SetActive(false);
       triangle2.SetActive(false);
       // star shape taken out.
       arrow2.SetActive(true);
       circle2.SetActive(false);
       square2.SetActive(false);
       questionmark2.SetActive(false);
   }
   if (PrevShape==4)
   {
       up_arrow2.SetActive(false);
       triangle2.SetActive(false);
       // star shape taken out.
       arrow2.SetActive(false);
       circle2.SetActive(true);
       square2.SetActive(false);
       questionmark2.SetActive(false);
   }
   if (PrevShape==5)
   {
       up_arrow2.SetActive(false);
       triangle2.SetActive(false);
       // star shape taken out.
       arrow2.SetActive(false);
       circle2.SetActive(false);
       square2.SetActive(true);
       questionmark2.SetActive(false);
   }
   if (PrevShape==6)
   {
       up_arrow2.SetActive(false);
       triangle2.SetActive(false);
       // star shape taken out.
       arrow2.SetActive(false);
       circle2.SetActive(false);
       square2.SetActive(false);
       questionmark2.SetActive(true);
   }


    //******************************************************

   if (!IsLevel2)
   {
       if (PrevPrevShape==1)
       {
           up_arrow3.SetActive(true);
           triangle3.SetActive(false);
           // star shape taken out.
           arrow3.SetActive(false);
           circle3.SetActive(false);
           square3.SetActive(false);
           questionmark3.SetActive(false);
       }
       if (PrevPrevShape==2)
       {
           up_arrow3.SetActive(false);
           triangle3.SetActive(true);
           // star shape taken out.
           arrow3.SetActive(false);
           circle3.SetActive(false);
           square3.SetActive(false);
           questionmark3.SetActive(false);
       }
       if (PrevPrevShape==3)
       {
           up_arrow3.SetActive(false);
           triangle3.SetActive(false);
           // star shape taken out.
           arrow3.SetActive(true);
           circle3.SetActive(false);
           square3.SetActive(false);
           questionmark3.SetActive(false);
       }
       if (PrevPrevShape==4)
       {
           up_arrow3.SetActive(false);
           triangle3.SetActive(false);
           // star shape taken out.
           arrow3.SetActive(false);
           circle3.SetActive(true);
           square3.SetActive(false);
           questionmark3.SetActive(false);
       }
       if (PrevPrevShape==5)
       {
           up_arrow3.SetActive(false);
           triangle3.SetActive(false);
           // star shape taken out.
           arrow3.SetActive(false);
           circle3.SetActive(false);
           square3.SetActive(true);
           questionmark3.SetActive(false);
       }
       if (PrevPrevShape==6)
       {
           up_arrow3.SetActive(false);
           triangle3.SetActive(false);
           // star shape taken out.
           arrow3.SetActive(false);
           circle3.SetActive(false);
           square3.SetActive(false);
           questionmark3.SetActive(true);
       }
   }

   if (IsLevel2)
   {
       up_arrow3.SetActive(false);
       triangle3.SetActive(false);
       arrow3.SetActive(false);
       circle3.SetActive(false);
       square3.SetActive(false);
       questionmark3.SetActive(true);
   }
 


}