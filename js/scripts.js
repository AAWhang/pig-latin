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
});
