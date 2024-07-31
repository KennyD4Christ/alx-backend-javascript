/// <reference path="./js/subjects/Cpp.ts" />
/// <reference path="./js/subjects/Java.ts" />
/// <reference path="./js/subjects/React.ts" />
/// <reference path="./js/subjects/Teacher.ts" />

import { Teacher } from './js/subjects/Teacher';
import { cpp } from './js/subjects/Cpp';
import { java } from './js/subjects/Java';
import { react } from './js/subjects/React';

// Create a Teacher object with experienceTeachingC
const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

// Set the teacher for each subject and log the results
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
