#pragma strict
var EmptyBox1: GameObject;
var EmptyBox2: GameObject;
var EmptyBox3: GameObject;
var EmptyBox4: GameObject;
var EmptyBox5: GameObject;
var EmptyBox6: GameObject;
var EmptyBox7: GameObject;
var EmptyBox8: GameObject;
var EmptyBox9: GameObject;
var EmptyBox10: GameObject;
var EmptyBox11: GameObject;
var EmptyBox12: GameObject;
var EmptyBox13: GameObject;
var EmptyBox14: GameObject;
var EmptyBox15: GameObject;
var EmptyBox16: GameObject;

var DotBox1: GameObject; // Right box
var DotBox2: GameObject;
var DotBox3: GameObject;
var DotBox4: GameObject;
var DotBox5: GameObject;
var DotBox6: GameObject;
var DotBox7: GameObject;
var DotBox8: GameObject;
var DotBox9: GameObject;
var DotBox10: GameObject;
var DotBox11: GameObject;
var DotBox12: GameObject;
var DotBox13: GameObject;
var DotBox14: GameObject;
var DotBox15: GameObject;
var DotBox16: GameObject;

var CrossedBox1: GameObject; // MarkedBox
var CrossedBox2: GameObject;
var CrossedBox3: GameObject;
var CrossedBox4: GameObject;
var CrossedBox5: GameObject;
var CrossedBox6: GameObject;
var CrossedBox7: GameObject;
var CrossedBox8: GameObject;
var CrossedBox9: GameObject;
var CrossedBox10: GameObject;
var CrossedBox11: GameObject;
var CrossedBox12: GameObject;
var CrossedBox13: GameObject;
var CrossedBox14: GameObject;
var CrossedBox15: GameObject;
var CrossedBox16: GameObject;

var StartButton: GameObject ;
var StopButton: GameObject;

static var CheckCount: int;
var CheckCounttest:int;
static var MTB: boolean; //Mark the box

static var IsGameStarted: boolean;

static var Level1IsON:boolean;
static var Level2IsON:boolean;
static var Level3IsON:boolean;



function MarkTheBox() {

if (RandomBox.RandomBox1== 1 || RandomBox.RandomBox2==1 || RandomBox.RandomBox3==1 || RandomBox.RandomBox4==1 || RandomBox.RandomBox5==1 || RandomBox.RandomBox6==1 || RandomBox.RandomBox7==1)          
CrossedBox1.SetActive(true);
if (RandomBox.RandomBox1== 2 || RandomBox.RandomBox2==2 || RandomBox.RandomBox3==2 || RandomBox.RandomBox4==2 || RandomBox.RandomBox5==2 || RandomBox.RandomBox6==2 || RandomBox.RandomBox7==2)
CrossedBox2.SetActive(true);
if (RandomBox.RandomBox1== 3 || RandomBox.RandomBox2==3 || RandomBox.RandomBox3==3 || RandomBox.RandomBox4==3 || RandomBox.RandomBox5==3 || RandomBox.RandomBox6==3 || RandomBox.RandomBox7==3)
CrossedBox3.SetActive(true);
if (RandomBox.RandomBox1== 4 || RandomBox.RandomBox2==4 || RandomBox.RandomBox3==4 || RandomBox.RandomBox4==4 || RandomBox.RandomBox5==4 || RandomBox.RandomBox6==4 || RandomBox.RandomBox7==4)
CrossedBox4.SetActive(true);
if (RandomBox.RandomBox1== 5 || RandomBox.RandomBox2==5 || RandomBox.RandomBox3==5 || RandomBox.RandomBox4==5 || RandomBox.RandomBox5==5 || RandomBox.RandomBox6==5 || RandomBox.RandomBox7==5)
CrossedBox5.SetActive(true);
if (RandomBox.RandomBox1== 6 || RandomBox.RandomBox2==6 || RandomBox.RandomBox3==6 || RandomBox.RandomBox4==6 || RandomBox.RandomBox5==6 || RandomBox.RandomBox6==6 || RandomBox.RandomBox7==6)
CrossedBox6.SetActive(true);
if (RandomBox.RandomBox1== 7 || RandomBox.RandomBox2==7 || RandomBox.RandomBox3==7 || RandomBox.RandomBox4==7 || RandomBox.RandomBox5==7 || RandomBox.RandomBox6==7 || RandomBox.RandomBox7==7)
CrossedBox7.SetActive(true);
if (RandomBox.RandomBox1== 8 || RandomBox.RandomBox2==8 || RandomBox.RandomBox3==8 || RandomBox.RandomBox4==8 || RandomBox.RandomBox5==8 || RandomBox.RandomBox6==8 || RandomBox.RandomBox7==8)
CrossedBox8.SetActive(true);
if (RandomBox.RandomBox1== 9 || RandomBox.RandomBox2==9 || RandomBox.RandomBox3==9 || RandomBox.RandomBox4==9 || RandomBox.RandomBox5==9 || RandomBox.RandomBox6==9 || RandomBox.RandomBox7==9)
CrossedBox9.SetActive(true);
if (RandomBox.RandomBox1== 10 || RandomBox.RandomBox2==10 || RandomBox.RandomBox3==10 || RandomBox.RandomBox4==10 || RandomBox.RandomBox5==10 || RandomBox.RandomBox6==10 || RandomBox.RandomBox7==10)
CrossedBox10.SetActive(true);
if (RandomBox.RandomBox1== 11 || RandomBox.RandomBox2==11 || RandomBox.RandomBox3==11 || RandomBox.RandomBox4==11 || RandomBox.RandomBox5==11 || RandomBox.RandomBox6==11 || RandomBox.RandomBox7==11)
CrossedBox11.SetActive(true);
if (RandomBox.RandomBox1== 12 || RandomBox.RandomBox2==12 || RandomBox.RandomBox3==12 || RandomBox.RandomBox4==12 || RandomBox.RandomBox5==12 || RandomBox.RandomBox6==12 || RandomBox.RandomBox7==12)             
CrossedBox12.SetActive(true);
if (RandomBox.RandomBox1== 13 || RandomBox.RandomBox2==13 || RandomBox.RandomBox3==13 || RandomBox.RandomBox4==13 || RandomBox.RandomBox5==13 || RandomBox.RandomBox6==13 || RandomBox.RandomBox7==13)
CrossedBox13.SetActive(true);
if (RandomBox.RandomBox1== 14 || RandomBox.RandomBox2==14 || RandomBox.RandomBox3==14 || RandomBox.RandomBox4==14 || RandomBox.RandomBox5==14 || RandomBox.RandomBox6==14 || RandomBox.RandomBox7==14)
CrossedBox14.SetActive(true);
if (RandomBox.RandomBox1== 15 || RandomBox.RandomBox2==15 || RandomBox.RandomBox3==15 || RandomBox.RandomBox4==15 || RandomBox.RandomBox5==15 || RandomBox.RandomBox6==15 || RandomBox.RandomBox7==15)
CrossedBox15.SetActive(true);
if (RandomBox.RandomBox1== 16 || RandomBox.RandomBox2==16 || RandomBox.RandomBox3==16 || RandomBox.RandomBox4==16 || RandomBox.RandomBox5==16 || RandomBox.RandomBox6==16 || RandomBox.RandomBox7==16)
CrossedBox16.SetActive(true);




}

function ClearMarksNow(){

DotBox1.SetActive(false);
DotBox2.SetActive(false);
DotBox3.SetActive(false);
DotBox4.SetActive(false);
DotBox5.SetActive(false);
DotBox6.SetActive(false);
DotBox7.SetActive(false);
DotBox8.SetActive(false);
DotBox9.SetActive(false);
DotBox10.SetActive(false);
DotBox11.SetActive(false);
DotBox12.SetActive(false);
DotBox13.SetActive(false);
DotBox14.SetActive(false);
DotBox15.SetActive(false);
DotBox16.SetActive(false);

CrossedBox1.SetActive(false);
CrossedBox2.SetActive(false);
CrossedBox3.SetActive(false);
CrossedBox4.SetActive(false);
CrossedBox5.SetActive(false);
CrossedBox6.SetActive(false);
CrossedBox7.SetActive(false);
CrossedBox8.SetActive(false);
CrossedBox9.SetActive(false);
CrossedBox10.SetActive(false);
CrossedBox11.SetActive(false);
CrossedBox12.SetActive(false);
CrossedBox13.SetActive(false);
CrossedBox14.SetActive(false);
CrossedBox15.SetActive(false);
CrossedBox16.SetActive(false);


}

function ClearMarks(){
yield WaitForSeconds(2);
DotBox1.SetActive(false);
DotBox2.SetActive(false);
DotBox3.SetActive(false);
DotBox4.SetActive(false);
DotBox5.SetActive(false);
DotBox6.SetActive(false);
DotBox7.SetActive(false);
DotBox8.SetActive(false);
DotBox9.SetActive(false);
DotBox10.SetActive(false);
DotBox11.SetActive(false);
DotBox12.SetActive(false);
DotBox13.SetActive(false);
DotBox14.SetActive(false);
DotBox15.SetActive(false);
DotBox16.SetActive(false);

CrossedBox1.SetActive(false);
CrossedBox2.SetActive(false);
CrossedBox3.SetActive(false);
CrossedBox4.SetActive(false);
CrossedBox5.SetActive(false);
CrossedBox6.SetActive(false);
CrossedBox7.SetActive(false);
CrossedBox8.SetActive(false);
CrossedBox9.SetActive(false);
CrossedBox10.SetActive(false);
CrossedBox11.SetActive(false);
CrossedBox12.SetActive(false);
CrossedBox13.SetActive(false);
CrossedBox14.SetActive(false);
CrossedBox15.SetActive(false);
CrossedBox16.SetActive(false);


}
	
function Start () {


MTB=false;
Level1IsON=true;
Level2IsON=false;
Level3IsON=false;
}


function LevelCheck()
{
    if (Score.Score>0 && Score.Score<30)
    {Level1IsON=true;
    Level2IsON=false;
    Level3IsON=false;
}
    if (Score.Score>30 && Score.Score<120)
    {Level1IsON=false;
    Level2IsON=true;
    Level3IsON=false;
    }

    if (Score.Score > 120)
    {Level1IsON=false;
        Level2IsON=false;
        Level3IsON=true;
    }
}

function Update () {
    if (Timer.NinetySeconds==0)
    {
        EndGame();
      
    }

    LevelCheck();

if (MTB)
{
MarkTheBox();
ClearMarks();
MTB=false;
}
if(Input.GetKeyDown (KeyCode.A))       // Developer test purpose 
{
ClearMarks();
MarkTheBox();

}


    if (CheckCount==5 )
    {

        ClearMarksNow();
        RandomBox.RRN=true;


    }


CheckCounttest=CheckCount;
}



function Box1 () 
{if (IsGameStarted)
{
    DotBox1.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 1 || RandomBox.RandomBox2==1 || RandomBox.RandomBox3==1 || RandomBox.RandomBox4==1 || RandomBox.RandomBox5==1 || RandomBox.RandomBox6==1 || RandomBox.RandomBox7==1)
    {
        CrossedBox1.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;
} }

function Box2 () 
{if (IsGameStarted)
{
    DotBox2.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 2 || RandomBox.RandomBox2==2 || RandomBox.RandomBox3==2 || RandomBox.RandomBox4==2 || RandomBox.RandomBox5==2 || RandomBox.RandomBox6==2 || RandomBox.RandomBox7==2)
    {
        CrossedBox2.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;

}}

function Box3 () 
{if (IsGameStarted)
{
    DotBox3.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 3 || RandomBox.RandomBox2==3 || RandomBox.RandomBox3==3 || RandomBox.RandomBox4==3 || RandomBox.RandomBox5==3 || RandomBox.RandomBox6==3 || RandomBox.RandomBox7==3)
    {
        CrossedBox3.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;

}}
function Box4 () 
{if (IsGameStarted)
{
    DotBox4.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 4 || RandomBox.RandomBox2==4 || RandomBox.RandomBox3==4 || RandomBox.RandomBox4==4 || RandomBox.RandomBox5==4 || RandomBox.RandomBox6==4 || RandomBox.RandomBox7==4)
    {
        CrossedBox4.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;

}}
function Box5 () 
{if (IsGameStarted)
{
    DotBox5.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 5 || RandomBox.RandomBox2==5 || RandomBox.RandomBox3==5 || RandomBox.RandomBox4==5 || RandomBox.RandomBox5==5 || RandomBox.RandomBox6==5 || RandomBox.RandomBox7==5)
    {
        CrossedBox5.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;

}}
function Box6 () 
{if (IsGameStarted)
{
    DotBox6.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 6 || RandomBox.RandomBox2==6 || RandomBox.RandomBox3==6 || RandomBox.RandomBox4==6 || RandomBox.RandomBox5==6 || RandomBox.RandomBox6==6 || RandomBox.RandomBox7==6)
    {
        CrossedBox6.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;

}}
function Box7 () 
{if (IsGameStarted)
{
    DotBox7.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 7 || RandomBox.RandomBox2==7 || RandomBox.RandomBox3==7 || RandomBox.RandomBox4==7 || RandomBox.RandomBox5==7 || RandomBox.RandomBox6==7 || RandomBox.RandomBox7==7)
    {
        CrossedBox7.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;

}}

function Box8 () 
{if (IsGameStarted)
{
    DotBox8.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 8 || RandomBox.RandomBox2==8 || RandomBox.RandomBox3==8 || RandomBox.RandomBox4==8 || RandomBox.RandomBox5==8 || RandomBox.RandomBox6==8 || RandomBox.RandomBox7==8)
    {
        CrossedBox8.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;

}}

function Box9 () 
{if (IsGameStarted)
{
    DotBox9.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 9 || RandomBox.RandomBox2==9 || RandomBox.RandomBox3==9 || RandomBox.RandomBox4==9 || RandomBox.RandomBox5==9 || RandomBox.RandomBox6==9 || RandomBox.RandomBox7==9)
    {
        CrossedBox9.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;

}}

function Box10 () 
{if (IsGameStarted)
{
    DotBox10.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 10 || RandomBox.RandomBox2==10 || RandomBox.RandomBox3==10 || RandomBox.RandomBox4==10 || RandomBox.RandomBox5==10 || RandomBox.RandomBox6==10 || RandomBox.RandomBox7==10)
    {
        CrossedBox10.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;

}}

function Box11 () 
{if (IsGameStarted)
{
    DotBox11.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 11 || RandomBox.RandomBox2==11 || RandomBox.RandomBox3==11 || RandomBox.RandomBox4==11 || RandomBox.RandomBox5==11 || RandomBox.RandomBox6==11 || RandomBox.RandomBox7==11)
    {
        CrossedBox11.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;

}}

function Box12 () 
{if (IsGameStarted)
{
    DotBox12.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 12 || RandomBox.RandomBox2==12 || RandomBox.RandomBox3==12 || RandomBox.RandomBox4==12 || RandomBox.RandomBox5==12 || RandomBox.RandomBox6==12 || RandomBox.RandomBox7==12)
    {
        CrossedBox12.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;

}}

function Box13 () 
{if (IsGameStarted)
{
    DotBox13.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 13 || RandomBox.RandomBox2==13 || RandomBox.RandomBox3==13 || RandomBox.RandomBox4==13 || RandomBox.RandomBox5==13 || RandomBox.RandomBox6==13 || RandomBox.RandomBox7==13)
    {
        CrossedBox13.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;

}}

function Box14 () 
{if (IsGameStarted)
{
    DotBox14.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 14 || RandomBox.RandomBox2==14 || RandomBox.RandomBox3==14 || RandomBox.RandomBox4==14 || RandomBox.RandomBox5==14 || RandomBox.RandomBox6==14 || RandomBox.RandomBox7==14)
    {
        CrossedBox14.SetActive(true);

        Score.Score+=10;
    }
    CheckCount+=1;

}}

function Box15 () 
{if (IsGameStarted)
{
    DotBox15.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 15 || RandomBox.RandomBox2==15 || RandomBox.RandomBox3==15 || RandomBox.RandomBox4==15 || RandomBox.RandomBox5==15 || RandomBox.RandomBox6==15 || RandomBox.RandomBox7==15)
    {
        CrossedBox15.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;

}}

function Box16 () 
{if (IsGameStarted)
{
    DotBox16.SetActive(true);
    Score.Score-=5;
    if (RandomBox.RandomBox1== 16 || RandomBox.RandomBox2==16 || RandomBox.RandomBox3==16 || RandomBox.RandomBox4==16 || RandomBox.RandomBox5==16 || RandomBox.RandomBox6==16 || RandomBox.RandomBox7==16)
    {
        CrossedBox16.SetActive(true);
        Score.Score+=10;

    }
    CheckCount+=1;

}}

function StartGame()
{
IsGameStarted=true;
RandomBox.RRN=true;
StartButton.SetActive(false);
StopButton.SetActive(true);
Timer.IsStarted=true;
Timer.NinetySeconds=90;
Score.Score=0;

}

function EndGame()
{

IsGameStarted=false;
StartButton.SetActive(true);

StopButton.SetActive(false);

Timer.IsStarted=false;


}















