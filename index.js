// Write your code here
let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
  };

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  console.log("Initial Employee:", employee);
  
  const updatedEmployee1 = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
  console.log("Updated Employee (non-destructive):", updatedEmployee1);
  
  const updatedEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm St');
  console.log("Updated Employee (destructive):", updatedEmployee2);
  
  const deletedEmployee1 = deleteFromEmployeeByKey(employee, 'name');
  console.log("Deleted Employee (non-destructive):", deletedEmployee1);
  
  const deletedEmployee2 = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
  console.log("Deleted Employee (destructive):", deletedEmployee2);
  