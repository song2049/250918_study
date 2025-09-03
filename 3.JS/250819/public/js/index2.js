const Person2 = {
    name: "주병현",
    age: 30,
    ability : {
      teaching: 100,
      Leading: 100,
      Follow: 100 
    },
    "Content-Type": "text/javascript"
}

// const clone = { ...Person2, age: 25 };
const clone = { ...Person2, ability: { ...Person2.ability } };

// const clone = {
//     name: "주병현",...
// }

console.log(clone === Person2);

console.log(clone.ability === Person2.ability);

console.log(clone);