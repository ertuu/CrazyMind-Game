#pragma strict

var arr = new Array ();
var arr2 = new Array ();

function Start () {
    arr.length = 3;

    arr[0]=3;
    arr[1]=2;
    arr[2]=1;

    print(arr[0]);
    print (arr.sort());

    arr2=arr.sort();
    print(arr2[0]);
   
}

function Update () {

}