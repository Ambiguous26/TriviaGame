// // deadline to the timer
// function updateTimer(deadline){
// 	var time = deadline - new Date();
// 	return {
// 		'minutes': Math.floor( (time/1000/600) % 60 ),
// 		'seconds': Math.floor( (time/1000) % 60 ),
// 		'total': time
// 	};
// }

// function animateClock(span){
// 	span.className = "turn";
// 	setTimeout(function(){
// 		span.className = "";
// 	},700);
// }




// // takes the 2 parameters clock and deadline
// function startTimer(id, deadline) {
// 	// fires function below every second
// 	var timerInterval = setInterval (function(){
// 		// grabs clock element and stores reference
// 		var clock = document.getElementById(id);
// 		var timer = updateTimer(deadline);

// 		clock.innerHTML = "<span>" + timer.minutes + "</span>"
// 						+ "<span>" + timer.seconds + "</span>";
	

// 	var spans = document.getElementByTagName("span").animateClock (span[1]);
// 	if(timer.seconds == 59) animateClock(spans[1]);
// 	if(timer.minutes == 59 && timer.seconds == 59) animateClock (spans [0]);



// 	// check for end of time
// 	if(timer.total < 1){
// 		clearInterval(timerInterval);
// 		clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
// 	}



// 	}, 1000);
// }

// // when window loads it will fire this function below
// window.onload = function() {
// 	// variable that has the starting time 
// 	var deadline = new Date ("01:30");
// 	// call this function to insert deadline to clock
// 	startTimer("clock", deadline);
// };




// Set the time we're counting down from
// var questions = document.body.childNodes.length;
// var secs = (1 * questions);
// var countDownTime = secs;
// console.log (countDownTime);
// 	// Update the count down every 1 second
// 	x = setInterval (function () {
// 		// set count down time
// 		secs--; console.log(secs);
// 		if (secs < .01) {
// 			clearInterval();
// 			alert ("Time Expired!")
// 		}


// 	}, 1000);

// function setup() {
// 	noCanvas();

// 	var timer = document.getElementByID('#timer').innerHTML = "This is where the timer will go";
// }




// when start button is pressed -- startcontainer will hide
// mainContainer will appear (clock & questions)
// Clock will be counting down
// game ends when time is out.
// mainContainer will hide
// endContainer will show stats
// game will restart when start button is pressed





// multiple choice connect to API to bring in questions
// provide 4 possible answers/true or false answers
// can only choose one answer
// if different button is selected overwrite the previous selection.
// if correct answer choosen increase number of right
// if wrong answer choosen increase number of incorrrect responses
// if questions were left unanswered incease number of unanswered questions

// $(document).ready(function(){

// })


window.onload = function (){



var startContainer;

var gameContainer;

var endContainer;



var questions = [
	
		{
		question: "Brass gets discoloured in air because of the presence of which of the following gases in air?",
			answerA: "Oxygen",
			answerB: "Hydrogen sulphide",
			answerC:  "Carbon dioxide",
			answerD: "Nitrogen",
			correctAns: "B" 
			
		},
		
		{
		question: "Which of the following is a non metal that remains liquid at room temperature?",
			answerA: "Phosphorous",
			answerB: "Bromine",
			answerC: "Chlorine",
			answerD: "Helium",
			correctAns: "B"
		},
		
		{
		question: "Chlorophyll is a naturally occurring chelate compound in which central metal?",
			answerA: "Copper",
			answerB: "Magnesium",
			answerC: "Iron",
			answerD: "Calcium",
			correctAns: "B"
		},

		{
		question: "Which of the following is used in pencils?",
			answerA: "Graphite",
			answerB: "Silicon",
			answerC: "Charcoal",
			answerD: "Phosphorous",
			correctAns: "A"
		},
		
		{
		question: "The gas usually filled in the electric bulb is?",
			answerA: "Nitrogen",
			answerB: "Hydrogen",
			answerC: "Carbon dioxide",
			answerD: "Oxygen",
			correctAns: "A"
		},

		{
		question: "Which of the gas is not known as green house gas?",
			answerA: "Methane",
			answerB: "Nitrous oxide",
			answerC: "Carbon dioxide",
			answerD: "Hydrogen",
			correctAns: "D"
		},

		{
		question: "The hardest substance available on earth is?",
			answerA: "Gold",
			answerB: "Iron",
			answerC: "Diamond",
			answerD: "Platinum",
			correctAns: "C"
		},

		{
		question: "Which of the following is used as a lubricant?",
			answerA: "Graphite",
			answerB: "Silica",
			answerC: "Iron Oxide",
			answerD: "Diamond",
			correctAns: "A"
		},

		{
		question: "When an iron nail gets rusted, iron oxide is formed?",
			answerA: "Without any change in the weight of the nail",
			answerB: "With decrease in the weight of the nail",
			answerC: "With increase in the weight of the nail",
			answerD: "Without any change in colour or weight of the nail",
			correctAns: "C"
		},

		{
		question: "What causes the sky to be blue?",
			answerA: "Refelction of the Ocean",
			answerB: "Sunlight passing through our atmosphere",
			answerC: "Chemical reaction in air molecules",
			answerD: "Blue stands for beautiful",
			correctAns: "B"
		}


];

console.log(questions[1]);

function showQuestions () {
	for (var i = 0; i < questions.length; i++) {
		console.log(questions[i]);
		var newDiv = $("<div>");
		newDiv.attr("class","questionWrapper");
		var newQuestion = $("<p>");
		newQuestion.text(questions[i].question);
		newDiv.append(newQuestion);

		var newAnswerA = $("<p>");
		newAnswerA.text(questions[i].answerA);
		newDiv.append(newAnswerA);

		var newAnswerB = $("<p>");
		newAnswerB.text(questions[i].answerB);
		newDiv.append(newAnswerB);

		var newAnswerC = $("<p>");
		newAnswerC.text(questions[i].answerC);
		newDiv.append(newAnswerC);

		var newAnswerD = $("<p>");
		newAnswerD.text(questions[i].answerD);
		newDiv.append(newAnswerD); 

		$("#questions").append(newDiv);
	
		

		// div.append(
		// 	"<p>" + questions[i].question + "</p>" + "<div class='buttons'></div" 
		
		// );
		
	}


}

showQuestions();



	// append: function(){
	// 	$("#questions").append("<h2/>").html(game.question[]);
	// }



	// updateHTML: function () {

	// }


// var currentQuestion: null;

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

// for when the timer runs out
var timeout;

var counter;

// Our stopwatch object
var stopwatch = {

  time: 10,

  	reset: function () {
  		stopwatch.time = 30;
		$('#clock').html('00:30');
		

  	},



	start: function (seconds) {
		var ms = seconds * 1000;
		// created variable called counter and set an interval and do it this often.- references the object and function count.
		counter = setInterval (function() {
			stopwatch.time--;
			$("#clock").html("Time Remaining: " + stopwatch.time);
		 	}, 1000);
		clockRunning = true;
		
		timeout = setTimeout(function(){
			stopwatch.timeout();

		},ms);

	
	},

	timeout: function () {
		stopwatch.stop (counter, timeout);
	},




	stop: function () {
		clearInterval(counter);
		clearTimeout(timeout);
		clockRunning = false;

	},

	count: function (){
		// increment by -1
		stopwatch.time--;
		// This variable will be referencing the object and timeconverted function and passing through stopwatchtime
		var converted = stopwatch.timeConverter(stopwatch.time);
		// take html element and displaed the converted variable
		$("#clock").html(converted);

	},

	timeConverter: function(t) {

	    var minutes = Math.floor(t / 60);
	    var seconds = t - (minutes * 60); // t % 60

	    if (seconds < 10) {
	      seconds = "0" + seconds;
	    }

	    if (minutes === 0) {
	      minutes = "00";
	    }
	    else if (minutes < 10) {
	      minutes = "0" + minutes;
	    }

	    return minutes + ":" + seconds;
	  }
	};
$("#startButton").on("click", function(){
	stopwatch.start(stopwatch.time);
	// game.questions.append(game.questions);\
	$("#questions").append($("h2"));
});








};//end of script






























