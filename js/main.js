$(function() {
	
	var instrButton = $('#instructions button')
	instrButton.on('click', function(event) {
		//console.log('button working');
		$(this).closest('#instructions').addClass('mainHidden');
		$(this).closest('#mainDiv').children('#unitSelect').removeClass('mainHidden');
	});

	var unitP1Stat = {};
	var unitP2Stat = {};
	var count = 0;

	var startButton = $('#startSelection')
	startButton.on('click', function(event) {

		if (count === 0 || count === 9) {
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

	});

	var confirmButton = $('#confirmSelection')
	confirmButton.one('click', function(event) {

		var unitType = $("#leftDropDown option:selected").text();
		
		var player;
		if ((count % 2) === 0) {
			player = 'p1';
		} else if ((count % 2) === 1) {
			player = 'p2';
		}

		if (count === 0) {
			unitNum = 1;
		}

		objectAdd(player, unitNum, unitType);

		console.log(unitP1Stat);

		if (count === 10) {
			$(this).closest('#unitSelect').addClass('mainHidden');
			$(this).closest('#mainDiv').children('#stats').removeClass('mainHidden');
		}

	});

	// THE BELOW ARE EXAMPLES OF INPUT FROM USER ENTRY
	// objectAdd('p1', 1, 'swordsmen');
	// objectAdd('p1', 2, 'horsemen');

	// THE BELOW IS WHAT I WANT MY OBJECTS TO LOOK LIKE AT THE END
	// var unitP1Stat = {
	// 	unit1: {
	// 		name: '1-1',
	// 		type: 'swordsmen',
	// 		health: 100;
	// 	},
	// 	unit2: {
	// 		name: '1-2',
	// 		type: 'swordsmen',
	// 		health: 100;
	// 	},
	// 	unit3: {
	// 		name: '1-3',
	// 		type: 'swordsmen',
	// 		health: 100;
	// 	},
	// 	unit4: {
	// 		name: '1-1',
	// 		type: 'swordsmen',
	// 		health: 100;
	// 	},
	// 	unit5: {
	// 		name: '1-1',
	// 		type: 'swordsmen',
	// 		health: 100;
	// 	},
	// 	unit6: {
	// 		name: '1-1',
	// 		type: 'swordsmen',
	// 		health: 100;
	// 	},
	// 	unit7: {
	// 		name: '1-1',
	// 		type: 'swordsmen',
	// 		health: 100;
	// 	},
	// 	unit8: {
	// 		name: '1-1',
	// 		type: 'swordsmen',
	// 		health: 100;
	// 	}
	// };


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

});