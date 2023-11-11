

{

    // type alias 
    // type alias can also be used for primitive type

type user1 = {
    name: string ;
    age: number;
}

type rollNumber = number;
type userWithRole = user1 & {role: string}
const user: userWithRole = {
    name: "John",
    age: 12,
    role: "admin"
    }
// interface 
// interface start with {} , so we can not declare primitive types through this 
// interface user2{
//     name: string;
//     age: number;
// }
// interface userWithRole2 extends user2 {
//     role: string;
// }
// const user2 : userWithRole2 = {
// name: "money",
// age: 12,
// role: "manager"

// }

interface user2 {
    name: string;
    age: number;

}

// const user2 = {
//     name: "tofayel",
//     age: 34

// }

interface userWithRole3 extends user2 {
    role: string;
}

const user2 : userWithRole3 = {
   name: "abandon",
   age: 35,
   role: "director" 
}


type Roll1 = number[] ;
const rollNumber : Roll1 = [1, 2, 3, 4]

interface Roll2 {
    [index: number]: number;
}







}