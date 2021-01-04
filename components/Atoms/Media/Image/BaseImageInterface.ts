import BaseMediaInterface from "~/components/Atoms/Media/BaseMediaInterface";

export default interface BaseImageInterface extends BaseMediaInterface{
  thumbnail: boolean;
  maxWidth: string;
  action: string;
}
