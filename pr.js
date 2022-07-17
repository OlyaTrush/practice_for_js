// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions){
//       if (potion.name === newPotion.name)
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },

 

//   updatePotionName (oldName, newName) {
//     const {potions} = this;
//     for (const potion of this.potions){
    
//       console.log(potion);
//       if (potion.name === oldName) {
//       potions.name =newName; 
      
//         this.potions.splice (oldName, 1, newName);
//       }
//     }
//       return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line

// }


// removePotion(potionName) {

//   for (const potion of this.potions){
//     if (potion.name === potionName){
//       const potionIndex = this.potions.indexOf(potionName);
//    this.potions.splice(potionIndex, 1);
//     }
//      return `Potion ${potionName} is not in inventory!`;
//   };
//  },


let users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

const getSortedFriends = users => {
  const arrayOfFriends = users.flatMap(user => user.friends)
return arrayOfFriends;
};