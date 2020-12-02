import Column from "~/components/Atoms/Table/Column";
import Row from "~/components/Atoms/Table/Row";
import Action from "~/components/Atoms/Table/Action";

export default class Table{
  columns: Array<Column>;
  rows: Array<Row>;
  actions: Array<Action>;

  constructor(columns:Array<Column>, rows:Array<Row>, actions:Array<Action> = []) {
    this.columns = columns;
    this.rows = rows;
    this.actions = actions;
  }
}
