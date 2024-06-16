
interface Props {
    color: string;
    image: any;
    size: number
}


export const ImageComponent = ({ color, image, size  }:Props) => {
    const colorMap: any = {
      white: 'invert(100%) brightness(100%)',
      purple:'invert(15%) sepia(86%) saturate(3724%) hue-rotate(259deg) brightness(93%) contrast(101%)'
    };
  
    const filterStyle = colorMap[color] || 'none';
  
    return <img src={image} style={{ filter: filterStyle }} width={size} height={size} />;
};