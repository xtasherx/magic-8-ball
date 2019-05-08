var p = document.querySelector('.answer');

var answer = ["It is certain.","It is decidedly so.", "Without a doubt.",
"Yes, definitely.","You may rely on it.", "As I see it, yes.", "Most likely.",
 "Outlook good." , "Yes." , "Signs point to yes." , "Reply hazy, try again." ,
 "Ask again later." , "Better not tell you now." ,"Cannot predict now.",
 "Don't count on it." ,"My reply is no." ,"My sources say no." ,"Outlook not so good." ,
 "Very doubtful."];



document.querySelector(".mybtn").addEventListener("click", function(){
  var randomAnswer= answer[Math.floor(Math.random() * answer.length)];
  p.innerHTML = randomAnswer;
});
