

function checkEmail(email){
	if(email.indexOf('@') == -1){
		console.log('Email check failed. Missing @');
		return false;
	} 

	if(email.indexOf('.') == -1){
		console.log('Email check failed. Missing .');
		return false;
	} 
	console.log('Email check passed');
	return true;

}

checkEmail('chris@hhs.nl');