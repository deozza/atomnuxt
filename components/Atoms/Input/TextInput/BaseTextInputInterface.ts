import BaseInputInterface from "~/components/Atoms/Input/BaseInputInterface";

export default interface BaseTextInputInterface extends BaseInputInterface{
  minLength: number;
  maxLength: number;
  min: number;
  max: number;
  placeholder: string;
}
