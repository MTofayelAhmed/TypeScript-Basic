{

// type assertions
let anything : any;
anything = "next level web development";
anything = 222;
(anything as number )

//  another example 

const kgToGm = (value : number | string) : number | string | undefined=>{
    if(typeof value ==="string" ){
        const convertedValue = parseFloat(value)*1000;
        return `the converted value  is ${convertedValue}`
    }

    if (typeof value === "number" ){
        return value*1000;

    }
}

const result1 = kgToGm(1000) as number;

const result2 = kgToGm("1000")as string;
























}