// let animal = {
//     name : "dog",
//     leg: 4,
//     eyes: 2,
//     colour: "brown",
//     hair: function(){
//         console.log(`hi, my name is  ${this.name}`);
//     },
// };
// console.log(animal.name);
// console.log(animal['leg']);
// animal.colour = "black";
// animal["eyes"] = 7;
// console.log(animal.colour);
// console.log(animal.eyes);
// animal.hair();
// console.log(animal.hair);



let circle = {
    radius : 2,
    location : {
        x : 1,
        y :3,

    }, 
    colour: "yellow",
    diameter : function(){
        console.log(`location divided by radius will give ${this.radius}`);
    },
};

console.log(circle.location["y"]);
console.log(circle.location.x);
circle.diameter();


let number = 20;

function increase(number){
    console.log(`lets wait for the increase in ${this.number}`);
}
increase(number);

console.log(increase(number));
console.log(number);

