// returns false if OIB is invalid, true otherwise
function oibCheck(oibCode) {
	var checkDigit, num;

	var code = oibCode.toString();

	if (code.length === 13 && code.substr(0, 2).toUpperCase() === 'HR') {
		code = code.substr(2, 11);
	} else if (code.length !== 11) {
		return false;
	}

	var numCheck = parseInt(code, 10);
	if (isNaN(numCheck)) {
		return false;
	}

	num = 10;
	for (var i = 0; i < 10; i++) {
		num = num + parseInt(code.substr(i, 1), 10);
		num = num % 10;
		if (num === 0) {
			num = 10;
		}
		num *= 2;
		num = num % 11;
	}

	checkDigit = 11 - num;
	if (checkDigit === 10) {
		checkDigit = 0;
	}
	
	return parseInt(code.substr(10, 1), 10) === checkDigit;
}