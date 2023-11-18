
  type User = {
    id: number;
    name: string;
  };

  const users: Array<User> = [
    {
      id: 1,
      name: "Tofayel",
    },

    {
      id: 2,
      name: "Selim",
    }
  ];



function  getPropertyFromArray<T, K extends keyof T > (array: T[] , key: K){
    return array[key]

}
