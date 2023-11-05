{
const user = {
    
    phone: "01818061209",
    FullName : {
        FirstName: "Tofayel",
        LastName: "Ahmed",
        MiddleName: "Declare"
    },
    address: "Noakhali"
}


const { FullName: {MiddleName}}= user;



// array Destructuring

const Friends = ["Rachel", "Monica", "Phebe", "Chandler", "Joey"]


const [,,bestFriends, ...rest]= Friends

console.log(bestFriends)
}