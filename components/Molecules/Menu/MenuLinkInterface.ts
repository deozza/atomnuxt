import {Vue} from "nuxt-property-decorator";
import BaseLinkModele from "~/components/Atoms/Link/BaseLinkModele";

export default interface MenuLinkInterface extends Vue{
  theme:string;
  links:Array<BaseLinkModele>;
}
