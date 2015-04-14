'use strict';

$(document).ready(init);

function init(){
  $('button').click(getNumbers);
  $('evens').on('click', '.even', makeSquarert);
}

var odds = [];
var evens = [];
function getNumbers(){
  $.getJSON('https://qrng.anu.edu.au/API/jsonI.php?length=20&type=uint16', function(response){
    var numbers = response.data;
    numbers.forEach(function(num){
      if(num % 2 === 0){
        evens.push(num);
      }else {
        odds.push(num);
      }
    });
  });
  makeDivs(odds, evens);
}


var dividesByThree = [];
var notDivisable = [];
function makeDivs(odds, evens){
  evens.forEach(function(num){
    var $even = $('<div>');
    $even.text(num);
    $even.addClass('even');
    $even.appendTo('#evens');
  });
  odds.forEach(function(num){
    // console.log(num);
    if(num % 3 === 0){
      dividesByThree.push(num);
    } else {
      notDivisable.push(num);
    }
  });
  makeThreesDiv();
  console.log(notDivisable);
}

function makeSquarert(){
  // var number = $(this).val();
  console.log('working');

}
function makeThreesDiv() {
  // console.log(dividesByThree);
  // var $dividedByThree = $('<div>');
  // dividesByThree = dividesByThree.toString();
  // $dividedByThree.text(dividesByThree);
  // $dividedByThree.appendTo('#odds');
}
