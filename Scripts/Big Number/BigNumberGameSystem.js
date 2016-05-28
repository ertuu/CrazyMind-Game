#pragma strict

var UINumber1: UI.Text;
var UINumber2: UI.Text;
var UINumber3: UI.Text;
var Number1:int;
var Number2:int;
var Number3:int;
 var Bonus:int;


static var ClickNumber1: boolean;
static var ClickNumber2: boolean;
static var ClickNumber3: boolean;


static var IsLevelUp:boolean;
static var IsLevelDown:boolean;
var IsChoosen:boolean;
var IsKeyPressed:boolean;

static var Level:int; // which level player is playing

static var Random_number1:int;
static var Random_number2:int;
static var Random_number3:int;
static var Random_number4:int;
static var Random_number5:int;
static var Random_number6:int;

 var Random_operator1:int; // 0 -> no operation 1->addition 2-> substraction 3->division 4->multiplacation
 var Random_operator2:int;
 var Random_operator3:int;
 
var Biggest_number:int;
var Choosen_number:int;

static var IsGameStarted:boolean;




function Start () {
    //Timer.IsStarted=true;
    IsGameStarted=false;
  
Level=1;
IsLevelUp=false;
IsLevelDown=false;
IsChoosen=true;
Biggest_number=1;
IsKeyPressed=false;

Bonus=3;
}


function Update () {
  
    
        Timer.IsStarted=true;

       

        /*if (IsGameEnd)        // Check points for game end
        GameEnd();
           */

        if(Input.GetKeyDown (KeyCode.A))       // Developer test purpose  .. to come game end
            IsGameStarted=false;  

        if(Input.GetKeyDown (KeyCode.R))       // developer test purpose .. to play again
            Timer.NinetySeconds=89;

        if(Input.GetKeyDown (KeyCode.F))      // developer test purpose.. to count faster.
            Timer.NinetySeconds-=80;

        if(Input.GetKeyDown (KeyCode.T))      // developer test purpose.. to level up ,, extra points
            Score.Score+=90;

        if(Input.GetKeyDown (KeyCode.Q) || (ClickNumber1==true))
        {
            Choosen_number=Number1;
            IsKeyPressed=true;
            ClickNumber1=false;
        }
        if(Input.GetKeyDown (KeyCode.W) || (ClickNumber2==true))
        {
            Choosen_number= Number2;
            IsKeyPressed=true;
            ClickNumber2=false;
        }
        if(Input.GetKeyDown (KeyCode.E) || (ClickNumber3==true))
        {
            Choosen_number= Number3;
            IsKeyPressed=true;
            ClickNumber3=false;
        }

        if(IsKeyPressed ==true)
        {
            if ((Choosen_number) != (Biggest_number))
                Score.Score=Score.Score-20;

            if (Choosen_number==Biggest_number)
            {
                Score.Score=Score.Score+5;
                Choosen_number=0;

            }
            IsKeyPressed=false;
            IsChoosen=true;

        }

       



        if ( IsLevelUp==true)
        {
            if (Bonus > 1)
            {
                Timer.NinetySeconds+=50;
                Bonus-=1;
            }
            Level+=1;
            IsLevelUp=false;
        }

        if ( IsLevelDown==true)
        {
            Level-=1;
            Score.Score-=30;
            IsLevelDown=false;
        }




        if (Level==1) 
        {
            Level1();
            if (Score.Score > 95 )
                IsLevelUp=true;
        }
        if (Level==2)
        {
            Level2();

            if (Score.Score < 100)
                IsLevelDown=true;

            if(Score.Score >195)
                IsLevelUp=true;
        }
        if (Level==3)
        {Level3();

            if (Score.Score >295)
                IsLevelUp=true;

            if (Score.Score < 200)
                IsLevelDown=true;

        }
        if (Level==4)
        {Level4();

            if(Score.Score < 300)
                IsLevelDown=true;

        }
    }




function Level1()
{
while (IsChoosen==true)
{

Random_number1=Random.Range(2,25);
Random_number2=Random.Range(2,25);
Random_number3=Random.Range(2,25);
Number1=Random_number1;
Number2=Random_number2;
Number3=Random_number3;

IsChoosen=false;

CheckEquality();


UINumber1.text=Random_number1.ToString();
UINumber2.text=Random_number2.ToString();
UINumber3.text=Random_number3.ToString();



Sort();


}
}

function Level2()
{
while (IsChoosen == true)
{
Random_number1=Random.Range(2,13);
Random_number2=Random.Range(2,13);
Random_number3=Random.Range(2,13);
Random_number4=Random.Range(2,13);
Random_number5=Random.Range(2,13);
Random_number6=Random.Range(2,13);



UINumber1.text=(Random_number1.ToString() + ' + ' + Random_number4.ToString()) ;
Number1=Random_number1 +Random_number4;

UINumber2.text=(Random_number2.ToString() + ' + ' + Random_number5.ToString()) ;
Number2=Random_number2 +Random_number5;

UINumber3.text=(Random_number3.ToString() + ' + ' + Random_number6.ToString()) ;
Number3=Random_number3 +Random_number6;


Sort();

IsChoosen=false;
CheckEquality();

}
}

function Level3()
{

while (IsChoosen == true)
{
Random_number1=Random.Range(2,13);
Random_number2=Random.Range(2,13);
Random_number3=Random.Range(2,13);
Random_number4=Random.Range(2,13);
Random_number5=Random.Range(2,13);
Random_number6=Random.Range(2,13);
Random_operator1= Random.Range(1,3);
Random_operator2= Random.Range(1,3);
Random_operator3= Random.Range(1,3);

if (Random_operator1 == 1 )
{
UINumber1.text=(Random_number1.ToString() + ' + ' + Random_number4.ToString()) ;
Number1=Random_number1 +Random_number4;
}

if (Random_operator1 == 2 )
{
UINumber1.text=(Random_number1.ToString() + ' - ' + Random_number4.ToString()) ;
Number1=Random_number1 - Random_number4;
}

if (Random_operator2==1){

UINumber2.text=(Random_number2.ToString() + ' + ' + Random_number5.ToString()) ;
Number2=Random_number2 +Random_number5;

}

if (Random_operator2==2){

UINumber2.text=(Random_number2.ToString() + ' - ' + Random_number5.ToString()) ;
Number2=Random_number2 -Random_number5;

}

if (Random_operator3==1){
UINumber3.text=(Random_number3.ToString() + ' + ' + Random_number6.ToString()) ;
Number3=Random_number3 +Random_number6;
}

if (Random_operator3==2){
UINumber3.text=(Random_number3.ToString() + ' - ' + Random_number6.ToString()) ;
Number3=Random_number3 -Random_number6;
}

Sort();

IsChoosen=false;
CheckEquality();

}

}
function Level4()
{

while (IsChoosen == true)
{
Random_number1=Random.Range(2,11);
Random_number2=Random.Range(2,11);
Random_number3=Random.Range(2,11);
Random_number4=Random.Range(2,11);
Random_number5=Random.Range(2,11);
Random_number6=Random.Range(2,11);
Random_operator1= Random.Range(1,4);
Random_operator2= Random.Range(1,4);
Random_operator3= Random.Range(1,4);

if (Random_operator1 == 1 )
{
UINumber1.text=(Random_number1.ToString() + ' + ' + Random_number4.ToString()) ;
Number1=Random_number1 +Random_number4;
}

if (Random_operator1 == 2 )
{
UINumber1.text=(Random_number1.ToString() + ' - ' + Random_number4.ToString()) ;
Number1=Random_number1 - Random_number4;
}

if (Random_operator1 == 3 )
{
UINumber1.text=(Random_number1.ToString() + ' x ' + Random_number4.ToString()) ;

Number1=Random_number1*Random_number4;
}

if (Random_operator2==1){

UINumber2.text=(Random_number2.ToString() + ' + ' + Random_number5.ToString()) ;
Number2=Random_number2 +Random_number5;

}

if (Random_operator2==2){

UINumber2.text=(Random_number2.ToString() + ' - ' + Random_number5.ToString()) ;
Number2=Random_number2 -Random_number5;

}

if (Random_operator2 == 3 )
{
UINumber2.text=(Random_number2.ToString() + ' x ' + Random_number5.ToString()) ;


Number2=Random_number2 * Random_number5;
}


if (Random_operator3==1){
UINumber3.text=(Random_number3.ToString() + ' + ' + Random_number6.ToString()) ;
Number3=Random_number3 +Random_number6;
}

if (Random_operator3==2){
UINumber3.text=(Random_number3.ToString() + ' - ' + Random_number6.ToString()) ;
Number3=Random_number3 -Random_number6;
}

if (Random_operator3 == 3 )
{
UINumber3.text=(Random_number3.ToString() + ' x ' + Random_number6.ToString()) ;



Number3=Random_number3 * Random_number6;
}

Sort();

IsChoosen=false;
CheckEquality();

}




}

function Sort()
{
if((Number1 > Number2) && (Number1> Number3))
Biggest_number=Number1;

if((Number2 > Number1) && (Number2> Number3))
Biggest_number=Number2;

if((Number3 > Number1) && (Number3> Number2))
Biggest_number=Number3;

}





function CheckEquality()
{
if (Number2 == Number1)
IsChoosen=true;
if (Number3 == Number2)
IsChoosen=true;
if (Number3 == Number1 )
IsChoosen=true;
}



