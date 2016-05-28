#pragma strict

static var RandomBox1: int;
static var RandomBox2: int;
static var RandomBox3: int;
static var RandomBox4: int;
static var RandomBox5:int;
static var RandomBox6:int;
static var RandomBox7:int;

var RB1:int;  //Test random box1
var RB2:int;
var RB3:int;
var RB4:int;
var RB5:int;
var RB6:int;
var RB7:int;



static var RRN:boolean;  // Repeated Random Number

function Start () {
RRN=false;


}

/*function CheckNumbers() {

while (RRN)
{

if ( RandomBox2 == (RandomBox1 ))
{
RandomBox2=Random.Range(1,17);
}
if ( RandomBox3 == ((RandomBox2) || (RandomBox1))) 
{RandomBox3=Random.Range(1,17);
}
if ( RandomBox4 == ((RandomBox3) || (RandomBox2) || (RandomBox1 )))
{RandomBox4=Random.Range(1,17);
}
if ( RandomBox5 == ((RandomBox4) || (RandomBox3) || (RandomBox2) || (RandomBox1 )))
{RandomBox5=Random.Range(1,17);
}
if ( RandomBox6 == ((RandomBox5) || (RandomBox4) || (RandomBox3) || (RandomBox2) || (RandomBox1) ))
{RandomBox6=Random.Range(1,17);
}
if ( RandomBox7 == ((RandomBox6) || (RandomBox5) || (RandomBox4) || (RandomBox3) || (RandomBox2) || (RandomBox1)))
{RandomBox7=Random.Range(1,17);
}
RRN=false;
}
}*/

function RandomBox(){
 yield WaitForSeconds(2);
if (RRN)
{
RandomBox1=Random.Range(1,17);
RandomBox2=Random.Range(1,17);
RandomBox3=Random.Range(1,17);
RandomBox4=Random.Range(1,17);
RandomBox5=Random.Range(1,17);
RandomBox6=Random.Range(1,17);
RandomBox7=Random.Range(1,17);

if (FindBoxGameSystem.Level1IsON)
{
    FindBoxGameSystem.CheckCount=3;
}
if (FindBoxGameSystem.Level2IsON)
{
    FindBoxGameSystem.CheckCount=2;
}
if (FindBoxGameSystem.Level3IsON)
{
    FindBoxGameSystem.CheckCount=1;
}

FindBoxGameSystem.MTB=true;
}

RRN=false;

}





function Update () {
if(Input.GetKeyDown (KeyCode.S)) 
{
RRN=true;


}

RB1=RandomBox1;
RB2=RandomBox2;
RB3=RandomBox3;
RB4=RandomBox4;
RB5=RandomBox5;
RB6=RandomBox6;
RB7=RandomBox7;

RandomBox();
//CheckNumbers();


}











