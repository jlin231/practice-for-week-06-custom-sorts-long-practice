function ageSort(users) {
  let res = [];
  let count = {};

  for (let i = 0; i < users.length; i++) {
    count[users[i].age] = i;
    res.push(users[i].age);
  }
  res.sort();
  let output = [];
  for (let i = 0; i < res.length; i++) {
    output.push(users[count[res[i]]]);
  }

  return output;

  //users.sort((a, b) => a.age - b.age)
}

function oddEvenSort(arr) {
  arr.sort((a, b) => {
    if (a % 2 === 1 && b % 2 === 0) return -1;

    if (a % 2 === 0 && b % 2 === 1) return 1;

    return a - b;
  });

  return arr;
}

function validAnagrams(s, t) {
  if (s.length !== t.length) return false;
  let sSplit = s.split("");
  let tSplit = t.split("");
  let str1 = sSplit.sort().join("");
  let str2 = tSplit.sort().join("");

  if (str1 === str2) return true;
  else return false;
}

function reverseBaseSort(arr) {
  arr.sort((a, b) => {
    if (String(a).length > String(b).length) {
      return -1;
    }
    if (String(a).length < String(b).length) {
      return 1;
    }
    return a - b;
  });
  return arr;
}

function frequencySort(arr) {
  let count = {};

  arr.forEach((el) => {
    if (count[el] === undefined) count[el] = 1;
    else count[el]++;
  });

  arr.sort((a, b) => {
    if (count[a] > count[b]) {
      return 1;
    }
    if (count[a] < count[b]) {
      return -1;
    }
    return b - a;
  });
  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
