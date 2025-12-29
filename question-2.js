const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
//กรองข้อมูลนักเรียนที่มีคะแนนมากกว่า 50 >> array.filter()
//เพิ่มคะแนนนักเรียนแต่ละคนที่ผ่านการกรองในข้อหนึ่ง 10% >> array.map()
//ให้หาผลรวมของคะแนนทั้งหมดจากข้อ 2 >> array.reduce()
// แสดงผลเป็น "Total score is <ค่าของคะแนนที่รวมแล้ว>"

const totalStudentsScores = students
  .filter((student) => student.score > 50)
  .map((student) => student.score * 1.1)
  .reduce((total, cur) => total + cur, 0)
  .toFixed(1); //คำตอบต้องการทศนิยม 1 ตำแหน่ง

console.log(`Total score is ${totalStudentsScores}`);
