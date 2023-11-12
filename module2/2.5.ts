{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");

  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  const resGeneric = createArrayWithGenerics<boolean>(true);
  type User = { id: number; name: string };

  const resGenericWithObj = createArrayWithGenerics<User>({
    id: 1234,
    name: "Bangladesh",
  });

  console.log(resGenericWithObj);
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level web Development";

    return {
      ...student,
      course,
    };


  };

  const student1 = addCourseToStudent<{id: number; name: string}>({id: 123456, name: "Bangladesh"})
}
