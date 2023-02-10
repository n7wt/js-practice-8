// 1.
const arr_1 = [101, 202, 303, 404, 505];
const arr_2 = [606, 707, 808, 909];

const superArr = arr_1.concat(arr_2);
console.log(superArr);
/////////////////////////////////////

// 2.
console.log(Math.min(...superArr));
/////////////////////////////////////

// 3.
let obj = {
  width: 300,
  height: 550,
};
/////////////////////////////////////

// 4.
let obj2 = {
  ...obj,
  area: function () {
    return this.width * this.height;
  },
};

console.log(obj2.area());
/////////////////////////////////////

// 5.
function sumNumbers(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sumNumbers(30, 70, 50));
/////////////////////////////////////

// 6.
let num = 0;
while (num < 3) {
  console.log(`5: ${num}°`);
  num++;
}

/////////////////////////////////////

// 7.
let num1 = 0;
while (num <= 10) {
  console.log(num);
  num++;
}
/////////////////////////////////////
