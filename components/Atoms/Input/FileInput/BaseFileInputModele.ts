import BaseFileInputInterface from "./BaseFileInputInterface";

export default class BaseFileInputModele implements BaseFileInputInterface{
  htmlType: string;
  label: string;
  error:string|null;
  name: string
  id: string;
  required: boolean;
  readonly: boolean;
  value:any;
  accept:string;

  constructor(label: string, id: string, name: string = '', required: boolean = false, readonly : boolean = false, value: any = null, error: string = '', accept: Array<string>) {
    this.htmlType = 'file';
    this.id = id;
    this.label = label;
    this.name = name;
    this.accept = accept.join(',');

    if(name === ''){
      this.name = label;
    }

    this.error = error;
    this.value = value;
    this.required = required;
    this.readonly = readonly;
    this.accept = '';
  }

}
