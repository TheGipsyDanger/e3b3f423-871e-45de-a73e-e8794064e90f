export interface IEvent {
  id: string;
  title: string;
  description: string;
  obs: string;
  date: string;
}

export interface IEventItem extends IEvent {
  participants: [];
}