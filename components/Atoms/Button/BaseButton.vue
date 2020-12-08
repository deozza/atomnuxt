<template>
	<button
		class="btn"
    :type="htmlType"
		:class="[
	      { [`btn-${visualType}`]: visualType },
	      { 'btn-outline': outline },
	      { 'btn-icon': (icon.length > 0 && onlyIcon) },
	      { 'btn-round': ((icon.length > 0 && onlyIcon) || round) },
    	]"
		:disabled="disabled || loading"
	>
		<slot name="loading">
			<i v-if="loading" class="fas fa-spinner fa-spin"></i>
		</slot>
    <slot name="icon">
      <i v-if="!loading && icon.length>0" :class="'fas fa-'+icon"></i>
    </slot>
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface BaseButtonInterface {
  htmlType: string;
	visualType: string;
  icon: string;
  onlyIcon: boolean;
  outline: boolean;
  round: boolean;
	loading: boolean;
	disabled: boolean;
}

@Component
export default class BaseButton extends Vue implements BaseButtonInterface{
	@Prop({required:false, type:String, default:"default"}) visualType!: string;
	@Prop({required:false, type:String, default:"button"}) htmlType!: string;
  @Prop({required:false, type:String, default:''}) icon!: string;
  @Prop({required:false, type:Boolean, default:false}) onlyIcon!: boolean;
  @Prop({required:false, type:Boolean, default:false}) outline!: boolean;
  @Prop({required:false, type:Boolean, default:false}) round!: boolean;
  @Prop({required:false, type:Boolean, default:false}) loading!: boolean;
	@Prop({required:false, type:Boolean, default:false}) disabled!: boolean;
}
</script>

<style scoped>
button.btn {
	display: inline-block;
	font-weight: 400;
	text-decoration: none;
	color: #212529;
	text-align: center;
	font-size: .875rem;
	line-height: 1.333333;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: .4285rem;
	padding: 11px 40px;
  margin: 4px;
	-webkit-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
	-o-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
	transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out
}

button.btn[disabled]{
  opacity: .5;
  pointer-events: none;
}

button.btn.btn-icon{
  height: 2.375rem;
  min-width: 2.375rem;
  width: 2.375rem;
  border-radius: 10px;
  padding: 0 !important;
}

.btn-round{
  border-radius: 30px !important;
}
button.btn.btn-success{
	color: white;
	background-color: var(--green_bg);
	border-color: var(--green_border);
}

button.btn.btn-success:hover, button.btn.btn-success.btn-outline:hover{
	text-decoration: none;
	background-color: var(--green_bg_hover);
	border-color: var(--green_border_hover);
}

button.btn.btn-default{
	color: white;
	background-color: lightgray;
	border-color: lightgray;
}

button.btn.btn-default:hover{
	text-decoration: none;
	background-color: gray;
	border-color: gray;
}

button.btn.btn-success.btn-outline {
  color: var(--green_bg);
  background-color: transparent;
}
button.btn.btn-success.btn-outline:hover {
  color:white;
  text-decoration: none;
  background-color: var(--green_bg);
  border-color: var(--green_border);
}


button.btn.btn-default.btn-outline {
  color: black;
  background-color: transparent;
}
</style>
