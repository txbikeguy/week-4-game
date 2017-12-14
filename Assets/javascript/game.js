$(document).ready(function() {

	$("img").on("click", function() {
  		$(this).effect("bounce", "slow");
	});

	var addition = 0;
	var wins = 0;
	var losses = 0;
	var randomCrystal = [];
	var randomNumber = 0;

	var randomCrystal;
		$("img").each(function(i, el) {
			randomCrystal = Math.floor(Math.random() * 12) + 1;
			$(el).attr("value", randomCrystal);
		});

	function gameStart() {
		addition = 0;
		var randomNumber = Math.floor(Math.random() * 120) + 19;
		$("#random-number").text(randomNumber);
		console.log("Random Number: " + randomNumber);
		$("#random-number").effect("shake", "slow"); 
		$("#current-total").text(addition);

	
		$("img").on("click", function() {
			var crystalValue = ($(this).attr("value"));
			console.log("The value of this crystal is: " + $(this).attr("value"));
			crystalValue = parseInt(crystalValue);
			addition += crystalValue;
			$("#current-total").text(addition);
			$("#current-total").effect("shake", 125);

			if (addition === randomNumber) {
			wins++;
			$("#wins").text(wins);
			$("#wins").effect("shake", "slow");
			alert("You got it!!");
		}

		else if (addition >= randomNumber) {
			losses++;
			$("#losses").text(losses)
			$("#losses").effect("shake", "slow");
			alert("You went over! Try again.");
			gameStart();
		}

		});


		
	};



gameStart();
});