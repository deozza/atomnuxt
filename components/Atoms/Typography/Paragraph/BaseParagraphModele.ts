import BaseParagraphInterface from "~/components/Atoms/Typography/Paragraph/BaseParagraphInterface";

export default class BaseParagraphModele implements BaseParagraphInterface {
  visualType: string;

  constructor(visualType: string = "light") {
    this.visualType = visualType;
  }

}
