{

    // generic constraints with keyof operator

// type vehicle = {
//     bike : string;
//     car: string;
//     ship: string;
// }

// type owner = "bike" | "car" | "ship"



// type owner2 = keyof vehicle

// const person1 : owner = ""

const user = {
    name: "JOHN",
    age: 20,
    address: "ctg"}


    const getObjectKey= <X, Y extends keyof X>(obj: X, key: Y)=> {
        return obj[key]
    }


    const result2 = getObjectKey(user, "name")





 




}