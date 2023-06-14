import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Submitted = ({
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
          id="1017.已提交"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14,0 C6.2680135,0 0,6.2680135 0,14 C0,21.7319865 6.2680135,28 14,28 C21.7319865,28 28,21.7319865 28,14 C28,6.2680135 21.7319865,0 14,0 Z M14,1.4 C20.9587878,1.4 26.6,7.04121216 26.6,14 C26.6,20.9587878 20.9587878,26.6 14,26.6 C7.04121216,26.6 1.4,20.9587878 1.4,14 C1.4,7.04121216 7.04121216,1.4 14,1.4 Z M15.3118596,7.601269 C15.3925902,7.66585347 15.4683858,7.73626708 15.5386504,7.81191373 L15.6398245,7.9292339 L20.1466082,13.5627135 C20.3881149,13.8645968 20.3391699,14.3051014 20.0372865,14.5466082 C19.7689458,14.7612808 19.391077,14.7464607 19.1408013,14.5284948 L19.0533918,14.4372865 L14.6999742,8.99601618 L14.7,20.3 C14.7,20.6865994 14.3865994,21 14,21 C13.6563562,21 13.3705483,20.7523747 13.3112779,20.4258258 L13.3,20.3 L13.2999742,8.99321618 L8.94660816,14.4372865 C8.7051015,14.7391699 8.26459682,14.7881149 7.96271347,14.5466082 C7.69437273,14.3319355 7.6258845,13.96003 7.78359562,13.6680123 L7.85339184,13.5627135 L12.3601755,7.9292339 C13.0846956,7.02358384 14.4062096,6.87674893 15.3118596,7.601269 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Submitted.displayName = 'Submitted';
export default Submitted;
