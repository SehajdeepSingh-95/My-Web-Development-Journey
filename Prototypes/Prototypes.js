let computer={cpu:12};
let lenovo={screen:"HD",
    _proto_:computer,
};
let tomHardware={};

console.log(`lenovo`,lenovo._proto_);

let genericCar={tyres:4};

let tesla={
    driver:"AI",
}

Object.setPrototypeOf(tesla,genericCar);

console.log(tesla);
console.log(tesla.driver);
console.log(`tesla`,genericCar);
console.log(tesla.tyres);

console.log(tesla.hasOwnProperty("driver"));
console.log(tesla.hasOwnProperty("tyres"));

console.log(`tesla`, Object.getPrototypeOf(tesla));
