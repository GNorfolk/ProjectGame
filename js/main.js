$(function() {
	
	var instrButton = $('#instructions button')
	instrButton.on('click', function(event) {
		//console.log('button working');
		$(this).closest('#instructions').addClass('mainHidden');
		$(this).closest('#mainDiv').children('#unitSelect').removeClass('mainHidden');
	});

	var unitP1Stat = {
		unit1: 0,
		unit2: 0,
		unit3: 0,
		unit4: 0,
		unit5: 0,
		unit6: 0,
		unit7: 0,
		unit8: 0,
	};
	var unitP2Stat = {
		unit1: 0,
		unit2: 0,
		unit3: 0,
		unit4: 0,
		unit5: 0,
		unit6: 0,
		unit7: 0,
		unit8: 0,
	};

	var count = 0;

	var startButton = $('#startSelection');
	var confirmButton = $('#confirmSelection');

	startButton.on('click', function(event) {

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

			updateUI(unitP1Stat);
			updateUI(unitP2Stat);

			// console.log(unitP1Stat);
			// console.log(unitP2Stat);

			count++;

			if (count === 9) {
				$(this).closest('#unitSelect').addClass('mainHidden');
				$(this).closest('#mainDiv').children('#stats').removeClass('mainHidden');
			}

		});
	});

	// THE BELOW IS A QUICK WAY TO GET TO THE STATS PAGE FOR DEBUGGING
	// var selectButton = $('#topSelect button')
	// selectButton.on('click', function(event) {
	// 	console.log('Second button working');
	// 	$(this).closest('#unitSelect').addClass('mainHidden');
	// 	$(this).closest('#mainDiv').children('#stats').removeClass('mainHidden');
	// })

	// ************************************************************************
	// put all functions below this line just for ease of use and all that jazz
	// ************************************************************************

	// This function adds info to the 
	function objectAdd(player, unitNum, unitType) {
		if (player === 'p1') {
			var string = 'unit' + unitNum;
			var varName = '1-' + unitNum;
			unitP1Stat[string] = {
				name: varName,
				type: unitType,
				health: 100
			}
		} else if (player === 'p2') {
			var string = 'unit' + unitNum;
			var varName = '2-' + unitNum;
			unitP2Stat[string] = {
				name: varName,
				type: unitType,
				health: 100
			}
		} else {
			console.log('error');
		}
	};

	function updateUI(unitStat) {
		//
	}

});