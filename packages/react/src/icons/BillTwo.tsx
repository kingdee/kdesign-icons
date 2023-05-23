import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BillTwo = ({
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
          id="137.票据"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="票据"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M20.125,0 C20.5737313,0 20.9435688,0.34313044 20.9941133,0.78518815 L21,0.888846414 L21,23.1100068 C21,23.7359828 20.3856355,24.1546355 19.8262884,23.9457177 L19.7336881,23.9050152 L16.652125,22.3402658 L13.9966215,23.8817415 C13.7948689,23.9988532 13.558673,24.0281311 13.3396987,23.9695753 L13.2318859,23.932978 L13.1283785,23.8817415 L10.5,22.356265 L7.87162155,23.8817415 C7.66986886,23.9988532 7.43367302,24.0281311 7.21469865,23.9695753 L7.10688588,23.932978 L7.00337845,23.8817415 L4.347,22.3402658 L1.2663119,23.9050152 C0.747565532,24.1684928 0.147142464,23.855379 0.023110752,23.3160367 L0.005573792,23.2123444 L0,23.1100068 L0,0.888846414 C0,0.433014117 0.337785168,0.0573242225 0.77295652,0.00597993113 L0.875,0 L20.125,0 Z M19.25,1.77769283 L1.75,1.77769283 L1.75,21.6709644 L3.9836881,20.5373055 C4.17994268,20.4376254 4.40323976,20.417618 4.60978386,20.4760485 L4.71145707,20.5117945 L4.80912158,20.5605792 L7.4375,22.0851669 L10.0658785,20.5605792 C10.2676311,20.4434675 10.503827,20.4141896 10.7228013,20.4727454 L10.8306141,20.5093428 L10.9341215,20.5605792 L13.5625,22.0851669 L16.1908785,20.5605792 C16.3813878,20.449994 16.6032485,20.4174351 16.8126652,20.4641373 L16.9161339,20.4940992 L17.0163119,20.5373055 L19.25,21.6718533 L19.25,1.77769283 Z M14.875,12.4438498 C15.3582491,12.4438498 15.75,12.8417999 15.75,13.3326962 C15.75,13.8235925 15.3582491,14.2215426 14.875,14.2215426 L6.125,14.2215426 C5.64175088,14.2215426 5.25,13.8235925 5.25,13.3326962 C5.25,12.8417999 5.64175088,12.4438498 6.125,12.4438498 L14.875,12.4438498 Z M14.875,7.11077132 C15.3582491,7.11077132 15.75,7.50872145 15.75,7.99961773 C15.75,8.49051401 15.3582491,8.88846414 14.875,8.88846414 L6.125,8.88846414 C5.64175088,8.88846414 5.25,8.49051401 5.25,7.99961773 C5.25,7.50872145 5.64175088,7.11077132 6.125,7.11077132 L14.875,7.11077132 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BillTwo.displayName = 'BillTwo';
export default BillTwo;
