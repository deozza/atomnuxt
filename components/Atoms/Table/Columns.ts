import BaseColumn from "~/components/Atoms/Table/BaseColumn";

export default class Columns{
  baseColumns: Array<BaseColumn>;
  actionColumns: Array<BaseColumn>;

  constructor(baseColumns:Array<BaseColumn>, actionColumns:Array<BaseColumn> = []) {
    this.baseColumns = baseColumns;
    this.actionColumns = actionColumns;
  }
}
