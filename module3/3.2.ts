{
  // inheritance

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(NumOfHour: number) {
      console.log(`${this.name} slept for ${NumOfHour} hours.`);
    }
  }



  class Student extends  Parent{
  

    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }


  }

  const student1 = new Student("Tofayel", 20, "Dhaka")
  





  class Teacher extends Parent {
   
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
        super(name, age, address)
    
      this.designation = designation;
    }



    TakeClasses(NumOfClasses: number) {
      console.log(`${this.name} takes  ${NumOfClasses} classes`);
    }
  }


  const teacher = new Teacher ("porimol", 40, "Dhaka", "professor")

  teacher.TakeClasses(20)
}
