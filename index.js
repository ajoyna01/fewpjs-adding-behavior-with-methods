// let oldFish = new Fish('George', 19);
// let newFish = new Fish('Clyde', 1);

// oldFish.name; //=> 'George'
// oldFish.age; //=> 19
// newFish.name; //=> 'Clyde'
// newFish.age; //=> 1
// By using this.name and this.age to define properties in our constructor, we can also refer to these properties within other methods of our class:

// class Fish {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayName() {
//         return `Hi my name is ${this.name}`;
//     }
// }
    
    class Cat {
        constructor(name, sex) {
            this.name = name;
            this.sex = sex;
        }
        speak() {
            return `${this.name} says meow!`;
        }
}   
    let orangeCat = new Cat('Winter', 'Male');
    let whiteCat = new Cat('Loki', 'Male');

    orangeCat.name;
    orangeCat.sex;

    whiteCat.name;
    whiteCat.sex;
  
  
  class Dog {
        constructor(name, sex) {
            this.name = name;
            this.sex = sex;
        }
        speak() {
            return `${this.name} says woof!`;
        }
  }
    let bigDog = new Dog('Bulldozer', 'Male');
    let smallDog = new Dog('Cheeto', 'Female');

    bigDog.name;
    bigDog.sex;

    smallDog.name;
    smallDog.sex;
  
  class Bird {
        constructor(name, sex) {
            this.name = name;
            this.sex = sex;
        }
        speak() {
            if (this.sex === "male") {
               return `It's me! ${this.name}, the parrot!`; 
            }
            
            
            else {
                return `${this.name} says squawk!`;
            }
        }
  }

    let redBird = new Bird('Sally', 'female');
    let blueBird = new Bird('Pablo', 'male');
    
    redBird.name;
    redBird.sex;

    blueBird.name;
    blueBird.sex;

