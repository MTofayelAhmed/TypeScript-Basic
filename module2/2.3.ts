{
  // generic type

  //

  type GenericType <param>= Array<param>

  const rollNumber: GenericType<number>= [1, 2, 3, 4]
  

//   const rollNumber: number[] = [1, 2, 3, 4];
  const mentors: GenericType<string>= ["x", "y", "z"];



//   const mentors: string[] = ["x", "y", "z"];

  const isMarried : GenericType<boolean>= [true, false]

//   const isMarried :boolean[]= [true, false]
}
