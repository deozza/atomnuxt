import {Vue} from "nuxt-property-decorator";
import Link from "~/components/Atoms/Link/Link";

export default interface MenuLinkInterface extends Vue{
  theme:string;
  links:Array<Link>;
}
