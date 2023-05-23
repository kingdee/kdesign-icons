import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const LaborCostBusinessType = ({
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
          id="378.人力成本业务类型"
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
              d="M13.9533479,12.9230769 L13.9533479,13.3252811 C12.1377043,14.6112777 10.9632661,16.6587786 10.9632661,18.9649476 C10.9632661,20.9375401 11.8225222,22.7208827 13.207335,24.0002985 L2.18873685,23.9998398 C0.979930841,23.9998398 0,23.1324068 0,22.0623742 L0.376222021,16.8540401 C0.674862336,14.344835 3.06292886,12.9230769 5.21339257,12.9230769 L13.9533479,12.9230769 Z M18.4615385,12.9230769 C21.5203463,12.9230769 24,15.4027306 24,18.4615385 C24,21.5203463 21.5203463,24 18.4615385,24 C15.4027306,24 12.9230769,21.5203463 12.9230769,18.4615385 C12.9230769,15.4027306 15.4027306,12.9230769 18.4615385,12.9230769 Z M16.3846154,19.1538462 L15,19.1538462 L15,20.5384615 L16.3846154,20.5384615 L16.3846154,19.1538462 Z M21.9230769,19.1538462 L17.0769231,19.1538462 L17.0769231,20.5384615 L21.9230769,20.5384615 L21.9230769,19.1538462 Z M16.3846154,16.3846154 L15,16.3846154 L15,17.7692308 L16.3846154,17.7692308 L16.3846154,16.3846154 Z M21.9230769,16.3846154 L17.0769231,16.3846154 L17.0769231,17.7692308 L21.9230769,17.7692308 L21.9230769,16.3846154 Z M11.0769231,0 C14.1357309,0 16.6153846,2.47965368 16.6153846,5.53846154 C16.6153846,8.5972694 14.1357309,11.0769231 11.0769231,11.0769231 C8.01811522,11.0769231 5.53846154,8.5972694 5.53846154,5.53846154 C5.53846154,2.47965368 8.01811522,0 11.0769231,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
LaborCostBusinessType.displayName = 'LaborCostBusinessType';
export default LaborCostBusinessType;
