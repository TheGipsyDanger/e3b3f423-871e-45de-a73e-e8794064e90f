import { IEvent } from "@/utils";

export namespace IHeader {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    event: IEvent;
  }
}
