export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const allEmployees = departments.flat();
  return allEmployees[Symbol.iterator]();
}
