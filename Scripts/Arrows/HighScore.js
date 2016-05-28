#pragma strict

var PlayerNameInput: UI.Text;


function Start () {
//Screen.showCursor=true;
}

function Update () {


ScoreTable.PlayerName=PlayerNameInput;


if(Input.GetKeyDown (KeyCode.Return))            
 
 {
//Compare();
Application.LoadLevel("HighScore");
    
 }

}

function NameNScore ()
{

// 1st player on board
//PlayerPrefs.SetString("1stPlayer", PlayerName.text);

//PlayerPrefs.SetInt("1stScore", ScoreShow.Scoreall);


}























