module.exports = (obj) => {
	var keys = [];
	var values = [];

	var newObj = {};

	Object.keys(obj).forEach(function (key, index) {
		keys[index] = key;
		values[index] = obj[key];
	});

	for (var i = keys.length-1; i >= 0; i--) {
		console.log(i, keys[i], values[i]);
		newObj[keys[i]] = values[i];
    	}

	return newObj;
}
