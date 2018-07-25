function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName; //This is a constructor that can help generate multiple items
  this.age = age; //from this blueprint

  this.getCompleteName = () => {
    //getCompleteName becomes a method of this function
    return `${this.firstName} ${this.lastName}`;
  };
}
//Below, any objects we create based on the Person constructor
//should also have the new method getStatistics added to it.
//When using the prototype property to add new methods to a constructor,
//you must declare the function keyword, you cannot use an anonymous function syntax
Person.prototype.getStatistics = function() {
  return `This person's name is ${this.firstName} ${this.lastName}, and he is ${
    this.age
  } years old`;
};

// Create a new person object
let mother = new Person("Maude", "Simard", 38);
let father = new Person("Tim", "Ajani", 65);
console.log(mother);
console.log(mother.getCompleteName());
console.log(father.getStatistics());

const firstInteger = 4;
console.log(firstInteger);
const secondInteger = "5";
console.log(parseInt(secondInteger));
console.log(firstInteger + secondInteger);

function getArea(length, width) {
  let area;
  //    length = 4;
  //     width = 5;
  area = length * width;
  console.log(area);
  return area;
}
getArea(7, 5);

let europe = ["Bulgaria", "Slovenia", "Andorra", "Finland", "Latvia", "Wales"];
let asia = ["Laos", "Vietnam", "Indonesia", "New Caledonia", "Fiji", "Tahiti"];

console.log(asia[2]);

const continent = [
  "Zambia",
  "Angola",
  "Mozambique",
  "Gabon",
  "Djibouti",
  "Western Sahara"
];

for (let africa of continent) {
  africa = africa.substr(0, 1).toLowerCase() + africa.substr(1);
  console.log(africa);
  // This sets the first letter of everything item in the array toLowerCase
}

functionGame = () => {
  let polynesia = [];
  if (asia.length > 7) {
    polynesia.push(asia[2]);
   
  } else {
    asia.join(' ');
  }
  console.log(asia)
};

functionGame()

countryInfo = [
    {
      name: "Burkina Faso",
      capital: "Ouagadougou",
      population: 1.5
    },
    {
      name: "Bhutan",
      capital: "Thimphu",
      population: 26000
    },
    {
      name: "Mongolia",
      capital: "Ulanbatuur",
      population: 2.5001
    },
    {
      name: "Paraguay",
      capital: "Asuncion",
      population: "Unknown"
    },
    {
      name: "Liechtenstein",
      capital: "Vaduz",
      population: 15824
    },
    {
      name: "Oman",
      capital: "muscat",
      population: 357186
    }
  ];

  for (let i=0; i < countryInfo.length; i++) {
    console.log(countryInfo[i]['name'])
    if( countryInfo[i].capital) {
      console.log(countryInfo[i].capital[0].toLowerCase())
      //Find the first letter of every index in the array and switch to lower case
    } else {
      return null;
    }
  }

