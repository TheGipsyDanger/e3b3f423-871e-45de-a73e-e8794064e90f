export namespace IConfirmModal {
  export interface IView {
    onClick: () => void;
    closeModal: () => void;
    title: string;
    description: string;
  }
  export interface IModelProps {}
  export interface IModel {}
}
