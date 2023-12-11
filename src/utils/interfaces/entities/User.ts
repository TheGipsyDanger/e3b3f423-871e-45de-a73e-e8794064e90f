export interface IUser {
  id: string;
  name: string;
}

export interface IParticipant extends IUser {
  value: number;
}
