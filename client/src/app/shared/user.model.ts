export class User {
  constructor(
      /* readonly id: number, */
      public lastName,
      public firstName,
      public patronymic) {

      }
}

export class Student extends User {
  group: number;
  roles: [string];
  subjects: {};
  constructor(
    objStudents
      ) {
        super(/* objStudents.id, */
          objStudents.lastName,
          objStudents.firstName,
          objStudents.patronymic
          );
        this.group = objStudents.group;
        this.roles = objStudents.roles;
        this.subjects = objStudents.subjects;

      }
}

export class Teacher extends User {
  groups: [number];
  roles: [string];
  subjects: string;

  constructor(
      objTeacher
      ) {
        super(/* objTeacher.id, */
          objTeacher.lastName,
          objTeacher.firstName,
          objTeacher.patronymic
          );
        this.groups = objTeacher.groups;
        this.roles = objTeacher.roles;
        this.subjects = objTeacher.subjects;
      }
}
