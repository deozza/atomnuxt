import Columns from "~/components/Atoms/Table/Columns";

export default class Table{
  columns: Columns;
  data: Array<object>;

  constructor(columns:Columns, data:Array<object>) {
    this.columns = columns;
    this.data = data;
  }
}
