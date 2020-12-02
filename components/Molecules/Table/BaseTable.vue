<template>
  <div class="flex-column">
    <table>
      <caption>{{caption}}</caption>
      <thead>
      <tr>
        <th v-for="column of table.columns" scope="col">{{column.title}}</th>
        <th v-if="table.actions.length > 0" scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="row of table.rows">
        <td v-for="column of table.columns" :data-label="column.title">{{row.content[column.title]}}</td>
        <td v-if="table.actions.length>0" data-label="Actions">
          <span v-for="action of table.actions">
            <a :href="action.link"><i v-if="action.icon.length>0" :class="action.icon" />{{action.title}}</a>
          </span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Table from "~/components/Molecules/Table/Table";

interface BaseTableInterface{
  table:Table;
  caption:string;
}

@Component({
  components: {
  }
})
export default class BaseTable extends Vue implements BaseTableInterface{
  @Prop({required:true, type:Object}) table!: Table;
  @Prop({required:true, type:String}) caption!: string;

}
</script>

<style scoped>
table {
  border-collapse: collapse;
  padding: 0;
  width: 90%;
  table-layout: fixed;
  margin: 25px 0;
  font-size: 0.9em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

table th,
table td {
  padding: 12px 15px;
  text-align: center;
}

tbody tr {
  border-bottom: 1px solid #dddddd;
}

tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

table tbody tr td span{
  padding-left: 12px;
  padding-right: 12px;
}

table tbody tr td span a{
  text-decoration: none;
  color: black
}

table tbody tr td span i{
  padding-left: 6px;
  padding-right: 6px;
}
@media screen and (min-width: 1024px) {
  tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
}

@media screen and (max-width: 1024px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
