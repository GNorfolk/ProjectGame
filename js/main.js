$(function() {
	
	var instrButton = $('#instructions button')

	var count = 0;

	var startButton = $('#startSelection');
	var confirmButton = $('#confirmSelection');

	var unitStat = {
		player1: {
			unit1: 0,
			unit2: 0,
			unit3: 0,
			unit4: 0,
			unit5: 0,
			unit6: 0,
			unit7: 0,
			unit8: 0,
		},
		player2: {
			unit1: 0,
			unit2: 0,
			unit3: 0,
			unit4: 0,
			unit5: 0,
			unit6: 0,
			unit7: 0,
			unit8: 0,
		}
	}

	var battleMoves = {
		player1: [],
		player2: []
	};
	var counter = 0;

	var turn = 0;

	var targetArray = [];

	instrButton.on('click', function(event) {
		//console.log('button working');
		$(this).closest('#instructions').addClass('mainHidden');
		$(this).closest('#mainDiv').children('#unitSelect').removeClass('mainHidden');
	});

	startButton.on('click', function(event) {

		$('#leftDropDown').val('');
		$('#rightDropDown').val('');

		if (count === 0 || count === 8) {
			$('#rightSelect').addClass('mainHidden');
			$('#leftSelect').removeClass('mainHidden');
		} else {
			$('#rightSelect').removeClass('mainHidden');
			$('#leftSelect').removeClass('mainHidden');
		}

		if ((count % 2) === 0) {
			$('#unitSelecth1').text('Player one, please select your unit(s).');
		} else if ((count % 2) === 1) {
			$('#unitSelecth1').text('Player two, please select your unit(s).');
		}

		confirmButton.one('click', function(event) {

			startButton.text('Next selection');

			var unitTypeL = $("#leftDropDown option:selected").text();
			var unitTypeR = $("#rightDropDown option:selected").text();
			
			var player;
			if ((count % 2) === 0) {
				player = 'p1';
			} else if ((count % 2) === 1) {
				player = 'p2';
			}

			var unitNumL;
			var unitNumR = count + 1;

			if (count === 0) {
				unitNumL = 1;
			} else {
				unitNumL = count;
			}

			if (count === 0 || count === 8) {
				objectAdd(player, unitNumL, unitTypeL);
			} else {
				objectAdd(player, unitNumL, unitTypeL);
				objectAdd(player, unitNumR, unitTypeR);
			}

			updateHealth(unitStat);

			count++;

			if (count === 9) {
				$(this).closest('#unitSelect').addClass('mainHidden');
				$(this).closest('#mainDiv').children('#board').removeClass('mainHidden');
			}

		});
	});

	$('#topBoard button').on('click', function(event) {
		if (counter === 0) {
			battleMoves['player1'] = [
				[parseInt($('#1a').val()),parseInt($('#1b').val())],
				[parseInt($('#2a').val()),parseInt($('#2b').val())],
				[parseInt($('#3a').val()),parseInt($('#3b').val())],
				[parseInt($('#4a').val()),parseInt($('#4b').val())],
				[parseInt($('#5a').val()),parseInt($('#5b').val())],
				[parseInt($('#6a').val()),parseInt($('#6b').val())],
				[parseInt($('#7a').val()),parseInt($('#7b').val())],
				[parseInt($('#8a').val()),parseInt($('#8b').val())]
			];
		} else if (counter === 1) {
			battleMoves['player2'] = [
				[parseInt($('#1a').val()),parseInt($('#1b').val())],
				[parseInt($('#2a').val()),parseInt($('#2b').val())],
				[parseInt($('#3a').val()),parseInt($('#3b').val())],
				[parseInt($('#4a').val()),parseInt($('#4b').val())],
				[parseInt($('#5a').val()),parseInt($('#5b').val())],
				[parseInt($('#6a').val()),parseInt($('#6b').val())],
				[parseInt($('#7a').val()),parseInt($('#7b').val())],
				[parseInt($('#8a').val()),parseInt($('#8b').val())]
			];

			$(this).closest('#board').addClass('mainHidden');
			$(this).closest('#mainDiv').children('#stats').removeClass('mainHidden');

			unitStat = combatCalc(unitStat, battleMoves);
			updateHealth();

		} else {
			console.log('error');
		}

		counter++;

		$('#1a').val('');
		$('#2a').val('');
		$('#3a').val('');
		$('#4a').val('');
		$('#5a').val('');
		$('#6a').val('');
		$('#7a').val('');
		$('#8a').val('');
		$('#1b').val('');
		$('#2b').val('');
		$('#3b').val('');
		$('#4b').val('');
		$('#5b').val('');
		$('#6b').val('');
		$('#7b').val('');
		$('#8b').val('');

	});

	$('#topStats button').on('click', function(event) {
		count = 0;
		counter = 0;
		turn++;
		$(this).closest('#stats').addClass('mainHidden');
		$(this).closest('#mainDiv').children('#board').removeClass('mainHidden');
	});

	// ************************************************************************
	// put all functions below this line just for ease of use and all that jazz
	// ************************************************************************

	// This function adds info to the 
	function objectAdd(player, unitNum, unitType) {
		if (player === 'p1') {
			var string = 'unit' + unitNum;
			var varName = '1-' + unitNum;
			unitStat.player1[string] = {
				name: varName,
				type: unitType,
				health: 100
			}
		} else if (player === 'p2') {
			var string = 'unit' + unitNum;
			var varName = '2-' + unitNum;
			unitStat.player2[string] = {
				name: varName,
				type: unitType,
				health: 100
			}
		} else {
			console.log('error');
		}
	};

	function updateHealth(unitStatL, unitStatR) {
		$('#unitl1 p').text(unitStat.player1.unit1.health);
		$('#unitl2 p').text(unitStat.player1.unit2.health);
		$('#unitl3 p').text(unitStat.player1.unit3.health);
		$('#unitl4 p').text(unitStat.player1.unit4.health);
		$('#unitl5 p').text(unitStat.player1.unit5.health);
		$('#unitl6 p').text(unitStat.player1.unit6.health);
		$('#unitl7 p').text(unitStat.player1.unit7.health);
		$('#unitl8 p').text(unitStat.player1.unit8.health);

		$('#unitr1 p').text(unitStat.player2.unit1.health);
		$('#unitr2 p').text(unitStat.player2.unit2.health);
		$('#unitr3 p').text(unitStat.player2.unit3.health);
		$('#unitr4 p').text(unitStat.player2.unit4.health);
		$('#unitr5 p').text(unitStat.player2.unit5.health);
		$('#unitr6 p').text(unitStat.player2.unit6.health);
		$('#unitr7 p').text(unitStat.player2.unit7.health);
		$('#unitr8 p').text(unitStat.player2.unit8.health);
	}

	function combatCalc(stat, moves) {

		// units attacked lose support actions and creates array(s) for later use
		moves = ifAttacked(moves);

		var array = 

		// who
		// how much dmg to each

		// returns the new stats of the units
		return stat;
	}

	function ifAttacked(moves) {

		// first array is whether p1 units are attacked
		// second internal array is whether p2 units attacked
		// so ie tA[0][i] cycles through all p1 units
		targetArray = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
		
		// cycles through 0 to 7
		for (var i = 0; i < 8; i++) {
			// if player1 unit i type of move = attack(1)
			if (moves.player1[i][0] === 1) {
				// add 1 to tarray cell where 1 is p2 and second bit is 
				// target and the ++ adds one to that bit of the array
				targetArray[1][moves.player1[i][1]]++;
			}
		}
		for (var i = 0; i < 8; i++) {
			// if player2 unit i type of move = attack(1)
			if (moves.player2[i][0] === 1) {
				// add 1 to taray cell where 0 is p1 and second bit is target of p2
				// and ++ adds one to that cell value
				targetArray[0][moves.player2[i][1]]++;
			}
		}

		// cycles 0 though 7
		for (var i = 0; i < 8; i++) {
			// if unit i of p1 hit > 0 and p1 unit i type of attack = support(2)
			if (targetArray[0][i] > 0 && moves.player1[i][0] === 2) {
				moves.player1[i] = [0,0]
			}
		}
		// cycles 0 though 7
		for (var i = 0; i < 8; i++) {
			// if unit i of p2 hit > 0 and p2 unit i type of attack = support(2)
			if (targetArray[1][i] > 0 && moves.player2[i][0] === 2) {
				moves.player2[i] = [0,0]
			}
		}

		return moves;
	}

});











































