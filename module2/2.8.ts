{
  // promise

  const createPromise = (): Promise<string>  => {
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

const resolveData = async ()=> {
    const data = await createPromise()
    return data 
}

resolveData()









}
