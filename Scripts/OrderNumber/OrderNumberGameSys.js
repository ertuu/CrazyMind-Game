#pragma strict


var UINumber1: UI.Text;
var UINumber2: UI.Text;
var UINumber3: UI.Text;
var UINumber4: UI.Text;
var UINumber5: UI.Text;
var UINumber6: UI.Text;

var GUINumber1:GameObject;
var GUINumber2:GameObject;
var GUINumber3:GameObject;
var GUINumber4:GameObject;
var GUINumber5:GameObject;
var GUINumber6:GameObject;

static var PrevNumber1:int;
static var PrevNumber2:int;
static var PrevNumber3:int;
static var PrevNumber4:int;
static var PrevNumber5:int;
static var PrevNumber6:int;

var OneTurn:boolean;


var TestPlayerChoice:int;

var Checked:boolean;

static var PlayerChoice: int;

static var Numbers : int[];
static var PrevNumbers = new Array ();

private var Select:int;


function Start () {
    Select=1;
    Numbers = new int[6];
    PrevNumbers.length=6;
    OneTurn=false;
    
}

function Check()       // check player's choice and the answer.
{ 
        if  ( PlayerChoice==Numbers[0])
        {  
            Score.Score+=5;
            Select+=1;
            GUINumber1.SetActive(false);
            Checked=true;
        }

        if (PlayerChoice==Numbers[1])
        {
            Score.Score+=5;
            Select+=1;
            GUINumber2.SetActive(false);
            Checked=true;
        }

        if (PlayerChoice==Numbers[2])
        {
            Score.Score+=5;
            Select+=1;   
            GUINumber3.SetActive(false);
            Checked=true;        
        }

        if (PlayerChoice==Numbers[3])
        {
            Score.Score+=5;
            Select+=1;   
            GUINumber4.SetActive(false);
            Checked=true;
        }

        if (PlayerChoice==Numbers[4])
        {
            Score.Score+=5;
            Select+=1;
            GUINumber5.SetActive(false);
            Checked=true;
        }

        if (PlayerChoice==Numbers[5])
        {
            Score.Score+=5;
            Select+=1;
            GUINumber6.SetActive(false);
            Checked=true;
        } //Checked=true;
    } 







function AssignNumbers() // Assign random numbers to array
{ if (!OneTurn)
{
    Numbers[0]=Random.Range(5,31);
    Numbers[1]=Random.Range(5,31);
    Numbers[2]=Random.Range(5,31);
    Numbers[3]=Random.Range(5,31);
    Numbers[4]=Random.Range(5,31);
    Numbers[5]=Random.Range(5,31);
    
    
   
    UINumber1.text=Numbers[0].ToString();
    UINumber2.text=Numbers[1].ToString();
    UINumber3.text=Numbers[2].ToString();
    UINumber4.text=Numbers[3].ToString();
    UINumber5.text=Numbers[4].ToString();
    UINumber6.text=Numbers[5].ToString();

    PrevNumber1=Numbers[0];
    PrevNumber2=Numbers[1];
    PrevNumber3=Numbers[2];
    PrevNumber4=Numbers[3];
    PrevNumber5=Numbers[4];
    PrevNumber6=Numbers[5];

    
    
    for (var i=0; i<Numbers.length ; i++)
    {
        Debug.Log( Numbers[i] );
    }
    // Numbers.Sort();
    var swapped;
    do {
        swapped = false;
        for (i=0; i < Numbers.length-1; i++) {
            if (Numbers[i] > Numbers[i+1]) {
                var temp = Numbers[i];
                Numbers[i] = Numbers[i+1];
                Numbers[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    for (i=0; i<Numbers.length ; i++)
    {
        Debug.Log( Numbers[i] );
    }

   
    Checked=false;
}}




function Update()
{
    TestPlayerChoice=PlayerChoice;

    Check();
   
}
