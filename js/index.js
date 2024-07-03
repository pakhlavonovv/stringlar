// 1 misol (nums = [4,5,6,7,0,1,2], target = 0 => mana shu nums array ichida target teng bo'lgan qiymatning nechinchi indexda turganini aniqlang rasult=>[ index ])

// let arr = [4,5,6,7,0,1,2]
// for(let i = 0; i < arr.length; i++){
//     console.log(`${arr[4]}`)
// }

// 2 misol (nums = [1,3,2,4,5,6,99,102], target = 5, o'sish va kamayish tartibli array ichida target qiymati array ichida nechinchi qiymatda turganini aniqlang)

// let nums = [1,3,2,4,5,6,99,102]
// nums.sort(function(a,b){return a - b})
// console.log(nums)
// for(let i = 0; i < nums.length; i++){
//     console.log(nums[`4`])
// }

// 3 misol (ixtiyoriy object yaratilsin va key va valuesi kamida 4 ta bo'lsin 1. key larini ro'yxati chiqarilsin 2. value larining ro'yxati chiqarilsin)

// let person = {
//     name: "Ali",
//     age: 25,
//     city: "Toshkent",
//     profession: "Dasturchi"
// };

// let keys = Object.keys(person);
// console.log("Keylar ro'yxati:", keys);

// let values = Object.values(person);
// console.log("Qiymatlar ro'yxati:", values);

// 4 misol (2 ta 4 tadan element dan mavjud bo'lgan object yaratilsin 1. ularning birlashmasi topilsin 2. birlashmasining keyi topilsin 3. birlashmasining valuesi topilsin 4. birlashmasining valuelarining yig'indisi topilsin )

// Ikkita ob'ektni yaratish
// let object1 = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40
// };

// let object2 = {
//     e: 50,
//     f: 60,
//     g: 70,
//     h: 80
// };

// let mergedObject = { ...object1, ...object2 };
// console.log("Birlashgan ob'ekt:", mergedObject);

// let mergedKeys = Object.keys(mergedObject);
// console.log("Birlashgan ob'ektning keylari:", mergedKeys);

// let mergedValues = Object.values(mergedObject);
// console.log("Birlashgan ob'ektning qiymatlari:", mergedValues);

// let sumOfValues = mergedValues.reduce((sum, value) => sum + value, 0);
// console.log("Qiymatlar yig'indisi:", sumOfValues);

// 5 misol
// function sumOfNumbers(...numbers) {
//     let sum = numbers.reduce((total, num) => total + num, 0);
//     return sum;
// }

// console.log(sumOfNumbers(1, 2, 3, 4));   


// 6 misol
// let numbers = [3, 5, 7, 8, 10];

// function findIndices(array, value) {
//     let sortedAscending = [...array].sort((a, b) => a - b);
//     let sortedDescending = [...array].sort((a, b) => b - a);

//     return {
//         ascendingIndex: sortedAscending.indexOf(value),
//         descendingIndex: sortedDescending.indexOf(value)
//     };
// }

// let valueToFind = 7;
// let indices = findIndices(numbers, valueToFind);
// console.log(`O'sish tartibida ${valueToFind} soni indeksda:`, indices.ascendingIndex);
// console.log(`Kamayish tartibida ${valueToFind} soni indeksda:`, indices.descendingIndex);
