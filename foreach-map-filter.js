/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
	// return arr.map(function(num) {
	// 	return num * 2;
	// });
	//shorter code using arrow function
	return arr.map(num => num * 2);
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
	return arr.filter(num => num % 2 === 0);
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
    //words[1][words[1].length-1]

*/
function showFirstAndLast(arr) {
	return arr.map(word => word[0] + word[word.length - 1]);
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
	const newArr = arr;
	for (let obj of newArr) {
		obj[key] = value;
	}
	return newArr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
	let strArr = Array.from(str.toLowerCase());
	let vowelsObject = {};
	const numberOfA = strArr.filter(function(val) {
		return val.includes('a');
	}).length;
	if (numberOfA > 0) vowelsObject['a'] = numberOfA;
	const numberOfE = strArr.filter(function(val) {
		return val.includes('e');
	}).length;
	if (numberOfE > 0) vowelsObject['e'] = numberOfE;
	const numberOfI = strArr.filter(function(val) {
		return val.includes('i');
	}).length;
	if (numberOfI > 0) vowelsObject['i'] = numberOfI;
	const numberOfO = strArr.filter(function(val) {
		return val.includes('o');
	}).length;
	if (numberOfO > 0) vowelsObject['o'] = numberOfO;
	const numberOfU = strArr.filter(function(val) {
		return val.includes('u');
	}).length;
	if (numberOfU > 0) vowelsObject['u'] = numberOfU;
	//console.log(numberOfA, numberOfE, numberOfI, numberOfO, numberOfU);
	return vowelsObject;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
	return arr.map(num => num * 2);
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
	return arr.map((num, idx) => num * idx);
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
	return arr.map(val => val[key]);
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
	return arr.map(val => `${val['first']} ${val['last']}`);
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
	return arr.filter(val => val[key]);
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
	const result = arr.indexOf(searchValue);
	if (result === -1) return undefined;
	else return arr[result];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
    findInObj([{'a':'first object'},{'b':2, 'a':'second object'}],'a',1)
    */

function findInObj(arr, key, searchValue) {
	let result;
	let resultFound = false;
	arr.forEach((obj, idx) => {
		if (obj[key] === searchValue && !resultFound) {
			result = idx;
			resultFound = true;
		}
	});
	if (resultFound) return arr[result];
	else return undefined;
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
	let strArr = Array.from(str.toLowerCase());
	let newString = [];
	for (i = 0; i < strArr.length; i++) {
		if (
			strArr[i] === 'a' ||
			strArr[i] === 'e' ||
			strArr[i] === 'i' ||
			strArr[i] === 'o' ||
			strArr[i] === 'u'
		) {
			//do nothing
		} else newString += strArr[i];
	}

	return newString;

	//return strArr.splice(strArr.indexOf('a'), 1);

	// strArr.filter(function(val) {
	// 	return val.includes('a');
	// })
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
	return arr.filter(num => num % 2 !== 0).map(num => num * 2);
}
