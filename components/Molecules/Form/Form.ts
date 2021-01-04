import Input from "~/components/Atoms/Input/Input";

export default class Form{
  title: string;
  inputs:Array<Input>

  constructor(title:string = '', inputs:Array<Input> = []) {
    this.title    = title;
    this.inputs   = inputs;
  }

  public setNewInput(globalType:string, htmlType:string, label:string, id:string, name:string = '', required:boolean = false, readonly:boolean = false, value:any = null, items:Array<object> = [], accept:Array<string> = []): Input{
    let input = new Input(globalType, htmlType, label, id, name, required, readonly, value, items, accept);
    this.inputs.push(input);

    return input;
  }
}
