import Column from "~/components/Atoms/Table/Column";
import Row from "~/components/Atoms/Table/Row";

export default class Table{
  columns: Array<Column>;
  rows: Array<Row>

  constructor(columns:Array<Column>, rows:Array<Row>) {
    this.columns = columns;
    this.rows = rows;
  }
}
