var $color = $('.selected').css("background-color");

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
	// Draw lines