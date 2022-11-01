function ageSort(users) {
  let res = [];
  let count = {};
  for (let i = 0; i < users.length; i++) {
    count[i] = users[i].age;
  }
  //count = { '0': 30, '1': 25, '2': 32, '3': 55 }
}

// function oddEvenSort(arr) {
//   // Your code here
// }

// function validAnagrams(s, t) {
//   // Your code here
// }

// function reverseBaseSort(arr) {
//   // Your code here
// }

// function frequencySort(arr) {
//   // Your code here
// }

const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Engineer",
    friends: [2, 3, 4],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    occupation: "Data Scientist",
    friends: [1, 4],
  },
  {
    id: 3,
    firstName: "Mary",
    lastName: "Smith",
    age: 32,
    occupation: "UX Designer",
    friends: [2, 4],
  },
  {
    id: 4,
    firstName: "James",
    lastName: "Johnson",
    age: 55,
    occupation: "CTO",
    friends: [1, 2, 3],
  },
];

ageSort(users);

// module.exports = [
//   // oddEvenSort,
//   // validAnagrams,
//   // reverseBaseSort,
//   // frequencySort,
//   ageSort,
// ];
