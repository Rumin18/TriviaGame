console.log("loading");

  // information about the state of game play
var gameState = {

    // set the time at 60 seconds, and count down by 1 second
    timeRemaining : 60, 
    questionList: [{
      text: "Name the Warrior who appeared in the most elimination round games this season", 
      answers: [{
        text: "Klay Thompson",
        correct: false

      },{
        text: "Nick Young",
        correct: true
      },{
        text: "Draymond Green",
        correct: false 
      },{
        text: "Zaza Pachulia",
        correct: false
      }]
    },{
      text: "Which Warrior led the team in points this season?", 
      answers: [{
        text: "Stephen Curry",
        correct: false
      },{
        text: "Klay Thompson",
        correct: false
      },{
        text: "Kevin Durrant",
        correct: true
      },{
        text: false
      }]
    },{
      text: "Which Warrior makes the most salary this season?",
      answers: [{
        text: "Kevin Durrant",
        correct: false
      },{
        text: "Stephan Curry",
        correct: true
      },{
        text: "Klay Thompson",
        correct: false
      },{
        text: "Draymond Green",
        correct: false
      }]
    },{
      text: "The Warriors' best offensive game this season came against the Bulls. How many points did they score?",
      answers: [{
        text: "111",
        correct: false
      },{
        text: "126",
        correct: false
      },{
        text: "132",
        correct: false
      },{
        text: "143",
        correct: true
      }]
    },{
      text: "Who is the oldest player on the Warriors' roster this season?",
      answers: [{
        text: "Andre Iguodala",
        correct: false
      },{
        text: "David West",
        correct: true
      },{
        text: "Zaza Pachulia",
        correct: false
      },{
        text: "Shaun Livingston",
        correct: false
      }]
    },{
      text: "Who was the only Warrior this season to win a Western Conference Player of the Month award?",
      answers: [{
        text: "Kevin Durant",
        correct: false
      },{
        text: "Klay Thompson",
        correct: false
      },{ 
        text: "Draymond Green",
        correct: false
      },{
        text: "Stephan Curry",
        correct: true
      }]
    },{
      text: "Prior to signing a two-way contract with the Warriors, Quinn Cook signed with which team in training camp (before getting waived)?",
      answers: [{
        text: "Cleveland Cavaliers",
        correct: false
      },{
        text: "New Orleans Pelicans",
        correct: false
      },{
        text: "Dallas Mavericks",
        correct: false
      },{
        text: "Atlanta Hawks",
        correct: true
      }]
    },{
      text: "Aside from Damian Jones and Chris Boucher, who is the one Warrior who never started a game in the regular season?",
      answers: [{
        text: "David West",
        correct: true
      },{
        text: "JaVale McGee",
        correct: false
      },{
        text: "Patrick McGaw",
        correct: false
      },{
        text: "Omri Casspi",
        correct: false
      }]
    },{
      text: "How many wins did the Warriors have at home in the regular season?",
      answers: [{
        text: "25",
        correct: false
      },{
        text: "28",
        correct: false
      },{
        text: "29",
        correct: true
      },{
        text: "32",
        correct : false
      }]
    }]}
    
    $(document).ready(function(){

      // start the game when user clicks on Start button
      $("#start-button").on("click", function(){
        console.log ("start game")

      var questionDiv= $("#question-container")
      //questionDiv.append($("<div>").text(gameState.questionList[0].text))
      // questionDiv.append($("<div>").text(gameState.questionList[1].text))
      // questionDiv.append($("<div>").text(gameState.questionList[2].text))
      // questionDiv.append($("<div>").text(gameState.questionList[3].text))
      // questionDiv.append($("<div>").text(gameState.questionList[4].text))
      // questionDiv.append($("<div>").text(gameState.questionList[5].text))
      // questionDiv.append($("<div>").text(gameState.questionList[6].text))
      // questionDiv.append($("<div>").text(gameState.questionList[7].text))
      // questionDiv.append($("<div>").text(gameState.questionList[8].text))
      // questionDiv.append($("<div>").text(gameState.questionList[9].text))

      for (var i= 0; i < gameState.questionList; i++) {
        var question= gameState.questionList[i];

        var qDiv= $("<div>")
                  .addClass ("question")
                  .attr("id", "question-" +i)
      }   
      
     });
      
      
    
    });
    var timer;
    // start the timer, hide the start page, show the questions
    function startTimer() {
      $("#timer").text("Time remaining: " + gameState.timeRemaining);
      timer= setInterval(countdown, 1000);
      $("#start-page").hide();
      trivia.displayQuestions();
    
    }
    // decrement the timer and update the UI; stop the timer at 0
      function countdown(){
       gameState.timeRemaining--;
       $("#timer").text("Time remaining: " + gameState.timeRemaining);
       if (gameState.timeRemaining === 0) {
        stopTimer();
        $("#timer").empty();
       }
    }
    // stop the timer and check the answers 
      function stopTimer() {
      clearInterval();
      trivia.checkAnswers();
    }





  // build question list
    // array of question objects with properties:
    // question text
    // array of possible answers with objects 
    // text properties
    // correct boolean 
    // build questions with jquery
    // build a div for each question with ID of question-I
    // for loop 
    // text
    // answers
    // for loop
    // build an element for each answer 
