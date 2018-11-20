import {User} from './user.model';


export class Teacher extends User {
  groups: number[];
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
      this.groups = objTeacher.groups;
      this.roles = objTeacher.roles;
      this.subjects = objTeacher.subjects;
    }
}
