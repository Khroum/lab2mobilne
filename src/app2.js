const _ = require("lodash");

const user = {
  name: "Imie",
  surname: "Nazwisko",
  allGrades: [
    {
      subjectName: "Name1",
      grades: [5, 4, 3, 5, 2],
      weight: 3
    },
    {
      subjectName: "Name2",
      grades: [3, 3.5, 2],
      weight: 1
    },
    {
      subjectName: "Name3",
      grades: [4, 3, 3.5],
      weight: 5
    }
  ]
};

const collections = [
  {},
  15,
  "hello@test.pl",
  null,
  ["aaa", "bbb", 5],
  "admin@gmail.com",
  undefined,
  "a32@yahoo.com",
  "321@a",
  "321.pl"
];

function funkcja(user) {
  let suma = 0;
  let dzielnik = 0;
  console.log(user.name + " " + user.surname + "\n");
  for (const el of user.allGrades) {
    for (const el2 of el.grades) {
      suma += el2 * el.weight;
      dzielnik += el.weight;
    }
  }
  console.log(suma / dzielnik);
}

funkcja(user);

function funkcja2(tab) {
  let arr = new Array();
  var re = /\S+@\S+\.\S+/;
  for (const el of tab) {
    if (_.isString(el) && re.test(el)) {
      arr = arr.concat(el);
    }
  }
  console.log(_.sortBy(arr));
}

funkcja2(collections);
