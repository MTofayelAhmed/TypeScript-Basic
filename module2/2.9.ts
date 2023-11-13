{
  // conditional type

  type a1 = number;
  type a2 = undefined;

  // type a3 = a1 extends number  ? true  : false (this is conditional type )

  type a4 = a1 extends null ? true : a2 extends string ? string : any;

  type Sheik = {
    bike: string;
    car: string;
    plane: string;
    ship: string;
  };
}
