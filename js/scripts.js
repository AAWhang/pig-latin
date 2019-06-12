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
});
