import BaseButtonInterface from "~/components/Atoms/Button/BaseButtonInterface";

export default class BaseButton implements BaseButtonInterface{
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
    this.htmlType = htmlType;
    this.icon = icon;
    this.loading = loading;
    this.onlyIcon = onlyIcon;
    this.outline = outline;
    this.round = round;
    this.visualType = visualType;
  }
}
