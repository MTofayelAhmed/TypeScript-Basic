{
  // generic type

  //

  type GenericType <T>= Array<T>

  const rollNumber: GenericType<number>= [1, 2, 3, 4]
  

//   const rollNumber: number[] = [1, 2, 3, 4];
  const mentors: GenericType<string>= ["x", "y", "z"];



//   const mentors: string[] = ["x", "y", "z"];

  const isMarried : GenericType<boolean>= [true, false]

//   const isMarried :boolean[]= [true, false]
// using generic concepts , now we will do something with array of objects.


const arrayObject : GenericType<{name: string, age: number}>= [
    {
        name: "tofayel",
        age: 30,
       

    },
    {
        name: "John",
        age: 40
    }
]

const 




}
