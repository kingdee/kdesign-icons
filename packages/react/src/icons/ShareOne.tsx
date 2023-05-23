import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ShareOne = ({
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
          id="99.分享"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="分享"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18,0 C20.3669346,0 22.2857143,1.89417991 22.2857143,4.23076923 C22.2857143,6.56735853 20.3669346,8.46153846 18,8.46153846 C16.872421,8.46153846 15.8465487,8.03166304 15.0813783,7.32886888 L10.1741892,10.7895864 C10.2472702,11.1304058 10.2857143,11.4838479 10.2857143,11.8461538 C10.2857143,12.3879731 10.1997362,12.9099687 10.0405136,13.3995699 L15.9391403,15.7648068 C16.6628469,14.4392872 18.0820005,13.5384615 19.7142857,13.5384615 C22.0812203,13.5384615 24,15.4326415 24,17.7692308 C24,20.1058201 22.0812203,22 19.7142857,22 C17.3473511,22 15.4285714,20.1058201 15.4285714,17.7692308 C15.4285714,17.6427719 15.4341917,17.5176088 15.4451991,17.3939718 L9.24593853,14.9074692 C8.30698459,16.1319723 6.81850689,16.9230769 5.14285714,16.9230769 C2.30253556,16.9230769 0,14.650061 0,11.8461538 C0,9.04224664 2.30253556,6.76923077 5.14285714,6.76923077 C6.98964318,6.76923077 8.60907259,7.73018037 9.51604646,9.17319988 L14.0838506,5.95205202 C13.8463228,5.42620545 13.7142857,4.84370913 13.7142857,4.23076923 C13.7142857,1.89417991 15.6330654,0 18,0 Z M19.7142857,15.2307692 C18.294125,15.2307692 17.1428571,16.3672772 17.1428571,17.7692308 C17.1428571,19.1711843 18.294125,20.3076923 19.7142857,20.3076923 C21.1344465,20.3076923 22.2857143,19.1711843 22.2857143,17.7692308 C22.2857143,16.3672772 21.1344465,15.2307692 19.7142857,15.2307692 Z M5.14285714,8.46153846 C3.24930942,8.46153846 1.71428571,9.97688238 1.71428571,11.8461538 C1.71428571,13.7154253 3.24930942,15.2307692 5.14285714,15.2307692 C7.03640486,15.2307692 8.57142857,13.7154253 8.57142857,11.8461538 C8.57142857,9.97688238 7.03640486,8.46153846 5.14285714,8.46153846 Z M18,1.69230769 C16.5798393,1.69230769 15.4285714,2.82881564 15.4285714,4.23076923 C15.4285714,5.63272282 16.5798393,6.76923077 18,6.76923077 C19.4201607,6.76923077 20.5714286,5.63272282 20.5714286,4.23076923 C20.5714286,2.82881564 19.4201607,1.69230769 18,1.69230769 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ShareOne.displayName = 'ShareOne';
export default ShareOne;
