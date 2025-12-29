const alphaTech = [
    { name: 'Alice', age: 23, department: 'Engineering' },
    { name: 'Bob', age: 19, department: 'Design' }
  ];
  
  const betaSoft = [
    { name: 'Charlie', age: 28, department: 'Engineering' },
    { name: 'David', age: 17, department: 'Support' }
  ];
  
  const gammaDev = [
    { name: 'Eve', age: 25, department: 'Marketing' },
    { name: 'Faythe', age: 18, department: 'Engineering' },
    { name: 'Grace', age: 20, department: 'Engineering' }
  ];
  

const alphaTechWithCompany = alphaTech.map(employee => ({
  ...employee,
  company: "alphaTech"
}));

const betaSoftWithCompany = betaSoft.map(employee => ({
  ...employee,
  company: "betaSoft"
}));

//บริษัทที่ 3 หาย!!
const gammaDevWithCompany = gammaDev.map(employee => ({
  ...employee,
  company: "gammaDev"
}));

const allEmployees = [...alphaTechWithCompany, ...betaSoftWithCompany, ...gammaDevWithCompany]; //รวมข้อมูลพนักงานจากทั้ง 3 บริษัทให้อยู่ใน Array เดียว>> เพิ่มอีกบริษัท

const result = allEmployees.filter((employee) => {
  return employee.department === 'Engineering' && employee.age >= 20; //สะกด Engineering ผิด
}).map((employee) => {
  return {
    name: employee.name,
    company: employee.company, //ต้องเพิ่มชื่อ company ของแต่ละบริษัท
  };
});

console.log(result);
// [
//     { name: 'Alice', company: 'alphaTech' },
//     { name: 'Charlie', company: 'betaSoft' },
//     { name: 'Grace', company: 'gammaDev' }
// ]
  

