export interface Employee {
  name: string;
  age: number;
  salary: number;
  bonus: number;
  total: number;
}

const employees: Employee[] = [
  { name: "John", age: 24, salary: 50000, bonus: 10000, total: 60000 },
  { name: "Mary", age: 30, salary: 80000, bonus: 20000, total: 100000 },
  { name: "Steve", age: 32, salary: 70000, bonus: 15000, total: 85000 },
  { name: "Jane", age: 28, salary: 90000, bonus: 20000, total: 110000 },
];

/**
 * Finds an employee by their name.
 * @param name - The name of the employee to search for.
 * @returns The found employee, or undefined if not found.
 */
function findEmployeeByName(name: string): Employee | undefined {
  return employees.find(e => e.name === name);
}

function filterEmployeesBySalary(salary: number): Employee[] {
  return employees.filter(e => e.salary > salary);
}

function filterEmployeesBySalaryAndAge(salary: number, age: number): Employee[] {
  return employees.filter(e => e.salary > salary && e.age > age);
}

function getAllEmployeesNames(): string[] {
  return employees.map(e => e.name);
}

function getMaxSalary(): number {
  return employees.reduce((maxSalary, employee) => {
    return employee.salary > maxSalary ? employee.salary : maxSalary;
  }, 0);
}

function getAverageSalary(): number {
  return (
    employees.reduce((total, employee) => {
      return total + employee.salary;
    }, 0) / employees.length
  );
}
