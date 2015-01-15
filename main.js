var $color = $('.selected').css("background-color");

// When clicking on control list items
$('.controls li').on('click', function() {
	// Deselect sibling elements
	$(this).siblings().removeClass('selected');
	// Select clicked elements
	$(this).addClass('selected');
	// Cache current color
	color = $(this).css('background-color');
});


// When new color button is clicked
	// Show or hide the color select

// When color sliders change
	// Update the new color <span>

// When add color is clicked
	// Append color to the controls <ul>
	// Select the new color automatically

// On mouse events on the <canvas>
	// Draw lines