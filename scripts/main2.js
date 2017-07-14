$(document).ready(function() {
	var a = 0;
		var b  = 1;
		var c = 1;
		var sum = 0;
		while( c <= 4000000)
		{
				c = a+b;
				a = b;
				b = c;
				if ( c%2 === 0)
					sum = sum + c;
}
});