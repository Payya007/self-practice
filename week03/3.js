function getFreqOfWords(setence){

     let word = setence.toLowerCase().split(" ")
     let obj={}
     for (let i=0; i< word.length; i++)
     {
        
        // console.log(word[i])
        if(obj[word[i]]){
           obj[word[i]]+=1
        }
        else {
            obj[word[i]]=1
        }
     }
     return obj

}
console.log(getFreqOfWords('Today is present and present is your gift'))


function sum(...a) {
let result = 0
for (let i of arguments) {
    result = result + i
}
return result
}
console.log(sum())
console.log(sum(1))
console.log(sum(1,2))
console.log(sum(1,2,3,5))



function countFrequency(...args) {
  return args.reduce((acc, cur) => {
    if (acc[cur] === undefined) {
      acc[cur] = 1   
    } else {
      acc[cur] = acc[cur] + 1 
    }
    return acc
  }, {}) 
}

console.log(countFrequency("a", "b", "a", "c", "b", "a"))
// { a: 3, b: 2, c: 1 }
