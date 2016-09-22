function doubler(num) {
	return 2*num
}

function map(arr, fun) {
	var newarr=[];
	arr.forEach(function(element) {
		newarr.push(fun(element))
	});
	return newarr
}

function filter(arr, fun) {
	var newarr=[];
	arr.forEach(function(element) {
		if (fun(element)) {
			newarr.push(element)
		}
	});
	return newarr
}

function contains(collection, value) {
	bool=false;
	for (i in collection) {
		if (collection[i]==value) {
			bool=true;
		}
	}
	return bool
}

function countWords(sentence) {
	return sentence.split(" ").length
}

function reduce(arr, startingPoint, fun) {
	var arrnew=JSON.parse(JSON.stringify(arr));
	for (var index=startingPoint; index<arrnew.length-1; index++) {
		arrnew[index+1]=fun(arrnew[index], arrnew[index+1])
	};
	return arrnew[arr.length-1]
}

function countWordsInReduce(a, b) {
	return countWords(a) + countWords(b)
}

function sum(arr) {
	return reduce(arr, 0, function(x,y) {
		return x+y
	})
}

function every(arr, fun) {
	if (arr.length!=0) {
		return reduce(arr, 0, function(a,b) {
		if ((typeof(a)!="boolean" || a!=false) && (typeof(a)=="boolean" || fun(a)!=false) && fun(b)!=false) {
			return true
		}
		else {
			return false
		}
	});
	}
	else {
		return true
	}
}

function any(arr, fun) {
	if (arr.length!=0) {
		return reduce(arr, 0, function(a,b) {
		if ((typeof(a)=="boolean" && a==true) || (typeof(a)!="boolean" && fun(a)==true) || fun(b)==true) {
			return true
		}
		else {
			return false
		}
	});
	}
	else {
		return false
	}
}