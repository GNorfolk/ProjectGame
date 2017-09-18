$(function() {
	
	var instrButton = $('#instructions button')
	instrButton.on('click', function(event) {
		console.log('button working');
		$(this).closest('#instructions').addClass('mainHidden');
		$(this).closest('#mainDiv').children('#unitSelect').removeClass('mainHidden');
	});

	var unitP1Stat = {};
	var unitP2Stat = {};
	var count = 0;

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

	console.log(unitP1Stat);

	objectAdd('p1', 1, 'swordsmen');

	console.log(unitP1Stat);

	objectAdd('p1', 2, 'horsemen');

	console.log(unitP1Stat);

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

	var selectButton = $('#topSelect button')
	selectButton.on('click', function(event) {
		console.log('Second button working');
		$(this).closest('#unitSelect').addClass('mainHidden');
		$(this).closest('#mainDiv').children('#stats').removeClass('mainHidden');
	})

});