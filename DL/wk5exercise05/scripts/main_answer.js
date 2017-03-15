
/**
 * Start days spend
 */
function showDaysSpend() {

	// get current date
	var now = new Date();

	// start of school year
	var startDate = new Date(2016,08,22);

	// calculate 1 day in milliseconds: hours * minutes * seconds * milliseconds
	var day = 24 * 60 * 60 * 1000;	

	// calculate difference
	var days = Math.abs((now.getTime() - startDate.getTime()) / day);

	// render days
	document.getElementById('days').innerHTML = Math.round(days);
}

// start
showDaysSpend();