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
		$("#current-total").text(addition);

	
		$("img").on("click", function() {
			var crystalValue = ($(this).attr("value"));
			console.log("The value of this crystal is: " + $(this).attr("value"));
			crystalValue = parseInt(crystalValue);
			addition += crystalValue;
			$("#current-total").text(addition);

			if (addition === randomNumber) {
			wins++;
			$("#wins").text(wins);
			alert("You got it!!");
		}

		else if (addition >= randomNumber) {
			losses++;
			$("#losses").text(losses)
			alert("You went over! Try again.");
			gameStart();
		}

		});


		
	};



gameStart();
});