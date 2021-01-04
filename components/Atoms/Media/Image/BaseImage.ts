import BaseImageInterface from "~/components/Atoms/Media/Image/BaseImageInterface";

export default class BaseImage implements BaseImageInterface {
  action: string;
  alt: string;
  maxWidth: string;
  src: string;
  thumbnail: boolean;


  constructor(src: string, alt: string, action: string = "redirectToImage", maxWidth: string = "100%", thumbnail: boolean = false) {
    this.action = action;
    this.alt = alt;
    this.maxWidth = maxWidth;
    this.src = src;
    this.thumbnail = thumbnail;
  }
}
