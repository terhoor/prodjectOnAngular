import {User} from './user.model';


export class Student extends User {
  group: string;
  roles: string[];
  subjects: {};
  constructor(
    objStudents
  ) {
    super(objStudents.id,
      objStudents.lastName,
      objStudents.firstName,
      objStudents.patronymic
      );
    this.group = objStudents.group;
    this.roles = objStudents.roles;
    this.subjects = objStudents.subjects;

  }
}
