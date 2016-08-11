
// validation section
var data = {
               0 : [ 0, 0 , 0 ] ,
               1 : [ 0, 0 , 0 ],
               2 : [ 0, 0 , 0 ],

};
var keys =  Object.keys(data);
var row;
var col;
var currentItem;
var countinueYN = false;
var timerId ;
var allRadioBt = document.querySelectorAll("input");
var checkPlayer = "1";
///////////////////////////////////////////////////////////////////////////////

// set up function section
var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;

};

var reSet = function (){
  var allTh = document.querySelectorAll("th");
  data = {
                 0 : [ 0, 0 , 0 ] ,
                 1 : [ 0, 0 , 0 ],
                 2 : [ 0, 0 , 0 ],

  };
  for (var i = 0 ; i < allTh.length; i++){
    allTh[i].style.backgroundColor = "white";
    allTh[i].innerHTML = "";
  }
  document.querySelector("#p1img").src ="file:///Users/baejongin/wdi-16/myLocal/week_02/05.day/homework/css/player1.jpg";
  document.querySelector("#p2img").src ="file:///Users/baejongin/wdi-16/myLocal/week_02/05.day/homework/css/player2.jpg";
};

var changeImage = function ( result ){
  if(result === "1"){
    document.querySelector("#p1img").src ="file:///Users/baejongin/wdi-16/myLocal/week_02/05.day/homework/css/winnergif.gif";
    document.querySelector("#p2img").src ="file:///Users/baejongin/wdi-16/myLocal/week_02/05.day/homework/css/player2.jpg";
  }else if (result === "2"){
    document.querySelector("#p2img").src ="file:///Users/baejongin/wdi-16/myLocal/week_02/05.day/homework/css/winnergif.gif";
    document.querySelector("#p1img").src ="file:///Users/baejongin/wdi-16/myLocal/week_02/05.day/homework/css/player1.jpg";
  }
};

var score =  function(winner , countinueYN){

  if (winner === "1"){
    document.querySelector("#p1W").innerHTML = parseInt(document.querySelector("#p1W").innerHTML) + 1;
    document.querySelector("#p2L").innerHTML = parseInt(document.querySelector("#p2L").innerHTML) + 1;
  }else if(winner === "2"){
    document.querySelector("#p2W").innerHTML = parseInt(document.querySelector("#p2W").innerHTML) + 1;
    document.querySelector("#p1L").innerHTML = parseInt(document.querySelector("#p1L").innerHTML) + 1;
  }else{
    document.querySelector("#p1D").innerHTML = parseInt(document.querySelector("#p1D").innerHTML) + 1;
    document.querySelector("#p2D").innerHTML = parseInt(document.querySelector("#p2D").innerHTML) + 1;
  }

  if (!countinueYN){
    document.querySelector("#p1W").innerHTML = "0";
    document.querySelector("#p1L").innerHTML = "0";
    document.querySelector("#p1D").innerHTML = "0";
    document.querySelector("#p2W").innerHTML = "0";
    document.querySelector("#p2L").innerHTML = "0";
    document.querySelector("#p2D").innerHTML = "0";
    $("#okbt").css("color" , "white");
    $("#okbt").on("click" , choiceOption);
    $("th").off("click");
    allRadioBt[0].style.display = "";
    allRadioBt[1].style.display = "";

  }
};

var getConfirm = function(result){
  if (result !== "0"){
      winnerSound();
      countinueYN = window.confirm("Winner is Player"+result +"   Continue ( ok ) or Exit( cancel ) ?" );
  }else{
      countinueYN = window.confirm("Stupid !! how can you make draw??? Continue?!?!?!");
  }

  if (countinueYN){
    //set score;
    score(result ,countinueYN);
    reSet();
  }else{
    score(result ,countinueYN);
    reSet();
    // clear score;
  }
};

var p1Sound = function() {
  var p1S = document.getElementById("p1S");
  p1S.play();
  setTimeout(function(){
  p1S.pause();
  p1S.currentTime = 0;
} , 300);
};

var p2Sound = function() {
  var p2S = document.getElementById("p2S");
  p2S.currentTime = 10;
  p2S.play();
  setTimeout(function(){
  p2S.pause();
  p2S.currentTime = 10;
} , 300);
};

var winnerSound = function() {
  var winner = document.getElementById("winner");
  winner.play();
  setTimeout(function(){
  winner.pause();
  winner.currentTime = 0;
} , 1500);


};
///////////////////////////////////////////////////////////////////////////////
var choiceOption = function() {

  $("#okbt").css("color" , "black");
  $("#okbt").off("click");
  allRadioBt[0].style.display = "none";
  allRadioBt[1].style.display = "none";

  // call player with computer
  if (allRadioBt[0].checked){
    $("th").on("click" , mainGameVScomputer);
  }else{
    $("th").on("click" , mainGameVplayer);
  }
};


var checkPostion = function( row ,column ){
  if (data[row][column] === 0 ){
    return 1;
  }else{
    return 0;
  }
};

var whoWin = function(){

  var result ;

  // row check
  for(var i = 0; i < keys.length; i+=1){
    if ( (data[i][0] === 1) && (data[i][1] === 1) && (data[i][2] === 1) ){
      result ="1";
      return result;
    }else if ( (data[i][0] === 2)&& (data[i][1] === 2) && (data[i][2] === 2) ){
      result ="2";
      return result;
    }else{
      result = "f";
    }
  }

  //column check
  for(var j = 0; j < keys.length; j+=1){
    if ( (data[0][j] === 1) && (data[1][j] === 1) && (data[2][j] === 1) ){
      result ="1";
      return result ;
    }else if ( (data[0][j] === 2) && (data[1][j] === 2) && (data[2][j] === 2) ){
      result ="2";
      return result;
    }else{
      result = "f";
    }
  }
  //cross check
  if ((data[0][2] === 1) && (data[1][1] === 1) && (data[2][0] === 1)){
    result ="1";
    return result ;
  }else if((data[0][2] === 2) && (data[1][1] === 2) && (data[2][0] === 2)){
    result ="2";
    return result ;
  }else{
    result ="f";
  }

  if ((data[0][0] === 1) && (data[1][1] === 1) && (data[2][2] === 1)){
    result ="1";
    return result ;
  }else if((data[0][0] === 2) && (data[1][1] === 2) && (data[2][2] === 2)){
    result ="2";
    return result ;
  }else{
    result ="f";
  }
  return result ;
};

var gameOverCheck = function(){
  var zero = 0 ;

    //row
  for (var i = 0; i < keys.length; i += 1){
      //column
    for (var j = 0; j < data[keys[i]].length; j+=1 ) {
      // 0 check
      // 0 : it is not choose from user or computer
      if (parseInt(data[keys[i]][j]) === 0){
        // checked 0
        zero += 1;
      }else {
        // it can't find 0
        zero = zero;
      }
    }
  }
    // it has one more 0
  if (zero > 0){
    return zero;
  }else{
    // it dosen't have zero
    // finising game
    return zero;
  }
  return zero;
};

var userTurn =  function( row , col , user){
  var result = 0;
  tempNum = ((row*3)  + (col));
  result = checkPostion( row , col);

  if (result === 1){

    $("th")[tempNum].style.color = "white";
    if ( user === "1"){
      p1Sound();
      $("th")[tempNum].innerHTML = "player"+user;
      $("th")[tempNum].style.backgroundColor = "red";
        data[row][col] = 1;
    }else{
      p2Sound();
      $("th")[tempNum].innerHTML = "player"+user;
      $("th")[tempNum].style.backgroundColor = "blue";
        data[row][col] = 2;
    }

    if (gameOverCheck() > 0){
      return 1;
    }else {
      result = whoWin();
      if (result !== "f"){
        setTimeout(function(){
          getConfirm(user);
        } , 1000);
        return 0;
      }
      setTimeout(function(){
        getConfirm("0");
      } , 1000);
      return 0;
    }
  }else{
    alert("Not avaliable");
    return 0;
  }
};

var comTurn = function(){
  var comChoiceRow ;
  var comChoiceCol ;
  var result = 0 ;
  var tempNum = 0;

  comChoiceRow = getRandomInt( 0 ,3 );
  comChoiceCol = getRandomInt( 0 ,3 );
  tempNum = ((comChoiceRow * 3 )  + comChoiceCol);

  result = checkPostion ( comChoiceRow , comChoiceCol );

  if ( result === 1 ){
    if (gameOverCheck() > 0 ){
      p2Sound();
      setTimeout(function(){
        $("th")[tempNum].innerHTML = "stupid";
        $("th")[tempNum].style.backgroundColor = "blue";
        $("th")[tempNum].style.color = "white";
      } , 210);
      data[comChoiceRow][comChoiceCol] = 2;
    }else{
      result = 0;
    }
  }else{
    if (gameOverCheck() >0) {
        comTurn();
    }else{
      setTimeout(function(){
        getConfirm(result);
      } , 1000);

    }
  }

};

var mainGameVScomputer = function(){
  // user clik information save
  var user = "1";
  var result ;
  row = parseInt((this.id).toString().substring(0,1)) ;
  col = parseInt((this.id).toString().substring(1)) ;
  result = userTurn( row , col ,user);
  if (result === 0 ){
    return;
  }
  result = whoWin();

  if ( result !== "f"){
    changeImage(result);
    setTimeout(function(){
      getConfirm(result);
    } , 1000);
  }else{
    //set delay
    comTurn();
    result = whoWin();
    changeImage(result);
    if( result !== "f"){
        setTimeout(function(){
          getConfirm(result);
        } , 1000);
    }else{
      result = 0;
    }
  }
};

var mainGameVplayer = function(){

    var result = 0 ;

    row = parseInt((this.id).toString().substring(0,1)) ;
    col = parseInt((this.id).toString().substring(1)) ;

    result = userTurn(row , col , checkPlayer);
    if (result === 0 ){
      return;
    }else{
      if (checkPlayer === "1"){
        checkPlayer = "2";
      }else{
        checkPlayer = "1";
      }
    }
    result = whoWin();
    if ( result !== "f"){
      changeImage(result);
      setTimeout(function(){
        getConfirm(result);
      } , 1000);
    }};
// $("th").on("click" , mainGameVScomputer);
$("#okbt").on("click" , choiceOption);
