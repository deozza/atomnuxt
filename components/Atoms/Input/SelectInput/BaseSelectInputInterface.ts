import BaseInputInterface from "~/components/Atoms/Input/BaseInputInterface";

export default interface BaseSelectInputInterface extends BaseInputInterface{
  items: Array<object>;
  multiple: boolean;
}
