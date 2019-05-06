module.exports = function(input){
	if(typeof(input)==="string")
		return input.split("").reverse().join("");
	console.error("wrong type given in module: ", typeof(input));
}