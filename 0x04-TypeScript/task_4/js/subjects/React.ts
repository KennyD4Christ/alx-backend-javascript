/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
/// <reference path="Cpp.ts" />

namespace Subjects {
  // Declaration merging to extend Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingReact ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
    }
  }
  export const react = new React({ firstName: '', lastName: '' });
}
