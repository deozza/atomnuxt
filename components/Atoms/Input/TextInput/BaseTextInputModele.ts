import BaseTextInputInterface from "~/components/Atoms/Input/TextInput/BaseTextInputInterface";

export default class BaseTextInputModele implements BaseTextInputInterface{
  htmlType: string;
  label: string;
  error:string|null;
  name: string
  id: string;
  required: boolean;
  readonly: boolean;
  value:any;
  accept:string;
  max: any;
  maxLength: any;
  min: any;
  minLength: any;
  placeholder: string;

  constructor(htmlType: string, label: string, id: string, name: string = '', placeholder: string = '', required: boolean = false, readonly: boolean = false, value: any = null, error: string = '') {
    this.htmlType = this.setHtmlType(htmlType);
    this.id = id;
    this.label = label;
    this.name = name;
    this.placeholder = placeholder;

    if(name === ''){
      this.name = label;
    }

    if(placeholder === ''){
      this.placeholder = label;
    }

    this.error = error;
    this.value = value;
    this.required = required;
    this.readonly = readonly;
    this.accept = '';
  }

  public setHtmlType(htmlType: string): string{
    let expectedValues = ['text', 'email', 'tel', 'password', 'url', 'number', 'file'];
    if(!expectedValues.includes(htmlType)){
      throw new Error("Unexpected value for `htmlType`");
    }

    return htmlType;
  }

  public setAccept(accept: Array<string>): void{
    if(this.htmlType !== 'file' || accept.length <= 0){
      this.accept =  '';
    }

    this.accept = accept.join(',');
  }

  public setMinAndMaxForNumberInput(min:number, max:any = null): void{
    if(this.htmlType !== 'number'){
      throw new Error("Cannot set `max` and `min` value for non number input.");
    }

    this.min = min;

    if(this.min >= max){
      throw new Error("`max` value cannot be greater than `min` value.");
    }

    this.max = max;
  }

  public setMinAndMaxForTextInput(minLength:number, maxLength: any = null): void {
    if(this.htmlType !== 'text' && this.htmlType !== 'password'){
      throw new Error("Cannot set `max` and `min` value for non text input.");
    }

    if(minLength <= 0){
      throw new Error("Unexpected value for `minLength`");
    }

    this.minLength = minLength;

    if(minLength >= maxLength){
      throw new Error("Unexpected value for `minLength`");
    }

    this.maxLength = maxLength;
  }
}
