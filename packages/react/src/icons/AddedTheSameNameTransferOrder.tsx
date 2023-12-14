import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AddedTheSameNameTransferOrder = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="496.同名调拨单新增"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.6666667,11.9387921 C21.6121853,11.9387921 24,14.2550295 24,17.1122532 C24,19.9694769 21.6121853,22.2857143 18.6666667,22.2857143 C15.721148,22.2857143 13.3333334,19.9694769 13.3333334,17.1122532 C13.3333334,14.2550295 15.721148,11.9387921 18.6666667,11.9387921 Z M18.6581207,13.9750636 C18.4815253,13.9750636 18.3346512,14.1023159 18.3041927,14.2701265 L18.298397,14.3347873 L18.298045,16.7659208 L15.7695532,16.7665768 C15.5768408,16.7665768 15.4206165,16.9228011 15.4206165,17.1155136 C15.4206165,17.284137 15.5402257,17.4248242 15.6992302,17.4573613 L15.7695532,17.4644504 L18.298045,17.4636351 L18.298397,19.8962513 C18.298397,20.0949212 18.4594508,20.255975 18.6581207,20.255975 C18.8347162,20.255975 18.9815903,20.1287226 19.0120488,19.9609121 L19.0178444,19.8962513 L19.0171879,17.4636351 L21.5466862,17.4644504 C21.7393986,17.4644504 21.8956229,17.3082261 21.8956229,17.1155136 C21.8956229,16.9468902 21.7760137,16.8062031 21.6170091,16.773666 L21.5466862,16.7665768 L19.0171879,16.7659208 L19.0178444,14.3347873 C19.0178444,14.1361173 18.8567906,13.9750636 18.6581207,13.9750636 Z M21.4702757,0 C22.1310242,0 22.6667991,0.535642478 22.6667991,1.19639098 L22.6667991,12.5758832 C21.5910722,11.682491 20.1938338,11.1428751 18.6666667,11.1428751 C18.3234353,11.1428751 17.9867669,11.1701326 17.6588367,11.2225377 L17.8947369,10.9635578 L15.8429212,10.9635578 L15.8429212,6.58801243 C15.8429212,5.39638826 14.6150834,4.40537244 13.2750403,4.40537244 C11.9846284,4.40537244 10.8895953,5.27891726 10.8102518,6.45142859 L10.805651,6.58801243 L10.8123628,10.5174072 C10.8123628,11.3036225 10.30495,11.9091647 9.43438928,11.9091647 C8.60735657,11.9091647 7.81768775,11.3626629 7.74078849,10.6339313 L7.73466824,10.5174072 L7.73466824,6.2853702 L9.73532212,6.2853702 L7.25156237,3.44119639 L4.77192982,6.2853702 L6.6885089,6.2853702 L6.6885089,10.5174072 C6.6885089,11.6821286 7.60966757,12.8324709 9.43438928,12.8324709 C11.1961895,12.8324709 11.7481112,11.9717432 11.7840798,10.6596924 L11.7859909,10.5174072 L11.779279,6.58801243 C11.779279,5.95512464 12.5068882,5.34740519 13.2750403,5.34740519 C14.0027632,5.34740519 14.7545066,5.82554787 14.8316217,6.47775223 L14.8381077,6.58801243 L14.8381077,10.9635578 L13.0156981,10.9635578 L14.4855239,12.7322738 C13.2722505,13.8225921 12.5128205,15.381394 12.5128205,17.1122532 C12.5128205,17.5375579 12.5586732,17.9524742 12.6458449,18.3526042 L1.19639098,18.3529117 C0.535642478,18.3529117 0,17.8172692 0,17.1565208 L0,1.19639098 C0,0.535642478 0.535642478,0 1.19639098,0 L21.4702757,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AddedTheSameNameTransferOrder.displayName = 'AddedTheSameNameTransferOrder';
export default AddedTheSameNameTransferOrder;
