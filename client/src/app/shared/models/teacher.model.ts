import {User} from './user.model';

export class Teacher extends User {
  group: string[];
  roles: string[];
  subjects: string;

  constructor(
    objTeacher
    ) {
      super(objTeacher.id,
        objTeacher.lastName,
        objTeacher.firstName,
        objTeacher.patronymic
        );
      this.group = objTeacher.group;
      this.roles = objTeacher.roles;
      this.subjects = objTeacher.subjects;
    }
}
