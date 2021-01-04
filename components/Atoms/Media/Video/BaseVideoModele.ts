import BaseVideoInterface from "~/components/Atoms/Media/Video/BaseVideoInterface";

export default class BaseVideoModele implements BaseVideoInterface {
  alt: string;
  iframe: boolean;
  src: string;


  constructor(alt: string, src: string, iframe: boolean = false) {
    this.alt = alt;
    this.iframe = iframe;
    this.src = src;
  }
}
