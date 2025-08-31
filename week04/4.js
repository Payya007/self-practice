const employees = [
  {
    id: "e1001",
    firstname: "Somchai",
    lastname: "Jaidee",
  },
  {
    id: "e1002",
    firstname: "Pornchai",
    lastname: "Deejai",
  },
  {
    id: "e1005",
    firstname: "Suda",
    lastname: "Rakdee",
  },
]
 
const fullname = employees.map(emp =>  emp.firstname + " " + emp.lastname )
console.log(fullname)  
const result = fullname.filter(name => {
  name.toLowerCase().includes("jai") , 
  console.log(name)
})

console.log(result)   
console.log("-------------")

const carts = [
  { productId: 1002, price: 10, amount: 5 },
  { productId: 2005, price: 100, amount: 2 },
  { productId: 5001, price: 5, amount: 4 },
]
//net price = total price * VAT 7%
let total = 0 ;
const result2  = carts.reduce((total ,product )=>  total + product.price * product.amount ,0);
console.log(result2)
const netPrice = result2 * 1.07 ;
console.log(netPrice)