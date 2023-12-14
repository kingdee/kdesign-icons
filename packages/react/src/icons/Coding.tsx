import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Coding = ({
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
          id="1411-共享"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M9.90110887,0.115584393 C10.163108,-0.0385281309 10.4880547,-0.0385281309 10.7500539,0.115584393 L10.7500539,0.115584393 L20.238426,5.6968123 C20.4941474,5.84723218 20.6511628,6.12175622 20.6511628,6.41843721 L20.6511628,6.41843721 L20.6511628,17.5812837 C20.6511628,17.8779581 20.4941542,18.1524771 20.2384417,18.3028994 L20.2384417,18.3028994 L10.7500696,23.8844063 C10.4880626,24.0385312 10.1631002,24.0385312 9.90109311,23.8844063 L9.90109311,23.8844063 L0.412721038,18.3028994 C0.157008464,18.1524771 3.80718711e-16,17.8779581 3.80718711e-16,17.5812837 L3.80718711e-16,17.5812837 L3.80718711e-16,6.41843721 C3.80718711e-16,6.12175622 0.157015349,5.84723218 0.412736817,5.6968123 L0.412736817,5.6968123 L9.90110887,0.115584393 Z M10.3255814,1.80781396 L1.67386047,6.89637208 L1.67386047,17.1019535 L10.3255814,22.1905116 L18.9756279,17.1019535 L18.9756279,6.89637208 L10.3255814,1.80781396 Z M15.4978584,8.76404099 C15.7157336,9.11254287 15.6458142,9.5593891 15.3522272,9.82653407 L15.2317729,9.91774688 L11.1616744,12.4610232 L11.1627907,17.0232558 C11.1627907,17.4856337 10.7879593,17.8604651 10.3255814,17.8604651 C9.91457877,17.8604651 9.57274876,17.564302 9.50186063,17.1737452 L9.48837208,17.0232558 L9.48725579,12.4643721 L5.4163078,9.91752974 C5.02436314,9.67222844 4.90548523,9.15563852 5.15078651,8.76369386 C5.36883212,8.4152986 5.80122923,8.28265976 6.16990082,8.42976858 L6.3046224,8.49817257 L10.3205581,11.012093 L14.3441525,8.4979554 C14.7362171,8.25284584 15.252749,8.37197641 15.4978584,8.76404099 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Coding.displayName = 'Coding';
export default Coding;
