{

// utility type 

type Person = {
    name : string;
    age: number ;
    email?:string;
    contactNo: string
}


type Name = Pick<Person, "name" | "age">


// Omit 

type contactInfo = Omit<Person, "name"| "age">



// required 
type mustInfo = Required<Person>
// partial
type personPartial =  Partial<Person>

// readOnly

type PersonReadonly = Readonly<Person>

const person1 : PersonReadonly = {
    name: "John",
    age: 12,
    contactNo: "01684163259",
    email: "john@gmail.com"
}











}