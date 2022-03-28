import { mediaFilesEndpoing } from "@models/common";

interface IProps {
  url: string;
  alt: string;
}

export const Image: React.FC<IProps> = (props) => {
  const { alt, url } = props;

  return <img src={`${mediaFilesEndpoing}${url}`} alt={alt} />;
};
