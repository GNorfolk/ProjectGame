$(function() {
	
	var instrButton = $('#instructions button')
	instrButton.on('click', function(event) {
		console.log('button working');
		$(this).closest('#instructions').addClass('mainHidden');
		$(this).closest('#mainDiv').children('#unitSelect').removeClass('mainHidden');
	});

	var unitP1Stat = {};
	var unitP2Stat = {};

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