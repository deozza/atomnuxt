import BaseParagraphInterface from "~/components/Atoms/Typography/Paragraph/BaseParagraphInterface";

export default class BaseParagraph implements BaseParagraphInterface {
  visualType: string;

  constructor(visualType: string = "light") {
    this.visualType = visualType;
  }

}
