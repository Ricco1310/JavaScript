
/**
 * Start clock
 */
function initClock() {
	var clock = document.getElementById('clock');
	var time  = getCurrentTime(new Date());

	// display time
	clock.innerHTML = time['hours'] + ':' +  time['minutes'] + ':' + time['seconds'];
}

/**
 * Parse the time
 * @param date object - current time 
 * @return date array
 */
function getCurrentTime(date) {
	var time = [];

	// fill array
	time['seconds'] = date.getSeconds();
	time['minutes'] = date.getMinutes(),
	time['hours']   = date.getHours();

	// hours: add leading zero
	if (time['hours'] < 10) {
		time['hours'] = '0' + time['hours'];
	}

	// minutes: add leading zero
	if (time['minutes'] < 10) {
		time['minutes'] = '0' + time['minutes'];
	}

	// seconds: add leading zero
	if (time['seconds'] < 10) {
		time['seconds'] = '0' + time['seconds'];
	}

	return time;
}

// start
initClock();