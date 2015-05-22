'use strict';

var i=-1;
var quiz=[];
var question = "";
var answer = "";
var option1 = "";
var option2 = "";
var option3 = "";
var option4 = "";
var quizhtml ="";
var screens = 0;
var score = 0;
var response = "";
var first = true;

$(document).ready(function(){
/*
$.getJSON('quizes/montyquiz.json', function(quizdata) {
  console.log(quizdata);
	quiz=quizdata.montyquiz;
});
/* This part here should not be needed if the code above would read in the JSON properly*/
var quizdata = {"montyquiz":
  [
  {
    "id":1,
    "question":"What is your name?",
    "answer":"Obi-wan",
    "option1":"Brian",
    "option2":"Gallahad",
    "option3":"Obi-wan",
    "option4":"Skip"
  },
  {
    "id":2,
    "question":"What your quest?",
    "answer":"To seek out the holy grail",
    "option1":"To seek out the holy grail",
    "option2":"HG",
    "option3":"Um...",
    "option4":"Skip"
  },
  {
    "id":3,
    "question":"What is your favorite color?",
    "answer":"No, wait... blue",
    "option1":"Red",
    "option2":"No, wait... blue",
    "option3":"Purple",
    "option4":"Skip"
  },
  {
    "id":4,
    "question":"What is the airspeed velocity of a swallow",
    "answer":"African or European",
    "option1":"African or European",
    "option2":"33 mph",
    "option3":"Fast",
    "option4":"Skip"
   }
  ]
};
quiz = quizdata.montyquiz;
/* Comment out up to this point to test the JSON reading file*/
screens = quiz.length;
nextquest();


});


function nextquest() {
  if (first) {
    first = false;
  } else {
    response = document.querySelector('input[id="answer"]:checked').value;
    if (answer == response) {
      score = score + 1;
    };
  };

  if (i == screens-1) {
    alert("That was the last question. You scored " + score.toString() + " of "+screens.toString());
    i=0;
    score = 0;
  } else {
    i=i+1;
  };

  question = quiz[i].question;
  answer = quiz[i].answer;
  option1 = quiz[i].option1;
  option2 = quiz[i].option2;
  option3 = quiz[i].option3;
  option4 = quiz[i].option4;

quizhtml='<div id="quiz_holder">  <h2>Current Question'+(i+1).toString()+'of '+screens.toString()+'</h2><div>'+question+'</div> <form name="myform">    <div align="left"><br> <input type="radio" name="choice" id="answer" value="'+option1.toString()+'" >'+option1.toString()+'<br> <input type="radio" name="choice" id="answer" value="'+option2.toString()+'" >'+option2.toString()+'<br> <input type="radio" name="choice" id="answer" value="'+option3.toString()+'" >'+option3.toString()+'<br> <input type="radio" name="choice" id="answer" value="'+option4.toString()+'">'+option4.toString()+'<br>    </div>  </form> <h2> Current Score:'+score.toString()+' of '+screens.toString()+'</h2> </div>'  

//$('#quiz_holder').append(quizhtml);.toLowerCase().replace(/\s+/g, "")
jQuery('#quiz_holder').replaceWith(quizhtml);


};