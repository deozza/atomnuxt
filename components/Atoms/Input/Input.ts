export default class Input{
  globalType: string;
  htmlType: string;
  label: string;
  name: string
  id: string;
  required: boolean;
  readonly: boolean;
  value:any;
  items:Array<object>
  accept:string

  constructor(globalType:string, htmlType:string, label:string, id:string, name:string = '', required:boolean = false, readonly:boolean = false, value:any = null, items:Array<object> = [], accept:Array<string> = []) {
    this.globalType = globalType;
    this.htmlType   = htmlType;
    this.label      = label;
    this.name       = label;
    this.id         = id;
    this.required   = required;
    this.readonly   = readonly;
    this.value      = value;
    this.items      = items;
    this.accept = '';
    if(accept.length > 0){
      this.accept = accept.join(',');
    }

    if(name.length > 0 && name !== label){
      this.name = name;
    }

  }
}
