var Observable = require("FuseJS/Observable");

var originalItems = Observable("A", "B", "C");

module.exports = {
	items: originalItems.map(function(item) {
		return item + " mapped from JS!";
	})
};