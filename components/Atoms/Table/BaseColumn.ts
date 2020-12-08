export default class BaseColumn{
  title: string;
  property: string;
  icon: string;

  constructor(title:string, property:string, icon:string = '') {
    this.title = title;
    this.property = property;
    this.icon = icon;
  }
}
