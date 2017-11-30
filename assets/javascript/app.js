//while start button is clicked perform function
$('#start').on('click',function(){
	game.start()
})

var questions =[{

	question: "The Llama is a domesticated camelid, this is a native to which continent?" ,
	answers: ["South America", "Antartica", "Africa", "Asia"],
	correctAnswer: "South America"
}, {
	question: "A lion in the wild usually makes no more than twenty kills a year",
	answers: ["It's True", "It's False"],
	correctAnswer: "It's True" 
}, {
	question: "Which animal is faster than an Ostrich?",
	answers: ["Horse", "Roadrunner","Cheetah","Turtle"],
	correctAnswer: "Cheetah"
}, {
	question: "If you life a Kangaroo's tail off the ground it cannot hop, Why?",
	answers: ["They use their tails for balance", "They do not like their tails to be touched","They do not like it","I don't know"],
	correctAnswer: "They use their tails for balance"
}, {
	question: "A bat is the only ______ that can fly",
	answers: ["Reptile","Amphibian","Mammal"],
	correctAnswer: "Mammal"
}];

var game = {
	//Track correct answers
	correct: 0,

	//Track incorrect answers
	wrong: 0,

	//Track time
	counter: 25,

	//Decrease counter by 1
	countdown: function(){
		game.counter--;
		$("#counter").html(game.counter);
		//Once counter is equal to zero
		if(game.counter == 0){
			//Run done function
			game.done();
		}
	},
	start:function(){

	timer = setInterval(game.countdown,1000);

	//.prepend() method inserts the specified content as the first child
	//Add time remaining into html
	$("#mstart").prepend("<h2>Time Remaining: <span id='counter'>25</span>seconds</h2>");

	$("#start").remove()

	//function is to perform loop
	for (var i = 0; i < questions.length; i++) {
		$("#mstart").append("<h2>"+ questions[i].question +"</h2")

	//Create sub-loop
	for (var n=0; n <questions[i].answers.length; n++) {


		 //Radio means only one will be able to be selected
		 //Append all questions and answers into html
		 $("#mstart").append("<input type='radio' name='question-" +i+"' value= '"+questions[i].answers[n]+"'>'"+questions[i].answers[n])
			}
		}
	},
	//Check for if question is correct or wrong
	done: function(){
		$().each($('input[name="question-0]":checked'),function(){
			if($(this).val() == questions[0].correctAnswer){
				game.correct++;
				} else {
					game.wrong++;
			}
		});
		$().each($('input[name="question-1]":checked'),function(){
			if($(this).val() == questions[1].correctAnswer){
				game.correct++;
				} else {
					game.wrong++;
			}
		});
		$().each($('input[name="question-2]":checked'),function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
				} else {
					game.wrong++;
			}
		});
		$().each($('input[name="question-3]":checked'),function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
				} else {
					game.wrong++;
			}
		});
		$().each($("input[name='question-4']:checked"),function(){
			if($(this).val()== questions[4].correctAnswer){
				game.correct++;
				} else {
					game.wrong++;
			}
		});
		this.result();
	},
	result: function(){
		clearInterval(timer);
		$('#mstart').remove();
		$('#mstart').html("<h2>All Done!</h2>")
		$('#mstart').append("<h3>Correct Answer:"+this.correct+"</h3>");
		$('#mstart').append("<h3>Incorrect Answer:"+this.wrongt+"</h3>");
		$('#mstart').append("<h3>Unanswered:"+(questions.length-(this.wrong+this.correct))+"</h3>");
	}
}