import {Vue} from "nuxt-property-decorator";

export default interface BaseInputInterface extends Vue{
  id: string,
  name: string,
  inputOrientation: string,
  htmlType: string,
  required: boolean,
  readonly: boolean,
}
