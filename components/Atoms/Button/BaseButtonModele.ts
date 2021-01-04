import BaseButtonInterface from "~/components/Atoms/Button/BaseButtonInterface";

export default class BaseButtonModele implements BaseButtonInterface{
  buttonClickEvent: string;
  disabled: boolean;
  htmlType: string;
  icon: string;
  loading: boolean;
  onlyIcon: boolean;
  outline: boolean;
  round: boolean;
  visualType: string;


  constructor(buttonClickEvent: string = 'buttonClicked', disabled: boolean = false, htmlType: string = "button", icon: string = '', loading: boolean = false, onlyIcon: boolean = false, outline: boolean = false, round: boolean = false, visualType: string = "primary") {
    this.buttonClickEvent = buttonClickEvent;
    this.disabled = disabled;
    this.htmlType = this.setVisualType(visualType);
    this.icon = icon;
    this.loading = loading;
    this.onlyIcon = onlyIcon;
    this.outline = outline;
    this.round = round;
    this.visualType = visualType;
  }

  setVisualType(visualType: string): string{
    const expectedValues:Array<string> = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

    if(!expectedValues.includes(visualType)){
      throw new Error("Unexpected value for `visualType`");
    }else{
      return visualType;
    }
  }
}
