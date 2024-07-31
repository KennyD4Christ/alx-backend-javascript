// Define the Teacher interface with the required properties and an index signature for additional properties
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Create a Teacher object with additional properties
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Define the Directors interface that extends Teacher and adds the numberOfReports property
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create a Directors object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Define the constructor interface for StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Define the interface for the StudentClass
interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClassImpl implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Ensure the class matches the constructor interface
const StudentClass: StudentClassConstructor = StudentClassImpl;

// Example usage
const student = new StudentClass('John', 'Doe');
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working

