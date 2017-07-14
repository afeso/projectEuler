$(document).ready(function() {
	// Calculate for the sum of the multiples of 3 & 5
	var sum = 0;
	
	for(var i = 0; i < 1000; i++) {
		if(i % 3 == 0 || i % 5 == 0) {
			sum = sum + i;
		}
	}
	$('.answer1').hide();
	$('.answer2').hide();
	
	$('.ans1').click(function() {
		$(this).next().toggle().text("The answer is: " + sum);
	});
	
	var a = 0;
		var b  = 1;
		var c = 1;
		var fsum = 0;
		while( c <= 4000000)
		{
				c = a+b;
				a = b;
				b = c;
				if ( c%2 === 0)
					fsum = fsum + c;
		}
		$('.ans2').click(function() {
			$(this).next().toggle().text("The answer is: " + fsum);
	});
	
	$('.footer').click(function() {
		$(this).slideToggle();
	});
});