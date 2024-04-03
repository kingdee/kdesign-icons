import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TaxPolicyOperationAndMaintenance = ({
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
          id="1801.税务政策运维"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M28,4 C29.6568542,4 31,5.34314575 31,7 C31,8.65685425 29.6568542,10 28,10 C27.808661,10 27.6215057,9.98208728 27.4401196,9.94784729 L24.499837,18.7248892 C25.4298568,19.7099176 26,21.0383768 26,22.5 C26,25.5375661 23.5375661,28 20.5,28 C17.4624339,28 15,25.5375661 15,22.5 C15,21.1507621 15.4858365,19.9149975 16.2921117,18.9581038 L7.59245295,12.4849523 C6.96735182,12.8138631 6.25541321,13 5.5,13 C3.01471863,13 1,10.9852814 1,8.5 C1,6.01471863 3.01471863,4 5.5,4 C7.98528137,4 10,6.01471863 10,8.5 C10,8.52052839 9.99986254,8.54102468 9.99958849,8.56148799 L25.0478666,7.53667201 C25.0164193,7.36254387 25,7.1831894 25,7 C25,5.34314575 26.3431458,4 28,4 Z M25.5624092,8.74914544 L9.79148687,9.8579405 C9.60863105,10.4363567 9.31206851,10.9642452 8.92803083,11.4153745 L17.4000306,17.9562125 C18.2826865,17.3528633 19.3501354,17 20.5,17 C21.5244583,17 22.4834974,17.2800926 23.304716,17.7678764 L26.1810869,9.38589664 C25.9447863,9.20547552 25.7360823,8.99074695 25.5624092,8.74914544 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
TaxPolicyOperationAndMaintenance.displayName =
  'TaxPolicyOperationAndMaintenance';
export default TaxPolicyOperationAndMaintenance;
