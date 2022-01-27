export function getData(dataCount: any, group: any) {
  const Employees = [
    'Michael',
    'Kathryn',
    'Tamer',
    'Martin',
    'Davolio',
    'Nancy',
    'Fuller',
    'Leverling',
    'Peacock',
    'Margaret',
    'Buchanan',
    'Janet',
    'Andrew',
    'Callahan',
    'Laura',
    'Dodsworth',
    'Anne',
    'Bergs',
    'Vinet',
    'Anton',
    'Fleet',
    'Zachery',
    'Van',
    'King',
    'Jack',
    'Rose',
  ];
  const Designation = [
    'Manager',
    'CFO',
    'Designer',
    'Developer',
    'Program Directory',
    'System Analyst',
    'Project Lead',
  ];
  const Mail = [
    'sample.com',
    'arpy.com',
    'rpy.com',
    'mail.com',
    'jourrapide.com',
  ];
  if (typeof dataCount === 'string') dataCount = parseInt(dataCount);

  const tradeData = [];
  for (let i = 1; i <= dataCount; i++) {
    tradeData.push({
      [`${group}_VALUE`]: group + i,
      Employees:
        Employees[Math.floor(Math.random() * Employees.length)] +
        ' ' +
        Employees[Math.floor(Math.random() * Employees.length)],
      Designation: Designation[Math.floor(Math.random() * Designation.length)],
    });
    const emp = tradeData[i - 1]['Employees'];
    const sName = emp.substr(0, emp.indexOf(' ')).toLowerCase();
    tradeData[i - 1]['Mail'] =
      sName +
      (Math.floor(Math.random() * 100) + 10) +
      '@' +
      Mail[Math.floor(Math.random() * Mail.length)];
  }
  return tradeData;
}
