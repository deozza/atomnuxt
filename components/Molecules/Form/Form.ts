import BaseTextInputModele from "~/components/Atoms/Input/TextInput/BaseTextInputModele";
import BaseSelectInputModele from "~/components/Atoms/Input/SelectInput/BaseSelectInputModele";
import BaseFileInputModele from "~/components/Atoms/Input/FileInput/BaseFileInputModele";

export default class Form{
  title: string;
  inputs:Array<BaseTextInputModele|BaseSelectInputModele|BaseFileInputModele>

  constructor(title:string = '', inputs:Array<BaseTextInputModele|BaseSelectInputModele> = []) {
    this.title    = title;
    this.inputs   = inputs;
  }
}
