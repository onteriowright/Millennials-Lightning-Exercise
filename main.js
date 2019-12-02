const age = 30;
const timeSpan = 25;
const futureAge = age + timeSpan;
const name = "Biff";
const generationStereotype = "millenial";
const dadJoke = "milleni-old";

const completeSentence = `Hi. My name is ${name}, and I'm ${age} years old. They say that makes me a ${generationStereotype}. In ${timeSpan} years I'll be ${futureAge}! I guess that means I'll be a ${dadJoke} then. Ha ha`;

console.log(completeSentence);

//write a function that accepts the foodArray as an argument and returns a new array containing only the foods that begin with the letter a and the letter t
const foodArray = [
  "pizza",
  "anchovies",
  "burgers",
  "artichokes",
  "muffins",
  "french fries",
  "apples",
  "tamales",
  "curry",
  "tomatoes",
  "corn",
  "tamarind"
];

const myFavoriteFoods = array => {
  let newArray = [];
  array.forEach(item => {
    if (item.startsWith("a") || item.startsWith("t")) {
      newArray.push(item);
    }
  });
  return newArray;
};

const favoriteFoods = myFavoriteFoods(foodArray);
console.log(favoriteFoods);
