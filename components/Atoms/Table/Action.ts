export default class Action{
  title: string;
  link: string;
  icon: string;

  constructor(title:string, link:string, icon:string = "") {
    this.title = title;
    this.link = link;
    this.icon = icon;
  }
}
