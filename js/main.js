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
				[$('#1a').val(),$('#1b').val()],
				[$('#2a').val(),$('#2b').val()],
				[$('#3a').val(),$('#3b').val()],
				[$('#4a').val(),$('#4b').val()],
				[$('#5a').val(),$('#5b').val()],
				[$('#6a').val(),$('#6b').val()],
				[$('#7a').val(),$('#7b').val()],
				[$('#8a').val(),$('#8b').val()]
			];
		} else if (counter === 1) {
			battleMoves['player2'] = [
				[$('#1a').val(),$('#1b').val()],
				[$('#2a').val(),$('#2b').val()],
				[$('#3a').val(),$('#3b').val()],
				[$('#4a').val(),$('#4b').val()],
				[$('#5a').val(),$('#5b').val()],
				[$('#6a').val(),$('#6b').val()],
				[$('#7a').val(),$('#7b').val()],
				[$('#8a').val(),$('#8b').val()]
			];

			$(this).closest('#board').addClass('mainHidden');
			$(this).closest('#mainDiv').children('#stats').removeClass('mainHidden');

			combatCalc(unitStat, battleMoves);

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
		console.log('combat init');

		moves = ifAttacked(moves);

		// var varFocus = focus(moves);
		return stat;
	}

	function ifAttacked(moves) {
		
		targetArray = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
		
		for (var i = 0; i < 8; i++) {
			if (moves.player1[i][0] === '1') {
				targetArray[1][moves.player1[i][1]]++;
			}
		}
		for (var i = 0; i < 8; i++) {
			if (moves.player2[i][0] === '1') {
				targetArray[0][moves.player2[i][1]]++;
			}
		}

		return moves;
	}

	// function ifSupported(moves) {

	// 	supportArray = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];

	// 	for (var i = 0; i < 8; i++) {
	// 		if (moves.player2[i][0] === '2') {
	// 			supportArray[0][moves.player1[i][1]]
	// 		}
	// 	}
	// }

	// function focus(moves) {
	// 	// console.log(moves);
	// 	// var myArray =  [[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
	// 	// 				[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]];
	// 	//myArray[i][j] = [0,0];
	// 	// i is player and j is unit id



	// 	for (var i = 0; i < 0; i++) {
	// 		for (var j = 0; j < 0; j++) {
	// 			//
	// 		}
	// 	}

	// 	// console.log(myArray);

	// 	return myArray;
	// }

});












