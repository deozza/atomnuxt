<template>
  <div
    class="progress"
    :class="[
	      { [`progress-${globalStyle}`]: globalStyle },
    	]"

  >
    <div
      class="progress-bar"
      :class="[
	      { [`progress-bar-${visualType}`]: visualType },
        { 'progress-bar-animated': animated },
        { 'progress-bar-striped': animated },

    	]"
      role="progressbar"
      :style="`width: ${value}%`"
      :aria-valuenow="value"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      {{value}}%
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import BaseProgressBarInterface from "~/components/Atoms/ProgressBar/BaseProgressBarInterface";

@Component
export default class BaseProgressBar extends Vue implements BaseProgressBarInterface{
  @Prop({required:true, type:Number, validator(value: number): boolean {
    return value >= 0 && value <=100;
    }}) value!: number;
  @Prop({required:false, type:String, default:"primary", validator(value: string): boolean {
      let expectedValues:Array<string> = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
      return expectedValues.includes(value);
    }}) visualType!: string;
  @Prop({required:false, type:String, default:"light", validator(value: string): boolean {
      let possibleValues:Array<string> = ['light', 'dark'];
      return possibleValues.includes(value);
    }}) globalStyle!: string;
  @Prop({required:false, type:Boolean, default: false}) animated!: boolean;
}
</script>

<style scoped>

div.progress {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: .75rem;
  border-radius: 100px;
  margin: 12px 0;
}

div.progress.progress-light {
  background-color: #e9ecef;
}
div.progress.progress-dark {
  background-color: black;
}

div.progress div.progress-bar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  transition: width .6s ease;
  border-radius: 100px;
}

div.progress.progress-light div.progress-bar{
  color: #fff;
}

div.progress.progress-dark div.progress-bar{
  color: black;
}

div.progress div.progress-bar.progress-bar-primary{
  background-color: var(--primary_bg);
}

div.progress div.progress-bar.progress-bar-secondary{
  background-color: var(--secondary_bg);
}

div.progress div.progress-bar.progress-bar-success{
  background-color: var(--success_bg);
}

div.progress div.progress-bar.progress-bar-danger{
  background-color: var(--danger_bg);
}

div.progress div.progress-bar.progress-bar-warning{
  background-color: var(--warning_bg);
}

div.progress div.progress-bar.progress-bar-info{
  background-color: var(--info_bg);
}

div.progress div.progress-bar.progress-bar-striped {
  background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
  background-size: 1rem 1rem;
}
div.progress div.progress-bar.progress-bar-animated {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
  -o-animation: progress-bar-stripes 2s linear infinite;
  animation: progress-bar-stripes 2s linear infinite;
}
@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 60px 0;
  }
  to {
    background-position: 0 0;
  }
}
@keyframes progress-bar-stripes {
  from {
    background-position: 60px 0;
  }
  to {
    background-position: 0 0;
  }
}
</style>
