const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้
//รวมทั้ง 2 array ใน Array allPeople >> ...[]
//กรองพนักงานที่มีอายุน้อยกว่า 20 >> array.filter()

const allPeople = [...techupPeople, ...techcoolPeople];
// console.log(allPeople);

let lessThanTwentyPeople = allPeople.filter((people) => people.age < 20);
console.log(lessThanTwentyPeople);
