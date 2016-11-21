export function isValidURL(url) {
	var expression = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
	var regex = new RegExp(expression);
	return regex.test(url);
}
