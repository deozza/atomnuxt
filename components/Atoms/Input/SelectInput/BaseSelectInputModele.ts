import BaseSelectInputInterface from "~/components/Atoms/Input/SelectInput/BaseSelectInputInterface";
import SelectItem from "~/components/Atoms/Input/SelectInput/SelectItem";

export default class BaseSelectInputModele implements BaseSelectInputInterface{
  htmlType: string;
  id: string;
  label: string;
  items: Array<SelectItem>;
  multiple: boolean;
  name: string;
  readonly: boolean;
  required: boolean;
  value: any;
  error: string|null;

  constructor(htmlType: string, label: string, id: string, items: Array<SelectItem>, name: string = '',   multiple: boolean = false, required: boolean = false, readonly: boolean = false, value: any = null, error: string = '') {
    this.htmlType = this.setHtmlType(htmlType);
    this.id = id;
    this.label = label;
    this.name = name;

    if(name === ''){
      this.name = label;
    }

    this.items = items;
    this.multiple = multiple;
    this.error = error;
    this.value = value;
    this.required = required;
    this.readonly = readonly;
  }

  setHtmlType(htmlType: string): string{
    let expectedValues = ['select', 'radio', 'checkbox'];
    if(!expectedValues.includes(htmlType)){
      throw new Error("Unexpected value for `htmlType`");
    }

    return htmlType;
  }
}
