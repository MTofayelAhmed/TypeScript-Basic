{
  // type 

  type alphaNumeric = number | string
  const add = (
    param1: alphaNumeric,
    param2: alphaNumeric,
  ): alphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    }
    else {
     return   param1.toString() + param2.toString()
    }
  };

  const result1 = add("2", "3")
  console.log(result1)
// in guard


type NormalUser = {
    name: string,
}

type AdminUser = {
    name: string,
    role: "admin"
} 

const getUser = (user: AdminUser | NormalUser)=>{
    if ("role" in user){
        console.log(`my name is ${user.name} and my role is ${user.role}`)
    }
    else {
        console.log(`my name is ${user.name } `)
    }
}













}
