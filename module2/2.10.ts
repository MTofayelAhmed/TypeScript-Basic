{
  // mapped type

  const arrayOfNumbers: number[] = [1, 2, 3, 4];
  const arrayOfString: string[] = ["1", "2", "3", "4"];
  const mappedArrayOfString: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );
  console.log(mappedArrayOfString);

  type areaNumber = {
    height: number ;
    width: number ;
  }

  type areaString = {
    [key in keyof areaNumber ] : string 
  }










}
