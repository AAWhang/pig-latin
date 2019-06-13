$(document).ready(function(){
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var usrString = $("input#pig").val();
    var endString = [];
    var pigArray = usrString.split(" ");

    function pigBreak (pigWord)
    {
      var pigLetters = pigWord.split("");
      var igpay = [];
      for (var a = 0; a < pigLetters.length;) {
        if (pigLetters[a] === "a" || pigLetters[a] === "e" ||
          pigLetters[a]  === "i" || pigLetters[a] === "o" ||
          pigLetters[a]  === "u" || pigLetters[a] === undefined ||
          pigLetters.length === 0 || pigLetters[a] === "A" || pigLetters[a] === "E" ||
          pigLetters[a]  === "I" || pigLetters[a] === "O" ||
          pigLetters[a]  === "U")
          {
            a += pigLetters.length;

          }else
          {
            igpay.push(pigLetters.shift());
          }
        }
        if (igpay === undefined || igpay.length == 0)
        {
          igpay.push("w");
        }
        // alert(pigLetters.join('') + " " + igpay.join('') + "ay");
        var piggy = (pigLetters.join('') + "-" + igpay.join('') + "ay");
        return piggy;
    };


    for ( var i = 0; i < pigArray.length; i ++) {
      endString.push(pigBreak(pigArray[i]));
    }

      $("#result").append(endString.join(' '))

    });

//-----------------------------roman break

  $("form#roman-num").submit(function(event) {
    event.preventDefault();
    var romanVar = parseInt($("input#roman").val());

    function romanNum (numV, letR) {
      for (romanVar; romanVar >= numV; romanVar -= numV) {
        $("#romanResult").append(letR);
      }
    };

    romanNum(1000 , "M");
    romanNum(900 , "CM");
    romanNum(500 , "L");
    romanNum(400 , "CL");
    romanNum(100 , "C");
    romanNum(90 , "XC");
    romanNum(50 , "L");
    romanNum(40 , "XL");
    romanNum(10 , "X");
    romanNum(9 , "IX");
    romanNum(5 , "V");
    romanNum(4 , "IV");
    romanNum(1 , "I");
  });

  // ------------------------- Cryptosquare --

  $("form#square").submit(function(event) {
    event.preventDefault();

    var squareVar = parseInt($("input#scrypt").val());

    });
});


//creates number of arrays and sets array length
var userString = prompt("enter a string");
var uString = userString.replace(/\s+/g, "");
var stringArray = uString.split("");
var num = stringArray.length;
var endArray = [];
var x = 0;
var n = 0;
alert(num);


var charlength = 0;
for (i = 1; (i * i) <= num; i ++) {
	charlength = i;
}
alert(charlength);


for (a = 0; a < num; a ++) { //////////////working arron's code
  endArray.push(stringArray[(charlength * x) + n]);
  x++;
  if (stringArray[(charlength * x) + n] === undefined) {
    x = 0;
    n++;
  }
}

alert(endArray);

// var numArrays = Math.ceil(num / charlength); //2D array method, redundant
// alert(numArrays + " " + charlength);
//
// var arrays = new Array(numArrays);
// for (var i = 0; i < numArrays; i++)
//     arrays[i] = new Array(charlength);
//
// for (i)
//
// arrays[0][0] = "00";
// arrays[2][2] = "help me";
// arrays[1][0] = "100";
// alert(arrays[2][2]);







/////////////////////////////end of




//
//
// var str = "";
// var newStr = "";
// var counter = 0;
// var columnNumber = 5;
//
// for (var i = 0; i < str.length; i++){
//
//   newStr += ((i * columnNumber) % str.length) + counter;
//
//   if (i % columnNumber === 0){
//     counter++;
//   }
 }

debugger;
var theStr = ("abcdefghjiklmnopqrstuvwxyz").replace(/\s+/g, "");
var columnSize = returnLargerSquare(theStr);
var rowSize = findRowSize(theStr, columnSize);
var finalString = parse(theStr, columnSize, rowSize);
alert(addSpaces(finalString));

function returnLargerSquare(str){
  for (var i = 0; i < str.length; i++){
    if (i * i >= str.length){
      console.log("Column size: " + i);
      return i;
    }
  }
}

function findRowSize(str, columnSize){
  var dif = Math.pow(columnSize, 2) - str.length;
  return columnSize - Math.floor(dif / columnSize);
}



function parse(str, col, row){
  var counter = 0;
  var newStr = "";
  var boxSize = col * row;
  for (var i = 0; i < boxSize; i++){
    if (i > 0){
      if((i * row) % boxSize === 0){
      counter++;
      }
    }
     if(((i * row) % boxSize) + counter < str.length){
    newStr += str.charAt(((i * row) % boxSize) + counter) ;
  } //else that is the undefined box

  }
  return newStr;
}

function addSpaces(str){
  var newStr = "";
  for (var i = 0; i < str.length; i++){
    if (i > 0){
      if (i % 5 === 0){
        newStr += " ";
      }
    }
    newStr += str.charAt(i);
  }
  return newStr;
}


var _startArray = [];
var raFinal = [];

function recurss(startArray){

  if (startArray.length === 0){
    return;
  }
  var leastValIndex = returnLeastValIndex(startArray);
  raFinal.push(startArray(leastValIndex));
  //remove leastValIndex from startArray
  recurss(startArray);
}

function returnLeastValIndex(){
var minVal;
}


//telegram problem


function stairs(stairsLeft){
  if (stairsLeft < 1){
    return;
  }
  if (stairsLeft == 2){
    return
  }
  return 1 + stairs(stairsLeft -1 );
}
