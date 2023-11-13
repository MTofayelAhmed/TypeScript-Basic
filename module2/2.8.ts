{
  // promise

  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const resData = await data.json();
    return resData;
  };

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";

      if (data) {
        resolve(data);
      } else {
        reject(data);
      }
    });
  };

  //   create function

  const resolveData = async (): Promise<string> => {
    const data: string = await createPromise();
    return data;
  };

  resolveData();
}
