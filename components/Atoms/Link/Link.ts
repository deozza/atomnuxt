export default class Link{
  link: string;
  title: string;
  customClasses: Array<string>;
  internalLink: boolean;
  icon: string;

  constructor(link:string, title:string, customClasses:Array<string> = [], icon:string = '', internalLink:boolean = true) {
    this.link = link;
    this.title = title;
    this.customClasses = customClasses;
    this.internalLink = internalLink;
    this.icon = icon;
  }
}
