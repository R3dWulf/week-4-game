//---------Make sure page is ready for player-----------------------------
$(document).ready(function(){

//--------------Set Variables----------------------------------------------

	var winCounter = 0;
	var lossCounter = 0;
	var currentScore = 0;
	var scoreNeeded = randomNumber();
	var redGem = 0;
	var blueGem =0;
	var yellowGem = 0;
	var greenGem = 0;




//--------------Set Functions----------------------------------------------

	//Create a function that will force a random number between 19 and 120
	function randomNumber(min, max) {
		min = 19;
		max = 120;
   		return Math.floor(Math.random() * (max - min)) + min;

	}

	//Display the random number in the ranNum div tag
	document.querySelector('#ranNum').innerHTML = scoreNeeded;


	//Determine win/lose conditions that also allows the game to restart.
	function winLose() {
		// Lose condition
		if (currentScore > scoreNeeded){
			//Test to see if the if statement works
			console.log("you lose");	

			//Reset variables
			redGem = 0;
			blueGem = 0;
			yellowGem = 0;
			greenGem = 0;
			currentScore = 0;
			lossCounter++;
			randomNumber();

			//Display new values of variables
			document.querySelector('#lose').innerHTML = lossCounter;
			document.querySelector('#currentScore').innerHTML = currentScore;
			document.querySelector('#winLose').innerHTML = "You Lost!!!";
			//Make sure method works
			console.log("New Score Needed: " + randomNumber());
			document.querySelector('#ranNum').innerHTML = randomNumber();
		}

		// Win condition
		if(currentScore == scoreNeeded){
			//Test to see if the if statement works
			console.log("You win");

			//Reset vaiables
			winCounter++;			
			currentScore = 0;
			redGem = 0;
			blueGem = 0;
			yellowGem = 0;
			greenGem = 0;
			randomNumber();

			//Display new values of variables
			document.querySelector('#currentScore').innerHTML = currentScore;			
			document.querySelector('#win').innerHTML = winCounter;
			document.querySelector('#winLose').innerHTML = "You Won!!!";
			document.querySelector('#ranNum').innerHTML = randomNumber();
		}
	}


	//Create the on click function for the red gem
	$('#red').on('click', function(){
		//test---console.log("Red Gem Before If: " + redGem);
		//before the image is clicked, red's value before IF is zero(false) so the else statement will run first
		//when clicked again the if statement will be true becuase redGem will be greater than 0 so 
		//math.floor will not run again which will give the same number each time the image is clicked
		if(redGem){
			//Increase score by value of red gem if clicked again. 
			currentScore = currentScore + redGem;
			//Displat increased score on click
			document.querySelector('#currentScore').innerHTML =  currentScore;
			//Debugging for 2+ clicks
			console.log("Red Gem, Second click currentScore: " + currentScore + ", Red Gem Value: " + redGem);
			//Active winLose function if the red gem causes the score to match or pass scoreNeeded
			winLose();
		} else {
			//Get the random number for the gem on the first click
			redGem = Math.floor((Math.random()* 12) + 1);
			//Set the random value to the gem so that the first click will be able to show on screen
			currentScore = currentScore  + redGem;
			//Display first click on screen
			document.querySelector('#currentScore').innerHTML = currentScore;
			//Debugging for first click
			console.log("Red Gem, Firct Click - Current Score: " + currentScore + ", Red Gem Value: " + redGem);
		}

	});

	//Create the on click function for the blue gem - code same as red gem
	$('#blue').on('click', function(){
		if(blueGem){
			currentScore = currentScore + blueGem;
			document.querySelector('#currentScore').innerHTML =  currentScore;
			console.log("Blue Gem, Second click currentScore: " + currentScore + ", Blue Gem Value: " + blueGem);
			winLose();
		} else {
			blueGem = Math.floor((Math.random()* 12) + 1);
			currentScore = currentScore  + blueGem;
			document.querySelector('#currentScore').innerHTML = currentScore;
			console.log("Blue Gem, Firct Click - Current Score: " + currentScore + ", Blue Gem Value: " + blueGem);
		}

	});

	//Create the on click function for the yellow gem - code same as red gem
	$('#yellow').on('click', function(){
		if(yellowGem){
			currentScore = currentScore + yellowGem;
			document.querySelector('#currentScore').innerHTML =  currentScore;
			console.log("Yellow Gem, Second click currentScore: " + currentScore + ", Yellow Gem Value: " + yellowGem);
			winLose();
		} else {
			yellowGem = Math.floor((Math.random()* 12) + 1);
			currentScore = currentScore + yellowGem;
			document.querySelector('#currentScore').innerHTML = currentScore;
			console.log("Yellow Gem, Firct Click - Current Score: " + currentScore + ", Yellow Gem Value: " + yellowGem);
		}
	});

	//Create the on click function for the green gem - code same as red gem
	$('#green').on('click', function(){
		if(greenGem){
			currentScore = currentScore + greenGem;
			document.querySelector('#currentScore').innerHTML =  currentScore;
			console.log("Green Gem, Second click currentScore: " + currentScore + ", Green Gem Value: " + greenGem);
			winLose();
		} else {
			greenGem = Math.floor((Math.random()* 12) + 1);
			currentScore = currentScore + greenGem;
			document.querySelector('#currentScore').innerHTML = currentScore;
			console.log("Green Gem, Firct Click - Current Score: " + currentScore + ", Green Gem Value: " + greenGem);
		}

	});




//---------Show start values for Debugging---------------------------------------------------------------------------
	console.log("Current Score: " + currentScore);
	console.log("Score Needed: " + scoreNeeded);

//-----End $(document).ready---------------------------------------------------------------------------------------
});