import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FundingPlan = ({
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
          id="717.资金计划"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M4.44444444,1.77640604 L4.44444444,3.55555556 C4.44444444,4.00184628 4.77334455,4.37131823 5.20197985,4.43480661 L5.33333333,4.44444444 L6.22222222,4.44444444 C6.66851294,4.44444444 7.0379849,4.11554434 7.10147327,3.68690904 L7.11111111,3.55555556 L7.11111111,1.77640604 L16.8875171,1.77640604 L16.8888889,3.55555556 C16.8888889,4.00184628 17.217789,4.37131823 17.6464243,4.43480661 L17.7777778,4.44444444 L18.6666667,4.44444444 C19.1129573,4.44444444 19.4824293,4.11554434 19.5459177,3.68690904 L19.5555556,3.55555556 L19.5541838,1.77640604 L23.1111111,1.77772927 C23.6020309,1.77772927 24,2.17569839 24,2.66661816 L24,20.4444444 C24,20.9353642 23.6020309,21.3333333 23.1111111,21.3333333 L0.888888889,21.3333333 C0.397969119,21.3333333 0,20.9353642 0,20.4444444 L0,2.66661816 C0,2.17569839 0.397969119,1.77772927 0.888888889,1.77772927 L4.44444444,1.77640604 Z M14.7555583,7.11112158 L11.8847737,9.6351166 L9.01630602,7.11112158 L8.24956769,7.76344217 L11.502563,10.531004 L11.5020576,10.6666667 L8.00000217,10.6666876 L8.00000217,11.5555791 L11.5020576,11.5555556 L11.5020576,14.2222222 L8.00000217,14.2222536 L8.00000217,15.1111451 L11.5020576,15.1111111 L11.502563,17.7778196 L12.310644,17.7778196 L12.3100137,15.1111111 L16.0000022,15.1111451 L16.0000022,14.2222536 L12.3100137,14.2222222 L12.3100137,11.5555556 L16.0000022,11.5555791 L16.0000022,10.6666876 L12.3100137,10.6666667 L12.3100137,10.4951989 L15.5222966,7.76344217 L14.7555583,7.11112158 Z M6.22222222,0 L6.22222222,3.55555556 L5.33333333,3.55555556 L5.33333333,0 L6.22222222,0 Z M18.6666667,0 L18.6666667,3.55555556 L17.7777778,3.55555556 L17.7777778,0 L18.6666667,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FundingPlan.displayName = 'FundingPlan';
export default FundingPlan;