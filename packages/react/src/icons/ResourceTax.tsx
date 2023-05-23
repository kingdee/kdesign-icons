import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ResourceTax = ({
  size = '1em',
  color = 'currentColor',
  rotate = 0,
  spin = false,
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="603.资源税"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10.5713662,22.2857143 C5.53940039,21.4346887 1.71428571,17.1883447 1.71428571,12.077172 L1.71428571,12.0766795 C1.71403082,11.3587135 1.79061038,10.642655 1.94279901,9.93996532 C2.4053178,10.4188084 3.49602207,10.4075149 3.76202224,9.69201095 C4.23776325,9.96631672 4.87683766,10.016259 4.87683766,10.5651215 C4.87683766,12.3760919 4.94346734,14.3178155 6.64343122,14.3479314 C6.69113497,14.3479314 7.5912836,14.6779516 8.0198394,15.7533408 C8.16787653,16.1252723 8.75380276,15.7533408 9.39624754,15.7533408 C9.71695148,15.7533408 9.39624754,16.2763538 9.39624754,17.4074574 C9.39624754,18.5342945 11.9056193,20.2684693 11.9056193,20.2684693 C11.8942119,21.0145911 11.9258415,21.6176623 11.9898786,22.1005208 C11.4239153,22.0889764 10.9471373,22.1620075 10.5714705,22.2852317 L10.5713662,22.2857143 Z M15.0664057,22.1243432 C15.0106649,21.8610799 14.7677388,21.7170255 14.3244052,21.8299601 C14.678035,20.3715969 14.8501833,19.5544518 15.5888133,18.9345658 C16.6572213,18.0376135 15.7158505,17.0407767 14.9028129,17.1582288 C14.2619237,17.2515881 14.6668869,16.390022 14.0949607,16.3423385 C13.5230344,16.294655 12.7758489,15.1946711 11.9527002,14.8157126 C11.5163666,14.6149398 11.0875516,14.0773707 10.4142549,14.053278 C9.81795832,14.030942 8.9460689,14.5416578 8.9460689,14.1478922 C8.9460689,12.8802631 8.81358736,11.9755308 8.78636511,11.6131359 C8.76432815,11.3227684 8.59036509,11.5152592 9.3966618,11.5340817 C9.83558795,11.5453752 9.62118043,10.6807975 10.0554399,10.647168 C10.4821809,10.6142914 11.498737,11.0336556 11.7577371,10.8665122 C11.9983298,10.7109134 13.5266641,14.7494576 13.5266641,11.5340817 C13.5266641,11.1526135 13.3223677,10.4893104 13.5266641,10.1286723 C14.3337386,8.700927 15.0894797,7.53719786 15.021813,7.36804682 C14.9831834,7.27242879 14.1958126,7.19237063 13.5658122,7.39791176 C13.3532195,7.46667643 13.6334789,7.78891672 13.3280714,7.85793235 C12.1839596,8.1134157 11.1731072,7.55903191 11.5269963,7.03827752 C11.8899595,6.50422198 13.2031083,6.80513017 13.3179602,5.73325456 C13.3843306,5.11964278 13.4392936,4.40915816 13.4758492,3.88087483 C15.0158501,4.11402221 14.8462944,1.94642924 12.5565153,1.71428571 C17.1887031,1.76698856 21.1136312,4.66238282 22.5540765,8.68135167 L22.5540765,8.68135167 C22.4841309,8.6175007 22.3943579,8.57779963 22.298706,8.568417 C21.6062241,6.89447405 19.9262232,8.10588675 20.4960753,9.58206849 C17.4419996,11.8548162 18.2239259,13.4399172 19.2272598,14.3474101 C19.7551119,14.8242454 20.2585937,15.542008 20.5862976,16.0572411 C20.2295566,17.0643675 21.9007428,16.6610653 22.7249286,14.9529909 L22.7249286,14.9529903 C21.6652551,18.4882724 18.7516746,21.2164982 15.0664059,22.1243432 L15.0664057,22.1243432 Z M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,1.71428571 C6.31935686,1.71428571 1.71428571,6.31935686 1.71428571,12 C1.71428571,17.6806431 6.31935686,22.2857143 12,22.2857143 C17.6806431,22.2857143 22.2857143,17.6806431 22.2857143,12 C22.2857143,6.31935686 17.6806431,1.71428571 12,1.71428571 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ResourceTax.displayName = 'ResourceTax';
export default ResourceTax;
