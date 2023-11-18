{
  // object oriented programming

  class Animal {
//  public   name: string;
// public species: string;
//  public   sounds: string;



    constructor(public name : string, public  species : string, public sounds : string){
        // this.name = name;
        // this.species = species;
        // this.sounds = sounds ;
    }

    makeSound(){
        console.log(`the dog is barking ${this.sounds}`)

    }




  }


  const dog = new Animal("shepard", "dog", "ghew ghew")

  dog.makeSound()
}
