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
// type User ={
//     name: string;
//     age: number
// }

interface User {
    name: string;
    age: number;
}

const arrayObject : GenericType<User>= [
    {
        name: "tofayel",
        age: 30 },
    {
        name: "John",
        age: 40
    }
]

// generic tuple is a special type of array where we defined the order 

type genericTuple <X, Y> = [X, Y]

const manush : genericTuple <string , string> = ["Mr X", "Mrs Y"]

const user : genericTuple<number, {name: string, age: number}>= [1234, {name: "John", age: 40}]




}
