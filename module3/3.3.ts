{
  // type of operator

  const add = (
    param1: number | string,
    param2: number | string
  ): number | string => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    }
    else {
        param1.toString() + param2.toString()
    }
  };

  const result1 = add("2", "3")
  console.log(result1)
}
