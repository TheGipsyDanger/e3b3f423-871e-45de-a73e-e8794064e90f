import { IEvent } from "@/utils";

export namespace IMyBbqs {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    events: IEvent[];
  }
}
