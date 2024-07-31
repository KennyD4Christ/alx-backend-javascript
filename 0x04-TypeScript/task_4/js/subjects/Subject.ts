namespace Subjects {
  export class Subject {
    private teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }

    public setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
