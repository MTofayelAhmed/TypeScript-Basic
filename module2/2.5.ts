{
    // function with generics 



const createArray = (param: string): string[]=> {
return [param]
}

const res1 = createArray("Bangladesh")


const createArrayWithGenerics = <T> (param: T): T[]=> {
    return [param]
}

const resGeneric = createArrayWithGenerics<boolean>(true)
type User = {id: number; name: string}


const resGenericWithObj = createArrayWithGenerics<User>({id: 1234, name: "Bangladesh" })

console.log(resGenericWithObj)
}