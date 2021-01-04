import BaseProgressBarInterface from "./BaseProgressBarInterface";

export default class BaseProgressBar implements BaseProgressBarInterface {
  animated: boolean;
  globalStyle: string;
  value: number;
  visualType: string;


  constructor(animated: boolean, value: number, visualType: string = "primary", globalStyle: string = "light") {
    this.animated = animated;
    this.globalStyle = globalStyle;
    this.value = value;
    this.visualType = visualType;
  }
}
