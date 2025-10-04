function greet(name){
    console.log(`Hello ${name}`);
}
greet("Sehajdeep");

function makingTea(typeOfTea){
    return`Making ${typeOfTea}`;
}
let teaOrder=makingTea("Green Tea");
console.log(teaOrder);

function OrderTea(typeOfTea){
    function confirmOrder(){
        return`order placed for chai`;
    }
    return confirmOrder();
}

console.log(OrderTea());
