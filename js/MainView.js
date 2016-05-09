var Observable = require("FuseJS/Observable");

var originalItems = Observable("A", "B", "C");

module.exports = {
	items: originalItems.map(item => item + " mapped from ES2015!")
};