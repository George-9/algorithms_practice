#!/usr/bin/env node

const calcPoints = (ops = []) => {
	let nums = [];
	ops.forEach((el, i) => {
		let l = nums.length;

		if(parseInt(el)) nums.push(parseInt(el));
		if(el === "C") nums.pop();
		if(el === "+") nums.push(nums[l - 1] + nums[l - 2])
		if(el === "D") nums.push(nums[l - 1] * 2);
	});

	let total = 0
	return nums.reduce((a, b) => a + b, total);
}

let p = calcPoints(["5", "2", "C", "D", "+"]);
console.log(p);

let sum = calcPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])
console.log(sum)

let l = calcPoints(["1", "C"]);
console.log(l);
