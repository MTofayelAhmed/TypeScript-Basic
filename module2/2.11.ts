{

// utility type 

type Person = {
    name : string;
    age: number ;
    email?:string;
    contactNo: string
}


type Name = Pick<Person, "name" | "age">




}