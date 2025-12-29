// เริ่มเขียนโค้ดตรงนี้
//Built-in fetch Function >> async ,await ต้องแปลงข้อมูลจาก sever (.json())
//รูปแบบ Array ของชื่อที่มีความยาวตัวอักษรมากกว่า 17 ตัวอักษร >> array.map()?ต้องเอาข้อมูลแค่nameออกมาก่อนไหม?, array.filter(>17)

async function getUsers(){
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await reponse.json();
    return data;
}

getUsers();

let users = await getUsers(); // array ที่ดึงมาจาก sever
// console.log(users);

const nameLetterMoreThan17 = users
.map((user) => user.name)
.filter((user) => user.length >17);


console.log(nameLetterMoreThan17);
