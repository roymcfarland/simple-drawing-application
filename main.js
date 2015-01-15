var $color = $('.selected').css("background-color");

var $canvas = $('canvas');

var $context = $canvas[0].getContext('2d');

var lastEvent;

var mouseDown = false;

// When clicking on list items
$(document).on('click', '.controls li', function() {
	// Deselect sibling elements
	$(this).siblings().removeClass('selected');
	// Select clicked elements
	$(this).addClass('selected');
	// Cache current color
	color = $(this).css('background-color');
});


// When new color button is clicked
$('#revealColorSelect').on('click', function() {
	// Show or hide the color select
	changeColor();
	$('#colorSelect').toggle();
});


// Update the new color <span>
var changeColor = function() {
	var r = $('#red').val();
	var g = $('#green').val();
	var b = $('#blue').val();
	$('#newColor').css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
};


// When color sliders change
$('input[type=range]').on('change', changeColor);

// When add color is clicked
$('#addNewColor').on('click', function() {
	// Append color to the controls <ul>
	var $newColor = $('<li></li>');
	$newColor.css('background-color', $('#newColor').css('background-color'));
	$('.controls ul').append($newColor);
	// Select the new color automatically
	$newColor.click();
});


// On mouse events on the <canvas>
$canvas.on('mousedown', function(e) {
	lastEvent = e;
	mouseDown = true;
}).on('mousemove', function(e) {
		// Draw lines
		if(mouseDown) {
		$context.beginPath();
		$context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		$context.lineTo(e.offsetX, e.offsetY);
		$context.strokeStyle = $color;
		$context.stroke();
		lastEvent = e;
	}
}).on('mouseup', function(){
	mouseDown = false;
}).on('mouseleave', function(){
	$canvas.mouseup();
});

// Practice programmatically drawing a square
	// $context.beginPath();
	// $context.moveTo(10, 10);
	// $context.lineTo(20, 10);
	// $context.lineTo(20, 20);
	// $context.lineTo(10, 20);
	// $context.closePath();
	// $context.stroke();
