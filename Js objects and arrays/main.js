const person = {
    firstName: "Dmitry",
    lastNAme: "Soborev",
    Age: 24,
    city: "Rostov-on-Done",
    married: false,
    languages: {
        english: "B2",
        spanish: "B2",
    }
};

// console.log (person.firstName, person["lastNAme"], person.languages.english );

// for (let key in person) {
//     console.log (key, person[key]);
// }

const nums = [1, 2, 3, 4];
// console.log (nums[0]);

for (let num of nums) {
    console.log(num);
}

nums.push (5, 6, 7);
console.log (nums);