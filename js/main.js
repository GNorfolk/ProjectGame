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

	var dmgGivenTotal = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
	var dmgTakenTotal = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];

	/////////////////////////////////////////////////////////////////////////////////////////

	instrButton.on('click', function(event) {
		$(this).closest('#instructions').addClass('mainHidden');
		$(this).closest('#mainDiv').children('#unitSelect').removeClass('mainHidden');
	});

	startButton.on('click', function(event) {

		// $('#leftDropDown').val('');
		// $('#rightDropDown').val('');

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

			// $('#1a').val('');
			// $('#2a').val('');
			// $('#3a').val('');
			// $('#4a').val('');
			// $('#5a').val('');
			// $('#6a').val('');
			// $('#7a').val('');
			// $('#8a').val('');
			// $('#1b').val('');
			// $('#2b').val('');
			// $('#3b').val('');
			// $('#4b').val('');
			// $('#5b').val('');
			// $('#6b').val('');
			// $('#7b').val('');
			// $('#8b').val('');

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

			// $('#1a').val('');
			// $('#2a').val('');
			// $('#3a').val('');
			// $('#4a').val('');
			// $('#5a').val('');
			// $('#6a').val('');
			// $('#7a').val('');
			// $('#8a').val('');
			// $('#1b').val('');
			// $('#2b').val('');
			// $('#3b').val('');
			// $('#4b').val('');
			// $('#5b').val('');
			// $('#6b').val('');
			// $('#7b').val('');
			// $('#8b').val('');

			$(this).closest('#board').addClass('mainHidden');
			$(this).closest('#mainDiv').children('#stats').removeClass('mainHidden');

			unitStat = combatCalc(unitStat, battleMoves);
			updateHealth2dp(unitStat);

		} else {
			console.log('error');
		}

		counter++;

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

	function updateHealth(unitStat) {
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

	function updateHealth2dp(unitStat) {
		$('#unitl1 p').text(unitStat.player1.unit1.health.toFixed());
		$('#unitl2 p').text(unitStat.player1.unit2.health.toFixed());
		$('#unitl3 p').text(unitStat.player1.unit3.health.toFixed());
		$('#unitl4 p').text(unitStat.player1.unit4.health.toFixed());
		$('#unitl5 p').text(unitStat.player1.unit5.health.toFixed());
		$('#unitl6 p').text(unitStat.player1.unit6.health.toFixed());
		$('#unitl7 p').text(unitStat.player1.unit7.health.toFixed());
		$('#unitl8 p').text(unitStat.player1.unit8.health.toFixed());

		$('#unitr1 p').text(unitStat.player2.unit1.health.toFixed());
		$('#unitr2 p').text(unitStat.player2.unit2.health.toFixed());
		$('#unitr3 p').text(unitStat.player2.unit3.health.toFixed());
		$('#unitr4 p').text(unitStat.player2.unit4.health.toFixed());
		$('#unitr5 p').text(unitStat.player2.unit5.health.toFixed());
		$('#unitr6 p').text(unitStat.player2.unit6.health.toFixed());
		$('#unitr7 p').text(unitStat.player2.unit7.health.toFixed());
		$('#unitr8 p').text(unitStat.player2.unit8.health.toFixed());
	}

	function combatCalc(stat, moves) {

		// units attacked lose support actions and creates array(s) for later use
		moves = ifAttacked(moves);

		var baseDmg = [[[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[]]]

		// baseDmg[0][i] = 12 * stat.player1[i].health / targetArray[0][i] / 100;
		// baseDmg[1][i] = 12 * stat.player2[i].health / targetArray[1][i] / 100;
		baseDmg[0][0] = 12 * stat.player1.unit1.health / targetArray[0][0] / 100;
		baseDmg[0][1] = 12 * stat.player1.unit2.health / targetArray[0][1] / 100;
		baseDmg[0][2] = 12 * stat.player1.unit3.health / targetArray[0][2] / 100;
		baseDmg[0][3] = 12 * stat.player1.unit4.health / targetArray[0][3] / 100;
		baseDmg[0][4] = 12 * stat.player1.unit5.health / targetArray[0][4] / 100;
		baseDmg[0][5] = 12 * stat.player1.unit6.health / targetArray[0][5] / 100;
		baseDmg[0][6] = 12 * stat.player1.unit7.health / targetArray[0][6] / 100;
		baseDmg[0][7] = 12 * stat.player1.unit8.health / targetArray[0][7] / 100;
		baseDmg[1][0] = 12 * stat.player2.unit1.health / targetArray[1][0] / 100;
		baseDmg[1][1] = 12 * stat.player2.unit2.health / targetArray[1][1] / 100;
		baseDmg[1][2] = 12 * stat.player2.unit3.health / targetArray[1][2] / 100;
		baseDmg[1][3] = 12 * stat.player2.unit4.health / targetArray[1][3] / 100;
		baseDmg[1][4] = 12 * stat.player2.unit5.health / targetArray[1][4] / 100;
		baseDmg[1][5] = 12 * stat.player2.unit6.health / targetArray[1][5] / 100;
		baseDmg[1][6] = 12 * stat.player2.unit7.health / targetArray[1][6] / 100;
		baseDmg[1][7] = 12 * stat.player2.unit8.health / targetArray[1][7] / 100;

		// moves.player1[unit number][0] for move type
		// moves.player1[unit number][1] for move target

		var dmgGiven = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
		var dmgTaken = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];

		// This adds all damage to two arrays declared above that tally damage given and received
		// one 2-line code adds damage going outwards and the other adds the return
		for (var i = 0; i < 8; i++) {
			// if unit i of p1 is attacking:
			if (moves.player1[i][0] === 1) {
				// the damage dealt in this one interations is added to dmg given by unit i of p1 
				dmgGiven[0][i] += baseDmg[0][i];
				// the dmg in this interation is added to that taken by target unit
				dmgTaken[1][moves.player1[i][1]] += baseDmg[0][i];

				// this is the return damage, same as above
				dmgGiven[1][moves.player1[i][1]] += baseDmg[1][moves.player1[i][1]];
				dmgTaken[0][i] += baseDmg[1][moves.player1[i][1]];
			}
			// this is the second loop that does the same thing for player 2's units
			// if unit i of p2 is attacking:
			if (moves.player2[i][0] === 1) {
				// the damage dealt in this one interations is added to dmg given by unit i of p2 
				dmgGiven[1][i] += baseDmg[1][i];
				// the dmg in this interation is added to that taken by target unit
				dmgTaken[0][moves.player2[i][1]] += baseDmg[1][i];

				// this is the return damage, same as above
				dmgGiven[0][moves.player2[i][1]] += baseDmg[0][moves.player2[i][1]];
				dmgTaken[1][i] += baseDmg[0][moves.player2[i][1]];
			}
		}

		console.log(moves);
		// console.log(baseDmg);
		console.log(targetArray);
		console.log(dmgTaken);

		stat.player1.unit1.health -= dmgTaken[0][0];
		stat.player1.unit2.health -= dmgTaken[0][1];
		stat.player1.unit3.health -= dmgTaken[0][2];
		stat.player1.unit4.health -= dmgTaken[0][3];
		stat.player1.unit5.health -= dmgTaken[0][4];
		stat.player1.unit6.health -= dmgTaken[0][5];
		stat.player1.unit7.health -= dmgTaken[0][6];
		stat.player1.unit8.health -= dmgTaken[0][7];
		stat.player2.unit1.health -= dmgTaken[1][0];
		stat.player2.unit2.health -= dmgTaken[1][1];
		stat.player2.unit3.health -= dmgTaken[1][2];
		stat.player2.unit4.health -= dmgTaken[1][3];
		stat.player2.unit5.health -= dmgTaken[1][4];
		stat.player2.unit6.health -= dmgTaken[1][5];
		stat.player2.unit7.health -= dmgTaken[1][6];
		stat.player2.unit8.health -= dmgTaken[1][7];

		// returns the new stats of the units
		return stat;
	}

	function ifAttacked(moves) {

		// first array is whether p1 units are attacked
		// second internal array is whether p2 units attacked
		// so ie tA[0][i] cycles through all p1 units
		targetArray = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
		
		// This adds one to defending unit's number of targets that its damage
		// is spread across:
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

		// this blocks any support moves if the unit is attacked.
		// cycles 0 though 7
		for (var i = 0; i < 8; i++) {
			// if unit i of p1 hit > 0 and p1 unit i type of attack = support(2)
			if (targetArray[0][i] > 0 && moves.player1[i][0] === 2) {
				moves.player1[i] = [-1,-1]
			}
		}
		// cycles 0 though 7
		for (var i = 0; i < 8; i++) {
			// if unit i of p2 hit > 0 and p2 unit i type of attack = support(2)
			if (targetArray[1][i] > 0 && moves.player2[i][0] === 2) {
				moves.player2[i] = [-1,-1]
			}
		}

		// if unit is supporting another unit then we add the number of units attacking
		// the defending unit since its damage will be spread over those too
		for (var i = 0; i < 8; i++) {
			// if player1 unit i type of move = attack(1)
			if (moves.player1[i][0] === 2) {
				// add the value of the target array for the supported unit
				// targetArray[0] is just p1 and the rest is the id of the supported unit
				targetArray[0][i] += targetArray[0][moves.player1[i][1]];
			}
		}
		for (var i = 0; i < 8; i++) {
			// if player2 unit i type of move = attack(1)
			if (moves.player2[i][0] === 2) {
				// add the value of the target array for the supported unit
				// targetArray[1] is just p2 and the rest is the id of the supported unit
				targetArray[1][i] += targetArray[1][moves.player2[i][1]];;
			}
		}

		// if unit is attacking something then add one to the number of targets
		// its damage is spread over.
		for (var i = 0; i < 8; i++) {
			// if player1 unit i type of move = attack(1)
			if (moves.player1[i][0] === 1) {
				// add one to number of targets of that unit ie unit i of p1
				targetArray[0][i]++;
			}
		}
		for (var i = 0; i < 8; i++) {
			// if player2 unit i type of move = attack(1)
			if (moves.player2[i][0] === 1) {
				// add one to number of targets of that unit ie unit i of p2
				targetArray[1][i]++;
			}
		}

		return moves;
	}

	function hideDead(stat) {
		stat.player1.unit1.health;
		stat.player1.unit2.health;
		stat.player1.unit3.health;
		stat.player1.unit4.health;
		stat.player1.unit5.health;
		stat.player1.unit6.health;
		stat.player1.unit7.health;
		stat.player1.unit8.health;
		stat.player2.unit1.health;
		stat.player2.unit2.health;
		stat.player2.unit3.health;
		stat.player2.unit4.health;
		stat.player2.unit5.health;
		stat.player2.unit6.health;
		stat.player2.unit7.health;
		stat.player2.unit8.health;
	}

});