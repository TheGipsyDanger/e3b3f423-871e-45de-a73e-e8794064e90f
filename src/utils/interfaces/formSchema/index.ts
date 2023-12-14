export interface ILoginForm<T> {
  email: T;
  password: T;
}

export interface ICreateBbqsForm<T> {
  title: T;
  description: T;
  obs: T;
  date: T;
  suggestedValue: T;
}

export interface IParticipantForm<T> {
  name: T;
  value: T;
  status: T;
}
