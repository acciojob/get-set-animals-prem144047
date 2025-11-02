//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	  get species() {
        return this.species;
    }
	makesound(){
		console.log('The ${this.species} make a sound');
	}
}

class Dog extends Animal {
    bark() {
        console.log("woof");
    }
}

class Cat extends Animal {
	purr() {
        console.log("purr");
    }
}
const myCat = new Cat("Siamese");
myCat.makeSound(); // Expected Output: The Siamese makes a sound
myCat.purr();      // Expected Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Expected Output: The Golden Retriever makes a sound
myDog.bark(); 

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
