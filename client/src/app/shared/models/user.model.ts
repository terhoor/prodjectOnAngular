export interface IUser {
  id: number;
  lastName: string;
  firstName: string;
  patronymic: string;
}

export class User implements IUser {
  constructor(
    readonly id: number,
    public lastName,
    public firstName,
    public patronymic) {

    }
}
