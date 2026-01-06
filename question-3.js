// เริ่มเขียนโค้ดตรงนี้
//Built-in fetch Function >> async ,await ต้องแปลงข้อมูลจาก sever (.json())
//รูปแบบ Array ของชื่อที่มีความยาวตัวอักษรมากกว่า 17 ตัวอักษร >> array.map()?ต้องเอาข้อมูลแค่nameออกมาก่อนไหม?, array.filter(>17)

async function getUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

(async () => {
    try {
        const users = await getUsers();// array ที่ดึงมาจาก sever
        // console.log(users);
        const nameLetterMoreThan17 = users
    .map((user) => user.name)
    .filter((user) => user.length >17);


    console.log(nameLetterMoreThan17);
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error);
    }
})();