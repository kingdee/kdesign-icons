import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Spiralspot = ({
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
          id="spiralspot-"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="视觉修正模版" transform="translate(-2.000000, -0.500000)"></g>
          <path
            d="M17,5 C17.5128358,5 17.9355072,5.38604019 17.9932723,5.88337887 L18,6 L18.0000481,12.1643592 C19.5477705,12.4213285 21.0041357,12.9718626 22.3193223,13.7610459 L26.7567059,8.83103527 L26.8464107,8.74301021 C27.2221279,8.41778855 27.7900324,8.41566676 28.1689647,8.75670585 C28.5794748,9.12616487 28.6127532,9.75845471 28.2432941,10.1689647 L23.9589346,14.9281757 C25.5610116,16.2661233 26.8638435,17.9982317 27.7434513,19.9878448 L29.9855042,18.6425071 L30.0889674,18.588275 C30.5451517,18.3819295 31.0936411,18.5457511 31.3574929,18.9855042 C31.6416411,19.4590845 31.488076,20.0733448 31.0144958,20.3574929 L28.5144958,21.8574929 L28.4334717,21.900224 C28.8018923,23.1975681 29,24.5743723 29,26 C29,26.5522847 28.5522847,27 28,27 C27.4477153,27 27,26.5522847 27,26 C27,19.3554989 22.0564625,14 16,14 C9.94353747,14 5,19.3554989 5,26 C5,26.5522847 4.55228475,27 4,27 C3.44771525,27 3,26.5522847 3,26 C3,24.4824541 3.22447745,23.0202304 3.63990736,21.6502819 L1.48550424,20.3574929 C1.01192398,20.0733448 0.858358915,19.4590845 1.14250707,18.9855042 C1.40635894,18.5457511 1.95484827,18.3819295 2.41103258,18.588275 L2.51449576,18.6425071 L4.36347424,19.7517395 C5.34899305,17.6265905 6.82182169,15.8077627 8.62606497,14.467092 L4.75670585,10.1689647 C4.38724683,9.75845471 4.42052525,9.12616487 4.83103527,8.75670585 C5.2099676,8.41566676 5.77787207,8.41778855 6.15358932,8.74301021 L6.24329415,8.83103527 L10.3447979,13.3892029 C12.0531493,12.4993067 13.9710939,12 16,12 L16,6 C16,5.44771525 16.4477153,5 17,5 Z M15,18 C19.418278,18 23,21.581722 23,26 C23,26.5522847 22.5522847,27 22,27 C21.4477153,27 21,26.5522847 21,26 C21,22.6862915 18.3137085,20 15,20 C14.4477153,20 14,19.5522847 14,19 C14,18.4477153 14.4477153,18 15,18 Z"
            id="形状结合"
            fill={fill}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
Spiralspot.displayName = 'Spiralspot';
export default Spiralspot;
