// ATM App

// Files

// Summary
 // This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// You'll be selecting elements, manipulating HTML, and manipulating style along with building out the logic using JavaScript.

var searchButton = document.querySelector(".button1");
var depositButton = document.querySelector(".button2");
var widthrowButton = document.querySelector(".button3");
var shareValue;
// Objectives:
// DOM selection, appending, removal, updating
var bankAccount = {
                      Jong : {
                                           saving : 1500 ,
                                           check  : 3000

                     }

};

// Specification:
// Keep track of the checking and savings balances somewhere
var checkMyAccount = function ( name , accName ){

 var result = [];
 var keys = Object.keys(bankAccount[name]);
 result.push(name);

 if(accName === ""){
  for (var i = 0; i < keys.length; i++){
      var currentKey = keys[i];
      result.push(currentKey+":+"+bankAccount[name][currentKey]);
  }
 }else{
  result.push(accName+":+"+bankAccount[name][accName]);
 }
 return result ;
};
// Test Account Owner name  , Account name
// var tmep = checkMyAccount("Jong" , "");


// Add functionality so that a user can deposit money into one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
var depositMoney = function ( name  , accName ,moneyAm) {
  var result = 0 ;
  var account = checkMyAccount( name , accName);
  var currentMoney = account[1].substr(account[1].indexOf(":+")+2);

  bankAccount[name][accName] = parseFloat(moneyAm) + parseFloat(bankAccount[name][accName]);

  result = parseFloat(bankAccount[name][accName]);
  return result;

};
// test depositMoney
// console.log(depositMoney("Jong" , "saving" , 1500));

// Add functionality so that a user can withdraw money from one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.

var withrawMone =  function (name , accName , moneyAm) {
  var reuslt = 0;
  var currentAcMoney = checkMyAccount(name , accName);

  // check current Account
  if ( parseFloat(moneyAm) > parseFloat(currentAcMoney[1].substr(currentAcMoney[1].indexOf(":+")+2)) ){
    return 0;
  }else{
    bankAccount[name][accName] = parseFloat(bankAccount[name][accName]) - parseFloat(moneyAm) ;

    return bankAccount[name][accName];
  }
};
