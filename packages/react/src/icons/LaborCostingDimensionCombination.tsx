import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const LaborCostingDimensionCombination = ({
  size = '1em',
  fill = 'currentColor',
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
          id="376.人力成本核算维度组合"
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
              d="M1.6,8 L14.4,8 C15.2836555,8 16,8.71634438 16,9.6 L16,22.4 C16,23.2836555 15.2836555,24 14.4,24 L1.6,24 C0.71634438,24 0,23.2836555 0,22.4 L0,9.6 C0,8.71634438 0.71634438,8 1.6,8 Z M17.9089499,17.8823529 L17.9089499,8 C17.9089499,6.80394071 17.6154642,6.11862362 16,6.11862362 L5.66687729,6.11862362 L5.66687729,5.17647059 C5.66687729,3.99428424 6.74971567,3.76470588 7.52941176,3.76470588 L18.8235294,3.76470588 C19.6032255,3.76470588 20.2352941,4.39677446 20.2352941,5.17647059 L20.2352941,16.4705882 C20.2352941,17.2502843 19.6032255,17.8823529 18.8235294,17.8823529 L17.9089499,17.8823529 Z M21.6736558,14.1176471 L21.6736558,4.23529412 C21.6736558,3.03923483 21.3801701,2.35391774 19.7647059,2.35391774 L9.43158314,2.35391774 L9.43158314,1.41176471 C9.43158314,0.2076057 10.5144215,0 11.2941176,0 L22.5882353,0 C23.3679314,0 24,0.632068578 24,1.41176471 L24,12.7058824 C24,13.4855785 23.3679314,14.1176471 22.5882353,14.1176471 L21.6736558,14.1176471 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
LaborCostingDimensionCombination.displayName =
  'LaborCostingDimensionCombination';
export default LaborCostingDimensionCombination;
