function ageSort(users) {
  let res = [];
  let count = {};

  for (let i = 0; i < users.length; i++) {
    count[users[i].age] = i;
    res.push(users[i].age);
  }
  res.sort();
  let output = []
  for (let i = 0; i < res.length; i++) {
    output.push(users[count[res[i]]])
  }
  console.log(output)
  return output;
}

function oddEvenSort(arr) {
  // Your code here
}

function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

// const users = [
//   {
//     id: 1,
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     occupation: "Software Engineer",
//     friends: [2, 3, 4],
//   },
//   {
//     id: 2,
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 25,
//     occupation: "Data Scientist",
//     friends: [1, 4],
//   },
//   {
//     id: 3,
//     firstName: "Mary",
//     lastName: "Smith",
//     age: 32,
//     occupation: "UX Designer",
//     friends: [2, 4],
//   },
//   {
//     id: 4,
//     firstName: "James",
//     lastName: "Johnson",
//     age: 55,
//     occupation: "CTO",
//     friends: [1, 2, 3],
//   },
// ];


module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
