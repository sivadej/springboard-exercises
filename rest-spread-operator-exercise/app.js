// //Rest/Spread Operator Exercise
// console.log('appjs init');

// function displayArguments(...restOfArgs) {
// 	console.log('The first arg is', restOfArgs[0]);
// 	return `${restOfArgs.length} arguments passed in`;
// }

// //displayArguments(1, 2, 3);

// function sumMany(...nums) {
// 	return nums.reduce((a, b) => a + b, 0);
// }

// //console.log(sumMany(5, 10));
// //console.log(sumMany(10, 10, 10, 10, 10));

// function oneOrMore(first, ...more) {
// 	console.log(first, more);
// 	more.forEach(arg => console.log(arg));
// }
// //oneOrMore(1, 2, 3, 4, 5);

// function takesFour(one, two, three, four) {
// 	console.log(one, two, three, four);
// }
// const names = ['beau', 'boy', 'bank', 'bomb'];

// //takesFour(...names);

// const nums = [1, 2, 3];
// const newNums = [...nums, 4, 5, 6];
// const newNumsFirst = [4, 5, 6, ...nums];
// const newNumsInMiddle = [0, ...nums, 4];

// // console.log(nums);
// // console.log(newNums);
// // console.log(newNumsFirst);
// // console.log(newNumsInMiddle);

// const whiskeyTheDog = {
// 	name: 'whiskey',
// 	species: 'canine',
// 	cool: true
// };

// // const gandalfTheDog = { ...whiskeyTheDog, name: 'Gandalf' };
// // const whiskeyCopy = { ...whiskeyTheDog };
// // console.log(gandalfTheDog);
// // console.log(whiskeyCopy);

// let odds = [1, 3, 5];
// let evens = [2, 4, 6];
// let collection = [odds, evens];
// let copy = [...collection];

//refactor the following using rest/spread/arrow

//// function filterOutOdds() {
////     var nums = Array.prototype.slice.call(arguments);
////     return nums.filter(function(num) {
////       return num % 2 === 0
////     });
////   }

function filterOutOdds(...nums) {
	return nums.filter(num => num % 2 === 0);
}

// findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

// findMin(1, 4, 12, -3); // -3
// findMin(1, -1); // -1
// findMin(3, 1); // 1

function findMin(...nums) {
	return nums.reduce((a, b) => (a < b ? a : b));
}

// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

function mergeObjects(obj1, obj2) {
	return { ...obj1, ...obj2 };
}

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

function doubleAndReturnArgs(arr, ...nums) {
	const newArray = [...arr];
	const doubledArgs = nums.map(num => num * 2);
	newArray.push(...doubledArgs);
	return newArray;
}

// Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

/** remove a random item and return list without that item. */

//accept array, generate random idx based on arr length,
//remove item at index using splice. OR filter?
// filter(val,index) index === random of array length
function removeRandom(items) {
	let randomIndex = Math.floor(Math.random(1) * items.length);
	return items.filter(function(val, i) {
		return i !== randomIndex;
	});
}
function removeRandom2(items) {
	let idx = Math.floor(Math.random() * items.length);
	return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

/** Add every item in items2 to items1. */

const extend = (items1, items2) => [...items1, ...items2];

/** Add a new key/val to an object. */

function addKeyVal(obj, key, val) {
	return { ...obj, [key]: val };
}

const addKeyVal2 = (obj, key, val) => ({ ...obj, [key]: val });

/** Remove a key from an object. */

function removeKey(obj, key) {
	({ [key]: undefined, ...obj } = obj);
	return obj;
}

/** Combine two objects. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Update an object, changing a key/value. */

//function update(obj, key, val) {}

const update = (obj, key, val) => ({ ...obj, [key]: val });
