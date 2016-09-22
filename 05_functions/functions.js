// Functions.js
function concatString(strings) {
	var args=[].slice.call(arguments);
	return args.join("");
};
function yourFunctionRunner() {
	var args=[].slice.call(arguments);
	return args.map(func => func()).join("");
};
function makeAdder(num) {
	return (function(x){return x+num})
};
function once(func) {
	var runned=false;
	return function() {
		if (!runned) {
			runned=true;
			func();
		}
	} 
}
function createObjectWithClosures() {
	var obj={};
	var num=0;
	obj.oneIncrementer=function(){num++};
	obj.tensIncrementer=function(){num+=10};
	obj.getValue=function(){return num};
	return obj
}