import { IEvent } from "@/utils";
export namespace IEventItem {
  export interface IView extends IEvent {
    count: number;
  }
  export interface IModelProps extends IView {}
  export interface IModel extends IView {
    goToEvent: (id: string) => void;
    collection: string;
    suggestedValue: string;
  }
  export interface IContainer {
    count: number;
  }
}
