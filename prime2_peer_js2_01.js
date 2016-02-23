var value = 64;

if(value >= 10){
	value += 9;
} else {
	value -= 5;
}

value += "28";

var myArray = [];

for(var i = 0; i < value.length; i++){
	myArray.push(value.charAt(i));

}

myArray.pop();

myArray.shift();

// console.log(myArray.length);

var newstr = "";

for(i = myArray.length - 1; i >= 0; i--){
	// console.log(myArray[i]);
	newstr += myArray[i];
}

newstr = parseInt(newstr);
value = parseInt(value);

console.log(newstr);
console.log(myArray);
console.log(value);