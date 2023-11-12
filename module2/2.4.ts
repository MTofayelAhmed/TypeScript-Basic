{
  //generic interface

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  const poorDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
    name: "Tofayel",
    computer: {
      brand: "ASUS",
      model: "bt355",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "apple",
      model: "best",
      display: "LED",
    },
  };
  const richDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
    bloodPressure: boolean;
  }> = {
    name: "Tofayel",
    computer: {
      brand: "ASUS",
      model: "bt355",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "apple",
      model: "best",
      display: "LED",
      bloodPressure: true
      
    },
  };
}
