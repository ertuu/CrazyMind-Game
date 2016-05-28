#pragma strict

static var PlayerName: UI.Text;

static var LastScore:int;

var IsChanged:boolean;

 var Score1st: UI.Text;
 var Score2nd: UI.Text;
 var Score3rd: UI.Text;
 var Score4th: UI.Text;
 var Score5th: UI.Text;

 var Player1st: UI.Text;
 var Player2nd: UI.Text;
 var Player3rd: UI.Text;
 var Player4th: UI.Text;
 var Player5th: UI.Text;


function Start() {

IsChanged=false;
}




function Update () {

 if(Input.GetKeyDown (KeyCode.N))            
 Nolla();

for (var touch: Touch in Input.touches)
{
  if (touch.phase == TouchPhase.Moved)
{
 Application.LoadLevel("main_menu");
    
 }
}
if (!IsChanged)
{
Compare();
}


Score1st.text=PlayerPrefs.GetInt("1stScore").ToString();
Score2nd.text=PlayerPrefs.GetInt("2ndScore").ToString();
Score3rd.text=PlayerPrefs.GetInt("3rdScore").ToString();
Score4th.text=PlayerPrefs.GetInt("4thScore").ToString();
Score5th.text=PlayerPrefs.GetInt("5thScore").ToString();

Player1st.text=PlayerPrefs.GetString("1stPlayer");
Player2nd.text=PlayerPrefs.GetString("2ndPlayer");
Player3rd.text=PlayerPrefs.GetString("3rdPlayer");
Player4th.text=PlayerPrefs.GetString("4thPlayer");
Player5th.text=PlayerPrefs.GetString("5thPlayer");


}



function Compare()

{

if (Score.Score > PlayerPrefs.GetInt("1stScore"))
{
IsChanged=true;
PlayerPrefs.SetInt("5thScore", PlayerPrefs.GetInt("4thScore"));
PlayerPrefs.SetString("5thPlayer", PlayerPrefs.GetString("4thPlayer"));

PlayerPrefs.SetInt("4thScore", PlayerPrefs.GetInt("3thScore"));
PlayerPrefs.SetString("4thPlayer", PlayerPrefs.GetString("3thPlayer"));

PlayerPrefs.SetInt("3rdScore", PlayerPrefs.GetInt("2ndScore"));
PlayerPrefs.SetString("3rdPlayer", PlayerPrefs.GetString("2ndPlayer"));

PlayerPrefs.SetInt("2ndScore", PlayerPrefs.GetInt("1stScore"));
PlayerPrefs.SetString("2ndPlayer", PlayerPrefs.GetString("1stPlayer"));

PlayerPrefs.SetInt("1stScore", Score.Score);
PlayerPrefs.SetString("1stPlayer", PlayerName.text);

Player1st.text=PlayerName.text;


}

if (Score.Score > PlayerPrefs.GetInt("2ndScore"))
{
IsChanged=true;
PlayerPrefs.SetInt("5thScore", PlayerPrefs.GetInt("4thScore"));
PlayerPrefs.SetString("5thPlayer", PlayerPrefs.GetString("4thPlayer"));

PlayerPrefs.SetInt("4thScore", PlayerPrefs.GetInt("3thScore"));
PlayerPrefs.SetString("4thPlayer", PlayerPrefs.GetString("3thPlayer"));

PlayerPrefs.SetInt("3rdScore", PlayerPrefs.GetInt("2ndScore"));
PlayerPrefs.SetString("3rdPlayer", PlayerPrefs.GetString("2ndPlayer"));

PlayerPrefs.SetInt("2ndScore", Score.Score);
PlayerPrefs.SetString("2ndPlayer", PlayerName.text);
Player2nd.text=PlayerName.text;

}
else
if (Score.Score > PlayerPrefs.GetInt("3rdScore"))
{
IsChanged=true;
PlayerPrefs.SetInt("5thScore", PlayerPrefs.GetInt("4thScore"));
PlayerPrefs.SetString("5thPlayer", PlayerPrefs.GetString("4thPlayer"));

PlayerPrefs.SetInt("4thScore", PlayerPrefs.GetInt("3thScore"));
PlayerPrefs.SetString("4thPlayer", PlayerPrefs.GetString("3thPlayer"));

PlayerPrefs.SetInt("3rdScore",Score.Score);
PlayerPrefs.SetString("3rdPlayer", PlayerName.text);
Player3rd.text=PlayerName.text;

}

if (Score.Score > PlayerPrefs.GetInt("4thScore"))
{
IsChanged=true;
PlayerPrefs.SetInt("5thScore", PlayerPrefs.GetInt("4thScore"));
PlayerPrefs.SetString("5thPlayer", PlayerPrefs.GetString("4thPlayer"));

PlayerPrefs.SetInt("4thScore",Score.Score);
PlayerPrefs.SetString("4thPlayer", PlayerName.text);
Player4th.text=PlayerName.text;

}

if (Score.Score > PlayerPrefs.GetInt("5thScore"))
{
IsChanged=true;
PlayerPrefs.SetInt("5thScore", Score.Score);
PlayerPrefs.SetString("5thPlayer", PlayerName.text);
Player5th.text=PlayerName.text;

}

}

function Nolla()
{
PlayerPrefs.SetInt("1stScore", 0);
PlayerPrefs.SetInt("2ndScore", 0);
PlayerPrefs.SetInt("3rdScore", 0);
PlayerPrefs.SetInt("4thScore", 0);
PlayerPrefs.SetInt("5thScore", 0);
}

