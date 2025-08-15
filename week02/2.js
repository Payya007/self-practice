// Shallow Equality
let book1 = {
    isbn: 123456789,
    title: "JavaScript",
};

let book2 = {
    isbn: 123456789,
    title: "JavaScript",
};

function shallowEquality(object1, object2) {
    const keys1 = Object.keys(object1); 
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
}

console.log("shallow equality: " + shallowEquality(book1, book2)); // true

console.log("-----------------------");
const products = [
  { name: "laptop", category: "electronics", sales: 1500 },
  { name: "phone", category: "electronics", sales: 2000 },
  { name: "shirt", category: "clothing", sales: 800 },
  { name: "pants", category: "clothing", sales: 600 },
  { name: "book", category: "education", sales: 400 },
  { name: "mouse", category: "electronics", sales: 300 }
];


function sumSalesByCategory(data) {
  const result = {};

  for (const item of data) {
    const { category , sales } = item;

   if (result[category] == undefined){
   result[category] = sales;
   sales=0;
  }

  else{
    result[category] =result[category] + sales;
  }

  return result;
}}
