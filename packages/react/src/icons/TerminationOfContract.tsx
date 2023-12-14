import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TerminationOfContract = ({
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
          id="1371-合同终止"
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
              d="M6.246,19.686 C10.0922694,22.5664723 15.4757829,22.1594036 18.845189,18.7333255 C22.2145952,15.3072474 22.5318203,9.91769345 19.5876,6.12 L6.2472,19.6848 L6.246,19.686 Z M4.5204,18.018 L17.892,4.422 C14.0462498,1.43434526 8.57274048,1.79953269 5.15797706,5.2716021 C1.74321365,8.74367152 1.46916168,14.2225 4.5204,18.018 Z M12,24 C5.3724,24 0,18.6276 0,12 C0,5.3724 5.3724,0 12,0 C18.6276,0 24,5.3724 24,12 C24,18.6276 18.6276,24 12,24 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TerminationOfContract.displayName = 'TerminationOfContract';
export default TerminationOfContract;
