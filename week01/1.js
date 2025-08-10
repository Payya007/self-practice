/*
เขียนฟังก์ชัน removeDuplicates(arr) ที่รับพารามิเตอร์เป็นอาเรย์ของตัวเลข arr
ฟังก์ชันจะต้องคืนอาเรย์ใหม่ที่ ตัดเลขที่ซ้ำออก โดยเลขแต่ละตัวจะเก็บไว้แค่ครั้งแรกที่เจอเท่านั้น และรักษาลำดับเดิมตามในอาเรย์ต้นฉบับ

ตัวอย่าง

removeDuplicates([1, 2, 2, 3, 4, 3, 5]);
// คืนค่า [1, 2, 3, 4, 5]

removeDuplicates([7, 7, 7, 7]);
// คืนค่า [7]

removeDuplicates([5, 3, 4, 5, 3, 1]);
// คืนค่า [5, 3, 4, 1]
*/
function removeDuplicates(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 3, 5]));

console.log("----------------------------------")

function removeDuplicatesIgnoreCase(arr) {
  const seen = new Set();
  const result = [];

  for (const word of arr) {
    const w = word.trim().toLowerCase();
    if (!seen.has(w)) {      // ถ้ายังไม่เคยเจอ
      seen.add(w);         // เก็บผลลัพธ์
      result.push(word);
    }
  }
  return result;
}

console.log(removeDuplicatesIgnoreCase(["Apple", "apple", "Banana", "banana"]));

console.log("----------------------------------")
function removeDuplicatesIgnoreCase(arr) {
  const result = [];

  for (const word of arr) {
    const w = word.trim().toLowerCase();
    if (!result.some(item => item.trim().toLowerCase() === w)) {
      result.push(word); // เก็บค่าต้นฉบับ
    }
  }

  return result;
}

console.log(removeDuplicatesIgnoreCase([" Apple ", "apple", "Banana", "banana", "APPLE", "Orange"]));
// [" Apple ", "Banana", "Orange"]


// ใช้ some ไล่เช็คใน result ทุกครั้ง → ถ้าข้อมูลเยอะ จะช้ากว่า Set 
