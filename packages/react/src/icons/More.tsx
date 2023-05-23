import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const More = ({
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
          id="1045.更多"
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
              d="M14.0006778,28 C8.9987981,28 4.37676706,25.3319102 1.87575731,21.0001957 C-0.625252437,16.6684811 -0.625252437,11.3315189 1.87575731,6.99980433 C4.37676706,2.66808981 8.9987981,0 14.0006778,0 C21.7323996,0.000374310379 28,6.26827818 28,14 C28,21.7317218 21.7323996,27.9996257 14.0006778,28 L14.0006778,28 Z M14.0006778,26.1333333 C18.3356506,26.1333333 22.341427,23.8210078 24.5089785,20.0668488 C26.67653,16.3126898 26.67653,11.6873102 24.5089785,7.93315118 C22.341427,4.1789922 18.3356506,1.86666667 14.0006778,1.86666667 C7.29986923,1.86701513 1.86797541,7.29919143 1.86797541,14 C1.86797541,20.7008086 7.29986923,26.1329849 14.0006778,26.1333333 Z M8.40067777,14.9333333 C7.9004549,14.9334099 7.43819714,14.6665882 7.18806359,14.2333952 C6.93793004,13.8002023 6.93793004,13.2664644 7.18806359,12.8332715 C7.43819714,12.4000785 7.9004549,12.1332568 8.40067777,12.1333333 C9.17379272,12.1334517 9.80046345,12.7602184 9.80046345,13.5333333 C9.80046345,14.3064483 9.17379272,14.933215 8.40067777,14.9333333 L8.40067777,14.9333333 Z M14.0006778,14.9333333 C13.5004549,14.9334099 13.0381971,14.6665882 12.7880636,14.2333952 C12.5379301,13.8002023 12.5379301,13.2664644 12.7880636,12.8332715 C13.0381971,12.4000785 13.5004549,12.1332568 14.0006778,12.1333333 C14.7737927,12.1334517 15.4004635,12.7602184 15.4004635,13.5333333 C15.4004635,14.3064483 14.7737927,14.933215 14.0006778,14.9333333 L14.0006778,14.9333333 Z M19.6006778,14.9333333 C19.1004549,14.9334099 18.6381971,14.6665882 18.3880636,14.2333952 C18.13793,13.8002023 18.13793,13.2664644 18.3880636,12.8332715 C18.6381971,12.4000785 19.1004549,12.1332568 19.6006778,12.1333333 C20.3737927,12.1334517 21.0004634,12.7602184 21.0004634,13.5333333 C21.0004634,14.3064483 20.3737927,14.933215 19.6006778,14.9333333 L19.6006778,14.9333333 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
More.displayName = 'More';
export default More;
