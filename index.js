//Love Calculator

prompt("What's your name? ");
prompt("What's your crush name? ");
var loveScore = Math.random()*100;
loveScore = Math.floor(loveScore)+1;
if(loveScore>70){
  alert("Your love score is "+ loveScore + "%. #TrueLove :}")
} else{
  alert("Your Love Score is "+ loveScore + "%.");
}
