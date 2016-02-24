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

value += newstr;

if (value>1954){
	value = 56;

  } else if (value == 1852){
  	value = 19;

} else {
	value = 91;
}

i = 11;
while (i>0){
	value++;
	i--;
}

var cutstring = function(val){

	val =val.toString();

	if(val.length>1){


	var stringcut = val.substring(1,val.length);

	val = stringcut;

    }
  // console.log("stringcut = " + stringcut);



  return val;

}


value =cutstring(value);



//console.log("stringcut ="+stringcut);
//console.log(newstr);
//console.log(myArray);
console.log(value);



