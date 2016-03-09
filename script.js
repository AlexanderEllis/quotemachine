$(document).ready(function(){
    
  var quotelist = [["The only thing we have to fear is fear itself.", "Franklin D. Roosevelt"], ["Yesterday, you said tomorrow.", "Anonymous"], ["They don't think it be like it is, but it do.", "Oscar Gamble"]];
  
  var random = function() {
    return Math.floor(Math.random() * 3);
  }
  
  var randoColor = function() {
    return Math.floor(Math.random() * 255);
  }
  
  $("#newQuote").hover(function(){
    $('#newQuote').css( 'cursor', 'default' );
  })
  
   $("#share").hover(function(){
    $('#share').css( 'cursor', 'default' );
  })
  
  $("#share").hover(function(){
    $("#share").css("background-color", "rgb(74,74,74)")},
    function() {$("#share").css("background-color", "rgb(54,54,54)")
  });
  
    $("#newQuote").hover(function(){
    $("#newQuote").css("background-color", "rgb(74,74,74)")},
    function() {$("#newQuote").css("background-color", "rgb(54,54,54)")
  });
  
  var num = 0;
  
   function quote() {
     
      num +=1;
    if (num > quotelist.length - 1) {
      num = 0;
    };
     
     $("#quoteSpace").html("<p id='quote'>" + quotelist[num][0] + "</p>" + "<p id='author'>" +  quotelist[num][1] + "</p>")};
  
    $("#newQuote").on("click", function() {
  
    $("#quoteSpace").fadeOut(400, function() {
      $("#quoteSpace").text(quote()).fadeIn(400);
      var a = randoColor();
      var b = randoColor();
      var c = randoColor();
      var d = "rgb(" + (a + 100) + "," + (b + 100) + "," + (c + 100) + ")"
      $("#quoteSpace").css("color", d);
    });

      $("#share").on("click", function() {
        window.open("http://twitter.com/home?status=" + quotelist[num][0] + " - " + quotelist[num][1]);
  });

  });
  
});