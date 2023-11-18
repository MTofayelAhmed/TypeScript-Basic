{
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound (){
        console.log(`i am making sound`)
    }
  }


  class Dog extends Animal {
   constructor(name: string, species: string){
    super(name, species)
   } 

   makeBark(){
    console.log("I am barking ")
   }
  }

  class Cat extends Animal {
    constructor(name: string, species: string){
        super(name, species)
    }
makeMeaw(){
    console.log("i am meawing")
}

  }
const dog = new Dog("Dog Bhai", "Dog")
const cat = new Cat ("Cat Bhai", "Cat")



























}

