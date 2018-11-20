export interface IUser {
  id: number;
  lastName: string;
  firstName: string;
  patronymic: string;
  group?: string;
  groups?: string[];
  roles?: string[];
  subjects?: {};
}

export class User implements IUser {
  constructor(
    readonly id: number,
    public lastName,
    public firstName,
    public patronymic) {

    }
}
