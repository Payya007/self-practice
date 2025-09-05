const studentScores = [
   { name:'Alice',score: 85 },
   {name : 'Bob' , score: 92},
   {name :'Charlie' ,score: 68},
   {name : 'David', score: 55},
   {name: 'Eve', score:78},
];
 function getPassingNames(studentScores){
 let  result =  studentScores.filter( studentScores => studentScores.score>70) 

 result= result.map(a => a.name.toUpperCase())
   
  return result

}


const passingNames = getPassingNames(studentScores);
console.log(passingNames);

console.log("-------------")
const students = [
  { id: 66500102, name: "Suda", gpa: 2.5 },
  { id: 66500555, name: "ada", gpa: 2.8 },
  { id: 66500589, name: "pornchai", gpa: 3.25 },
  { id: 66500104, name: "Pornsak", gpa: 3.8 },
]

students.sort((std,std2) =>  std.name.localeCompare( std2.name)) 

console.log(students)