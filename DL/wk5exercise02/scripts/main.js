
/**
 * Start clock
 */
function initClock() {
	var clock = document.getElementById('clock');
	var time  = getCurrentTime(new Date());

	// display time
	clock.innerHTML = '0:00'; // !! your code here
}

/**
 * Parse the time
 * @param date object - current time 
 * @return date array
 */
function getCurrentTime(date) {
	var time = [];

	// !! your code here

	return time;
}

// start
initClock();