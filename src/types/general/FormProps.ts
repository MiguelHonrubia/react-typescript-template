import { DataOrModifiedFn } from "use-async-resource";

export interface FormProps<T> {
  reader?: DataOrModifiedFn<T>;
  dropDownReader: DataOrModifiedFn<any>;
  onSubmit: Function;
  disabled?: boolean;
}
